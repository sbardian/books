import React from 'react';
import { css } from 'react-emotion';

const SearchBox = ({ onSearch }) => {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: center;
        padding: 20px;
      `}
    >
      <input
        id="books-search-input"
        type="text"
        onChange={onSearch}
        className={css`
          font-size: 18pt;
          height: 40px;
          border: none;
          background: transparent;
          border-bottom: 2px solid gray;
          color: #dce0e6;
          min-width: 100px;
        `}
      />
      <img
        className={css`
          height: 40px;
          width: 40px;
        `}
        alt="Search"
        src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
      />
    </div>
  );
};

export default SearchBox;
