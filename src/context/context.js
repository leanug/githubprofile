import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
const GithubContext = React.createContext()

/**
 * Returns the component GithubProvider, the context
 * provider. 
 * 
 * @param { node } children The whole application
 */
const GithubProvider = ({ children }) => {
    const [ githubUser, setGithubUser ] = useState({})
    const [ repos, setRepos ] = useState({})
    const [ followers, setFollowers ] = useState({})
    /* Request loading */
    const [ requests, setRequests ] = useState( 0 )
    const [ isLoading, setIsLoading ] = useState( false )
    const [ searchProfile, setSearchProfile ] = useState( true )
    /* Error */
    const [ error, setError ] = useState({ show: false, msg: '' })

    const searchGithubUser = async ( user ) => {
        /* Hides the error message every time there is an user search */
        toggleError()
        setIsLoading( true )

        try {
            /* Get the user */
            const response = await axios( `${ rootUrl }/users/${ user }` );
            setGithubUser(response.data);
            /* 
             * Get the user's repos and followers
             * login: user login name
             * url repost example: https://api.github.com/users/login/repos?per_page=100
             * url followers example: https://api.github.com/users/login/followers?per_page=100
             */
            const { login, followers_url } = response.data
            await Promise.allSettled([
                axios( `${ rootUrl }/users/${ login }/repos?per_page=100` ),
                axios( `${ followers_url }?per_page=100` )
            ]).then(results => {
                const [ repos, followers ] = results
                const status = 'fulfilled'

                repos.status === status && setRepos( repos.value.data )
                followers.status === status && setFollowers( followers.value.data )
                
                setSearchProfile( false )
            }).catch( err => console.log( err ))
        } catch ( err ) {
            toggleError( true, 'there is no user with that username' );
        }

        setIsLoading( false )
    }

    /* Error msg */
    const toggleError = ( show = false, msg = '' ) => {
        setError({ show, msg })
    }

    useEffect(()=> {
        /* Check rate */
        const checkRequest = () => {
            axios
                .get( `${rootUrl}/rate_limit` )
                .then( response => {
                    let { data: {rate: { remaining }} } = response
                    setRequests( remaining )
                    /* Throw error */
                    if ( remaining === 0 )
                        toggleError( true, 'Sorry, you have exeeded your hourly rate limit!')
                })
                .catch( error => {
                    /* Handle error */
                    console.log('0 requests');
                })
        }

        checkRequest()
    }, [])

    return (
        <GithubContext.Provider value={{ 
            githubUser, 
            repos, 
            followers, 
            requests, 
            error,
            searchGithubUser,
            isLoading,
            searchProfile,
            setSearchProfile
        }}>
            { children }
        </GithubContext.Provider>
    )
}

export { GithubProvider, GithubContext };