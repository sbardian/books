import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

const Book = ({ book }) => {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 200px 1fr 300px;
      `}
    >
      <p>{book.title}</p>
      <p>{book.description}</p>
      <img
        className={css`
          width: 300px;
        `}
        src={book.imageUrl}
        alt={book.title}
      />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {},
};

export default Book;
