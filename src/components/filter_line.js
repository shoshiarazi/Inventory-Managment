import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style/filter_line.css'
import './style/shared_page.css';
import data from '../dataForProject.js';

const Filter_line = ({ setFilterInfo, selectedButton, setSelectedButton }) => {
  const [inputSearch, setInputSearch] = useState('');
  const [wordSearch, setWordSearch] = useState('');

  const handleIconClick = () => {
    setWordSearch(inputSearch);
    setFilterInfo(wordSearch);
  };

  const handleInputChange = (event) => {
    setInputSearch((event.target.value).toLowerCase())
  }
  useEffect(() => {
    setFilterInfo(wordSearch);

  }, [wordSearch]);
  const handleClick = (wordFilter) => {
    setFilterInfo(wordFilter);
    setSelectedButton(wordFilter);
  };
  return (
    <div>
      <div id="filterLine">
        < div id="searchBox">
          <i onClick={handleIconClick} className="bi bi-search"></i>
          <input value={inputSearch} onChange={handleInputChange} type="search" placeholder="Search"></input>
        </div>
        <div id="fiveButton" >
          <button className={selectedButton === "electronics" ? "selectedButton" : ""}
            onClick={() => handleClick("electronics")}>Electronics</button>
          <button className={selectedButton === "jewelery" ? "selectedButton" : ""}
            onClick={() => handleClick("jewelery")}>Jewelery</button>
          <button className={selectedButton === "women's clothing" ? "selectedButton" : ""}
            onClick={() => handleClick("women's clothing")}>Women</button>
          <button className={selectedButton === "men's clothing" ? "selectedButton" : ""}
            onClick={() => handleClick("men's clothing")}>Men</button>
          <button className={selectedButton === "" ? "selectedButton" : ""}
            onClick={() => handleClick("")}>All Products</button>

        </div>

      </div>

    </div>

  );
}

export default Filter_line;