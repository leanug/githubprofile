import React from 'react';
import { Footer, Info, Repos, User, Search, Navbar, PopularRepos } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import GithubCorner from 'react-github-corner';

const Dashboard = () => {
  const { isLoading, searchProfile } = React.useContext( GithubContext )

  if ( isLoading )
    return (
        <img src={loadingImage} className="loading-img" alt="loading" />
    )

  return (
    <main>
      { searchProfile &&  <Search /> }
      { ! searchProfile && 
        <>
          <Navbar />
          <User />
          <Info />
          <Repos />
          <PopularRepos />
          <Footer />
          <GithubCorner
            href="https://github.com/leanug/githubprofile"
          />
        </>
      }
    </main>
  );
};



export default Dashboard;
