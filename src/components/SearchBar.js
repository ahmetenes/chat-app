import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import '../styles/SearchBar.css'
function SearchBar() {
    return (
        <div className="container">
            <input type="text" placeholder="Search"></input>
            <SearchIcon />
        </div>
    )
}

export default SearchBar
