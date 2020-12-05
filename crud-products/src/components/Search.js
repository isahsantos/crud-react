import React from 'react';
import '../assets/search.css'
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
    <a href="#" class="search-button">
  <SearchIcon></SearchIcon>
  </a>
  </div>
  );
}

export default SearchBar;