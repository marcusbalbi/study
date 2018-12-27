import React from 'react'

const SearchBar = () => {
  return (
    <div className="ui segment">
      <form className="ui form" >
        <div className="field">
        <label>Search Pictures:
          <input type="text" />
        </label>
        </div>
      </form>
    </div>
  )
}

export default SearchBar