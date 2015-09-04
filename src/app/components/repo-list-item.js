import React from 'react'

export default class RepoListItem extends React.Component {

  render() {
    return <li key={this.props.key}>
      <h3>{this.props.name}</h3>
      <p>{this.props.desc}</p>
    </li>
  }

}