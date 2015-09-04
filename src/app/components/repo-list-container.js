import React from 'react'
import AltContainer from 'alt/AltContainer'
import RepoStore from '../stores/repo-store'
import RepoActions from '../actions/repo-actions'

import RepoList from './repo-list'



export default class RepoListContainer extends React.Component {

  render() {

    return <AltContainer store={RepoStore} actions={RepoActions}>
        <RepoList />
      </AltContainer>
  }

}