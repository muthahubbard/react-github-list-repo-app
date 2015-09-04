import React from 'react'

export default class SearchBar extends React.Component {

  render() {
    return <div>
      <form>
        <label htmlFor="searchText">Search Repo</label>
        <input id="searchText" type="text" />
      </form>
    </div>
  }

}