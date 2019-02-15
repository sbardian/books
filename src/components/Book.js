import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import mq from './mediaQueries';

const Book = ({ book }) => {
  console.log('Book>>> ', book);
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
          ${mq.sm(css`
            grid-template-columns: 1fr;
            grid-gap: 0px;
          `)}
        `}
      >
        <h1>{book.title}</h1>
        <div
          className={css`
            display: grid;
            grid-template-rows: 1fr 1fr;
            justify-content: center;
            ${mq.sm(css`
              grid-template-columns: 1fr 1fr;
              grid-template-rows: none;
            `)}
          `}
        >
          <a
            className={css`
              text-decoration: none;
              padding: 20px;
              align-self: center;
              justify-self: center;
            `}
            href={book.amazonUrl}
          >
            <img
              className={css`
                width: 40px;
              `}
              src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Amazon-icon.png"
              alt="amazon"
            />
          </a>
          <span
            className={css`
              align-self: center;
              justify-self: center;
            `}
          >
            {book.yearRead}
          </span>
        </div>
      </div>
      <div
        className={css`
          display: grid;
          grid-gap: 20px;
          grid-template-columns: minmax(300px, 300px) minmax(300px, 1fr);
          grid-gap: 20px;
          color: #1f1f20;
          padding: 0 20px 20px 20px;
          ${mq.md(css`
            grid-template-columns: 1fr;
          `)};
          ${mq.lg(
            css`
              maxheight: '460px';
            `
          )}
        `}
      >
        <Img
          fluid={book.localImage.childImageSharp.fluid}
          fadeIn
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
