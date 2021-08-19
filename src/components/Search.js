import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa'
import { GithubContext } from '../context/context';

const Search = () => {
  const [ user, setUser ] = useState( '' )
  const { requests, error, searchGithubUser } = React.useContext( GithubContext )

  const handleSubmit = e => {
    e.preventDefault()
    user && searchGithubUser( user )
  }

  return (
    <Wrapper>
      <div className="container">
        { error.show && <ErrorWrapper><p>{ error.msg }</p></ErrorWrapper> }
        <FaGithub className="icon" />
        <h2 className="mt-10">GitHub Profile</h2>
        <form onSubmit={ handleSubmit }>
          <div className="form-control">
            <MdSearch />
            <input 
              type="text" 
              placeholder="enter github user" 
              value={ user }
              onChange={ e => setUser( e.target.value )}
            />
            { requests > 0 && <button type="submit">search</button> }
          </div>
        </form>
        <span>Requests : { requests } / 60</span>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    text-align: center;
  }

  .icon {
    color: var(--clr-alpha);
    font-size: 4rem;
  }

  form {
    margin: 1.5rem 0;
  }

  .form-control {
    background-color: var(--clr-omega);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 1rem ;
    width: 32rem;

    input {
      border-color: transparent;
      outline-color: var(--clr-beta);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;

      &:focus{
        outline: none;
      }
    }

    input::placeholder {
      color: var(--clr-delta);
      text-transform: capitalize;
    }

    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.6rem 0.9rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-alpha);
      color: var(--clr-omega);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-psi);
      }
    }

    svg {
      color: var(--clr-alpha);
    }
    input,
    button,
    svg {
      font-size: 1.6rem;
    }
  }

  h3 {
    margin-bottom: 0;
    color: var(--clr-delta);
    font-weight: 400;
  }
`

const ErrorWrapper = styled.article`
  text-transform: capitalize;
  margin-bottom: 2rem;

  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`

export default Search;
