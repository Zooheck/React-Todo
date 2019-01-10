import React from 'react'

const SearchForm = (props) => {
  return (
    <form>
      <input 
        type="text"
        placeholder="Search tasks"
        onChange={props.searchTasks}
      />
    </form>
  )
}

export default SearchForm
