import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const { githubUser } = React.useContext( GithubContext )
  const { public_repos, followers, following, public_gists } = githubUser
  const items = [
    { 
      id: 1, 
      icon: <GoRepo className="icon" />, 
      label: 'repos', 
      value: public_repos, 
    },
    { 
      id: 2, 
      icon: <FiUsers className="icon" />, 
      label: 'followers', 
      value: followers, 
    },
    { 
      id: 3, 
      icon: <FiUserPlus className="icon" />, 
      label: 'following', 
      value: following, 
    },
    { 
      id: 4, 
      icon: <GoGist className="icon" />, 
      label: 'gists', 
      value: public_gists, 
    },
  ]

  return (
    <section className="section mt-20">
      <Wrapper className="section-center">
        { items.map( item => {
          return <Item key={ item.id} {...item} />
        }) }
      </Wrapper>
    </section>
  )
};

/* Item component */
const Item = ({ icon, label, value }) => {
  return (
    <article className="item">
      <span className="icon">{ icon }</span>
      <div>
        <h2>{ value }</h2>
        <p>{ label }</p>
      </div>
    </article>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  max-width: 110rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  .item {
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    padding: 1.2rem 2rem;
    background-color: var(--clr-omega);

    span {
      width: 6rem;
      height: 6rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
  
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }

    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }

    .icon {
      background: var(--clr-gamma);
      color: var(--clr-alpha);
      font-size: 2.5rem;
    }
  }
`;

export default UserInfo;
