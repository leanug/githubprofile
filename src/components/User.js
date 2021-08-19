import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

const User = () => {
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
        { company && 
          <div>
            <span>
              <MdBusiness></MdBusiness> { company }
            </span>
          </div>
        }
        <div>
          <span>
            <MdLocationOn></MdLocationOn> { location || 'earth' }
          </span>
        </div>
        { blog && 
          <div>
            <a href={`https://${ blog }`}>
              <MdLink></MdLink>
              { blog }
            </a>
          </div>
        }
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
    
    .bio {
      max-width: 70rem;
    }

    p {
      color: var(--clr-delta);
      font-size: 2rem;
      font-weight: bold;
    }

    a {
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
    }
  }
 
  .links {
    div {
      display: inline-block;
      margin: 0 2rem;

      @media (max-width: 576px) {
        margin-bottom: 1rem;
      }
    }

    span,
    a {
      align-items: center;
      text-align: center;
      display: flex;

      svg {
        margin-right: 0.5rem;
        font-size: 2rem;
        color: var(--clr-alpha);
      }
    }
  }
`

export default User;
