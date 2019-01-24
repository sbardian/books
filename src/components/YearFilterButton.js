import React from 'react';
import { css } from 'react-emotion';

export default ({ onYearFilter, year }) => (
  <button
    type="button"
    className={css`
      height: 30px;
      background: white;
      color: black;
      text-align: center;
      align-items: center;
    `}
    onClick={() => onYearFilter(year)}
  >
    <span
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {year}
    </span>
  </button>
);
