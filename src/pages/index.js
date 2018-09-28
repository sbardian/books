import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'react-emotion';
import Layout from '../components/layout';
import Book from '../components/Book';

const IndexPage = ({
  data: {
    allBooksJson: { edges },
  },
}) => {
  return (
    <Layout>
      <div
        className={css`
          display: grid;
          grid-gap: 20px;
        `}
      >
        {edges.map(book => {
          return <Book key={book.node.bookId} book={book.node} />;
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const bookQuery = graphql`
  {
    allBooksJson {
      edges {
        node {
          bookId
          title
          author
          imageUrl
          amazonUrl
          description
        }
      }
    }
  }
`;
