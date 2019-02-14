import React from 'react';
import { css } from 'react-emotion';

export default ({ onYearFilter, year }) => (
  <button
    type="button"
    className={css`
      height: 30px;
      background: #4b4545b3;
      color: #c2c2c2;
      text-align: center;
      align-items: center;
      border: none;
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
