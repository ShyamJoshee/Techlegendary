import React from 'react'
// import {Data} from "../../data"


const Search = ({setQuery}) => {

    

  return (
    <div className='search'>
      <div className='search__box'>
            <input type="text"        
            placeholder='Search User...'
            onChange={(e)=> setQuery(e.target.value)}/>
            <button>
              Search
            </button>
        </div> 
    </div>
  )
}

export default Search