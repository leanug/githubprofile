import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { GithubContext } from '../context/context';

const PopularRepos = () => {
    const { repos } = React.useContext( GithubContext )
    const [ topRepos, setTopRepos ] = useState([])
    
    const getTopRepos = sortBy => {
        const topRepos = repos
            .sort(( a, b ) => ( b[sortBy] - a[sortBy]) )
            .slice( 0, 6 )

        setTopRepos( topRepos )
    }

    useEffect(() => {
        getTopRepos('stargazers_count')
    }, [])
   
    return (
        <section className="wrapper">
            <h4 className="mb-20">Popular Repos</h4>
            <span>by</span>
            <button onClick={()=> getTopRepos( 'stargazers_count' )}>Stars</button>
            <button onClick={()=> getTopRepos( 'forks_count' )}>Forks</button>
            <Wrapper>
                { topRepos.map(( item, index ) => {
                    return (
                        <a href={ item.git_url } key={ index }>
                            <header>
                                <h5>{ item.name }</h5>
                                <p className="mt-10 mb-20">{ item.description }</p>
                            </header>
                            <footer>
                                <span>{ item.language }</span>
                                <span>{ item.stargazers_count }</span>
                                <span>{ item.forks_count }</span>
                                <span>{ item.size }</span>
                            </footer>
                        </a>
                    )
                })}
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem 2rem;

    a {
        color: var(--clr-omega);
        display: grid;
        grid-template-rows: 1fr auto;
        background-color: var(--clr-psi);
        padding: 2rem;
        border-radius: var(--radius);
        flex-direction: column;

        span {
            margin-right: 2rem;
        }
    }

`

export default PopularRepos
