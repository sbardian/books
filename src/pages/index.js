/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql, navigate } from "gatsby"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import BookImage from "../components/book-image"
import SearchBox from "../components/search-box"
import YearFilterButton from "../components/year-filter-button"
import mq from "../components/media-queries"

const Button = styled.button`
  height: 30px;
  background: #4b4545b3;
  color: #c2c2c2;
  text-align: center;
  align-items: center;
  border: none;
`

const IndexPage = ({ location, data: { allSanityBook } }) => {
  const [books, setBooks] = React.useState(allSanityBook.edges)
  const allBooks = allSanityBook.edges

  const years = allBooks.map(book => book.node.yearRead)

  const yearFilters = years.filter(
    (year, index) => years.indexOf(year) >= index
  )

  const handleClearSearchInput = () => {
    /* eslint-disable-next-line */
    const searchInput = document.querySelector("#books-search-input")
    searchInput.value = ""
  }

  const handleClearYearFilter = () => {
    handleClearSearchInput()
    setBooks(allBooks)
  }

  const handleFilterByYear = year => {
    handleClearSearchInput()
    setBooks(allBooks)
    setBooks(allBooks.filter(book => book.node.yearRead === year))
  }

  const handleSearch = ({ target: search }) => {
    if (!search.value || search.value === "") {
      setBooks(allBooks)
    } else {
      setBooks(
        allBooks.filter(
          book =>
            book.node.title
              .toLowerCase()
              .includes(search.value.toLowerCase()) ||
            book.node.author.toLowerCase().includes(search.value.toLowerCase())
        )
      )
    }
  }

  return (
    <Layout pageLocation={location} crumbLabel="Home">
      <div
        css={css`
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(200px, 335px));
          justify-content: center;
        `}
      >
        <Button
          css={css`
            cursor: pointer;
          `}
          type="button"
          onClick={() => handleClearYearFilter()}
        >
          All
        </Button>
        {yearFilters.map(year => {
          return (
            <YearFilterButton
              key={Math.random()}
              onFilterByYear={handleFilterByYear}
              year={year}
            />
          )
        })}
      </div>
      <div>
        <SearchBox onSearch={handleSearch} />
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fit, 300px);
            justify-content: center;
            color: #1f1f20;
            ${mq.md(css`
              grid-template-columns: 1fr;
            `)};
            ${mq.lg(
              css`
                maxheight: "460px";
              `
            )}
          `}
        >
          {books.map(book => {
            return (
              <div
                key={book.node.id}
                css={css`
                  display: grid;
                  grid-gap: 20px;
                  grid-template-rows: 1fr;
                `}
              >
                <button
                  type="button"
                  css={css`
                    padding: 20px;
                    border: none;
                    background: #606d80;
                    &:hover {
                      background: #607d80;
                      cursor: pointer;
                    }
                  `}
                  onClick={() => navigate(`/book/${book.node.id}`)}
                >
                  <BookImage book={book.node} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    allSanityBook: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            amazonUrl: PropTypes.string,
            author: PropTypes.string,
            description: PropTypes.string,
            isbn: PropTypes.string,
            imageUrl: PropTypes.string,
            yearRead: PropTypes.string,
            image: PropTypes.shape({
              asset: PropTypes.shape({
                fixed: PropTypes.shape({
                  base64: PropTypes.string,
                  aspectRatio: PropTypes.number,
                  src: PropTypes.string,
                  srcSet: PropTypes.string,
                  srcWebp: PropTypes.string,
                  srcSetWebp: PropTypes.string,
                  width: PropTypes.number,
                  height: PropTypes.number,
                }),
              }),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
}

export default IndexPage

export const bookQuery = graphql`
  {
    allSanityBook(sort: { fields: author, order: ASC }) {
      edges {
        node {
          id
          amazonUrl
          title
          isbn
          description
          author
          amazonUrl
          imageUrl
          yearRead
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
