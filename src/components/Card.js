import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const Card = () => {
  const { githubUser } = React.useContext( GithubContext )
  const { 
    avatar_url, 
    html_url, 
    name, 
    company, 
    blog, 
    bio, 
    location, 
    twitter_username 
  } = githubUser

  return (
    <Wrapper>
      <header>
        <a href={ html_url }>
          <img src={ avatar_url } alt={ name } />
        </a>
        
        <div>
        <a href={ html_url }><h1>{ name }</h1></a>
          <p className="mb-20">@{ twitter_username || 'username not available' }</p>
        </div>
      </header>
      <p className="bio mb-20">{ bio }</p>
      <div className="links mb-10">
        <span>
          <MdBusiness></MdBusiness> { company }
        </span>
        <span>
          <MdLocationOn></MdLocationOn> { location || 'earth' }
        </span>
        <a href={`https://${ blog }`}>
          <MdLink></MdLink>
          { blog }
        </a>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.article`
  margin-top: 6rem;
  padding: 0 2rem;
  text-align: center;

  header {
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    p {
      color: var(--clr-delta);
      font-size: 2rem;
      font-weight: bold;
    }

    a {
      color: var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    display: flex;
    justify-content: center;
    span,
    a {
      margin: 0.5rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 2rem;
        color: var(--clr-alpha);
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
