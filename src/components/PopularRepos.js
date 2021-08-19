import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { FaCodeBranch, FaCircle, FaStar } from 'react-icons/fa'
import { GithubContext } from '../context/context';

const PopularRepos = () => {
    const { repos } = React.useContext( GithubContext )
    const [ topRepos, setTopRepos ] = useState([])
    const [ sortBy, setSortBy ] = useState( 'stargazers_count' )
    
    const getTopRepos = sortBy => {
        const topRepos = repos
            .sort(( a, b ) => ( b[sortBy] - a[sortBy] ))
            .slice( 0, 9 )

        setSortBy( sortBy )
        setTopRepos( topRepos )
    }

    useEffect(() => {
        const topRepos = repos
            .sort(( a, b ) => ( b[sortBy] - a[sortBy] ))
            .slice( 0, 9 )

        setSortBy( sortBy )
        setTopRepos( topRepos )
    }, [ sortBy, repos ])
   
    return (
        <section className="wrapper">
            <Header className="mb-20">
                <h4 className="mr-10">Popular Repos</h4>
                <span className="mr-10">by</span>
                <button 
                    onClick={()=> getTopRepos( 'stargazers_count' )}
                    onKeyPress={()=> getTopRepos( 'stargazers_count' )}
                    aria-label="Order popular repos by number of stars"
                    className={`mr-10 ${ sortBy === 'stargazers_count' ? 'active' : '' }`}
                >
                    Stars
                </button>
                <button 
                    onClick={()=> getTopRepos( 'forks_count' )}
                    onKeyPress={()=> getTopRepos( 'forks_count' )}
                    aria-label="Order popular repos by number of forks"
                    className={ sortBy === 'forks_count' ? 'active' : '' }
                >
                    Forks
                </button>
            </Header>
            <Wrapper>
                { topRepos.map(( item, index ) => {
                    return (
                        <a href={ item.git_url } key={ index }>
                            <header>
                                <h5>{ item.name }</h5>
                                <p className="mt-20 mb-30">{ item.description }</p>
                            </header>
                            <footer>
                                { item.language && <span><FaCircle className="icon" /> { item.language }</span>}
                                <span><FaStar className="icon" /> { item.stargazers_count }</span>
                                <span><FaCodeBranch className="icon" /> { item.forks_count }</span>
                                { item.size && <span>{ item.size } KB</span> }
                            </footer>
                        </a>
                    )
                })}
            </Wrapper>
        </section>
    )
}

const Header = styled.header`
    display: flex;
    align-items: center;

    button {
        background-color: var(--clr-beta);
        margin: 1rem;
        cursor: pointer;
        padding: 1rem;
        border: none;
        color: var(--clr-delta);
        border-bottom: 2px solid var(--clr-epsilon);
        transition: all 0.25s linear;

        &.active {
            border-bottom: 2px solid var(--clr-alpha);
            color: var(--clr-psi);
        }
    }
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 28rem, 1fr ));
    grid-gap: 2rem;

    @media screen and ( min-width: 992px ) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .icon {
        margin-right: 0.5rem;
    }

    a {
        color: var(--clr-psi);
        display: grid;
        grid-template-rows: 1fr auto;
        padding: 2rem;
        border-radius: var(--radius);
        flex-direction: column;
        background-color: white;
    }

    footer {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        width: 100%;
        justify-content: space-between;

        span {
            display: flex;
            align-items: center;
        }
    }
`

export default PopularRepos
