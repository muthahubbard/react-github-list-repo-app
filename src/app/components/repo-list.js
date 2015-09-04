import React from 'react'
import RepoListItem from './repo-list-item'

export default class RepoList extends React.Component {

  render () {

  const repos = this.props.apiData.map( (repo, i) => {
    console.log(repo);
    return <RepoListItem 
        key={repo.id}
        name={repo.name}
        desc={repo.description}
      />
  });    

    return <ul>{repos}</ul>
  }
}