import React from "react";
import "./search.css"

function SearchBar({onSearch}){
    return(
    <div className="search-bar">
     <input
      type="text"
      placeholder="Search by description"
      className="search"
      onChange={(event) => onSearch(event.target.value)}
     />    
    </div>
    )
}
export default SearchBar;