import React from 'react';
import { 
  Footer, 
  Info, 
  Repos, 
  User, 
  Search, 
  Navbar, 
  PopularRepos, 
  Loading 
} from '../components';
import { GithubContext } from '../context/context';
import GithubCorner from 'react-github-corner';

const Dashboard = () => {
  const { isLoading, searchProfile } = React.useContext( GithubContext )

  if ( isLoading )
    return (
        <Loading />
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
