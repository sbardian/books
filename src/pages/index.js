import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { css } from 'react-emotion';
import Layout from '../components/layout';
import Book from '../components/Book';
import SearchBox from '../components/SearchBox';
import YearFilterButton from '../components/YearFilterButton';
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

  handleClearSearchBox = () => {
    const input = document.querySelector('#books-search-input');
    input.value = '';
  };

  handleClearYearFilter = () => {
    this.handleClearSearchBox();
    this.setState({
      edges: this.state.originalEdges,
    });
  };

  handleYearFilter = year => {
    this.handleClearSearchBox();
    this.setState({
      edges: this.state.originalEdges,
    });
    const { originalEdges } = this.state;
    this.setState({
      edges: originalEdges.filter(book => book.node.yearRead === year),
    });
  };

  handleSearch = ({ target }) => {
    if (!target.value || target.value === '') {
      this.setState({
        edges: this.state.originalEdges,
      });
    } else {
      const { originalEdges } = this.state;
      this.setState({
        edges: originalEdges.filter(
          book =>
            book.node.title
              .toLowerCase()
              .includes(target.value.toLowerCase()) ||
            book.node.author.toLowerCase().includes(target.value.toLowerCase())
        ),
      });
    }
  };

  render() {
    const { edges, originalEdges } = this.state;
    const years = originalEdges.map(book => book.node.yearRead);
    const yearFilters = years.filter(
      (year, index) => years.indexOf(year) >= index
    );

    return (
      <Layout location="header">
        <div
          className={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fit, minmax(200px, 335px));
            justify-content: center;
          `}
        >
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
            onClick={() => this.handleClearYearFilter()}
          >
            All
          </button>
          {yearFilters.map(year => {
            return (
              <YearFilterButton
                key={Math.random()}
                onYearFilter={this.handleYearFilter}
                year={year}
              />
            );
          })}
        </div>
        <div
          className={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr repeat(auto-fit);
            margin: 0 200px 0 200px;
            ${mq.lg(
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
          yearRead
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
