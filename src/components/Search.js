import React from 'react';
import '../assets/styles/search.css'
import SearchIcon from '@material-ui/icons/Search';
const SearchBar =  ({input:keyword, onChange:setKeyword})  => {
  console.log("Iput",setKeyword)
  return (
     <div class="search-box">
    <input  class="search-txt"
     key="random1"
     value={keyword}
     placeholder={"Busque por um produto"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    <p className="search-button">
  <SearchIcon></SearchIcon>
  </p>
  </div>
  );
}

export default SearchBar;