import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import mq from './mediaQueries';

const Book = ({ book }) => {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 20px;
        grid-template-rows: auto 1fr;
        background: #dce0e6;
        box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.2);
      `}
    >
      <div
        className={css`
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 1fr auto;
          align-items: center;
          background: #567ebb;
          padding: 0 20px 0 20px;
        `}
      >
        <h1>{book.title}</h1>
        <a
          className={css`
            text-decoration: none;
          `}
          href={book.amazonUrl}
        >
          <img
            className={css`
              width: 40px;
            `}
            src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Amazon-icon.png"
            alt="amazon"
          />
        </a>
      </div>
      <div
        className={css`
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 200px 1fr;
          grid-gap: 20px;
          color: #1f1f20;
          padding: 0 20px 20px 20px;
          ${mq.sm(css`
            grid-template-columns: 1fr;
          `)};
        `}
      >
        <img
          className={css`
            width: 200px;
          `}
          src={book.imageUrl}
          alt={book.title}
        />
        <div>
          <h2 className={css(`margin-top: 0;`)}>Author: {book.author}</h2>
          <h3>ISBN: {book.isbn}</h3>
          <h3>{book.description}</h3>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    isbn: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    amazonUrl: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {},
};

export default Book;
