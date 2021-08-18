import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';

const Navbar = () => {
  const { requests, setSearchProfile } = React.useContext( GithubContext )

  return (
      <Wrapper>
          <button 
            onClick={ () => setSearchProfile( true ) }
            onKeyPress={ () => setSearchProfile( true ) }
          >
            Search Profile
          </button>
          <span>Requests : { requests } / 60</span>
      </Wrapper>
  )
};

const Wrapper = styled.nav`
  margin: 2rem auto 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }

  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    border: transparent;
    text-transform: capitalize;
    color: var(--clr-omega);
    cursor: pointer;
    background-color: var(--clr-alpha);
    padding: 1rem 2rem;
    border-radius: var(--radius);

    &:hover {
      background-color: var(--clr-alpha);
    }
  }
`;

export default Navbar;
