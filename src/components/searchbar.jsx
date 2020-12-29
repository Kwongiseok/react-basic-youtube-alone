import React, { memo, useState } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
// 1) 유튜브 로고 가운데 어떻게 하얗게 하지?

const Searchbar = (props) => {
  const handleSearch = (e) => {
    e.preventDefault();
    props.onHandleClick('');
    props.onHandleSearch();
  };
  const handleInput = (e) => {
    props.onHandleInput(e);
  };
  return (
    <div className='searchbar'>
      <AiFillYoutube className='navbar-logo' />
      <span className='navbar-text'>Youtube</span>
      <form className='search-form'>
        <input
          type='text'
          className='search-input'
          placeholder='Search...'
          onChange={handleInput}
        ></input>
        <button className='search-button' onClick={handleSearch}>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};
export default Searchbar;
