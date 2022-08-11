import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    return ( 
        <div className='searchbar'>
            <input type="text" />
            <button>search</button>
        </div>
     );
}
 
export default SearchBar;