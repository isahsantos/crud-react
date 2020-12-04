import React from 'react';

const SearchBar =  ({input:keyword, onChange:setKeyword})  => {
  const BarStyling = {width:"auto",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  console.log("Iput",setKeyword)
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Busque por um produto"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar