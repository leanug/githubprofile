import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = React.useContext( GithubContext )

  const languages = repos.reduce(( total, item ) => {
    const { language, stargazers_count } = item

      if ( ! language )
        return total
      
      if ( ! total[ language ])
        total[ language ] = { 
          label: language, 
          value: 1, 
          stars: stargazers_count
        }
      
      if ( total[ language ])
        total[ language ] = {
          ...total[ language ],
          value: total[ language ].value + 1,
          stars: total[ language ].stars + stargazers_count
        }

      return total
    }, {})

  /* Most usded languages */
  const mostUsedLang = Object.values( languages )
    .sort(( a, b ) => b.value - a.value)
    .slice( 0, 5 )
  
  /* Most stars per language */ 
  const mostStarsPerLang = Object.values( languages )
    .sort(( a, b ) => b.stars - a.stars)
    .slice( 0, 5 )
    .map( item => {
      return { ...item, value: item.stars }
    })

    const { stars } = repos.reduce(( acc, item ) => {
      const { forks, stargazers_count, name } = item
      
      acc.stars[ stargazers_count ] = {
        label: name,
        value: stargazers_count,
      }

      acc.forks[ forks ] = {
        label: name,
        value: forks,
      }

      return acc
    }, { stars: {}, forks: {}})
    
    const mostStars = Object.values( stars )
      .slice(-5)
      .reverse()

  return (
    <section className="wrapper mt-60 mb-60">
      <Wrapper>
        <Pie3D data={ mostUsedLang } />
        <Doughnut2D data={ mostStarsPerLang } />
        <Column3D data={ mostStars } />
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: repeat( auto-fit, minmax( 28rem, 1fr) );

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos;
