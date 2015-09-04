import React from 'react'

import RepoActions from '../actions/repo-actions';

import SearchBarContainer from './search-bar-container'
import RepoListContainer from './repo-list-container'


export default class App extends React.Component {

  componentWillMount () {
    RepoActions.getRepos();
  }

  render() {
    return <div className="app-wrapper">
      <SearchBarContainer />
      <RepoListContainer />
    </div>
  }
}