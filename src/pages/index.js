import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { css } from 'react-emotion';
import Layout from '../components/layout';
import Book from '../components/Book';
import SearchBox from '../components/SearchBox';
import mq from '../components/mediaQueries';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    const {
      data: {
        allBooksJson: { edges },
      },
    } = this.props;
    this.state = {
      edges: edges,
      originalEdges: edges,
    };
  }

  handleSearch = ({ target }) => {
    if (!target.value || target.value === '') {
      this.setState({
        edges: this.state.originalEdges,
      });
    } else {
      const { originalEdges } = this.state;
      this.setState({
        edges: originalEdges.filter(book =>
          book.node.title.toLowerCase().includes(target.value.toLowerCase())
        ),
      });
    }
  };

  render() {
    const { edges } = this.state;

    return (
      <Layout location="header" onSearch={this.handleSearch}>
        <div
          className={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr repeat(auto-fit);
            margin: 0 200px 0 200px;
            ${mq.md(
              css`
                margin: 0 20px 0 20px;
              `
            )};
          `}
        >
          <SearchBox onSearch={this.handleSearch} />
          {edges.map(book => {
            return <Book key={book.node.bookId} book={book.node} />;
          })}
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const bookQuery = graphql`
  {
    allBooksJson {
      edges {
        node {
          bookId
          isbn
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
