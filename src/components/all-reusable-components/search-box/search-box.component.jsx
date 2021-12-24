import React from "react";

import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <form class="d-flex flex-fill">
        <i class="search-icon bi bi-search"></i>
        <input 
            class="custom-border-radius form-control text-light p-2 ps-5"
            type="search" 
            text= "search"
            aria-label="Search"
            placeholder= {placeholder}  
            onChange = {handleChange}
        />
    </form>
);

export default SearchBox;