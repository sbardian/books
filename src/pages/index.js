/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Book from "../components/book"
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
  cursor: pointer;
`

const SortButtonWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 335px));
  justify-content: center;
`

const BooksWrapper = styled.div`
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
`

const IndexPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
  data: { allSanityBook },
}) => {
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
    <Layout crumbs={crumbs}>
      <SortButtonWrapper>
        <Button type="button" onClick={() => handleClearYearFilter()}>
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
      </SortButtonWrapper>
      <SearchBox onSearch={handleSearch} />
      <BooksWrapper>
        {books.map(book => (
          <Book key={book.node.id} book={book} />
        ))}
      </BooksWrapper>
    </Layout>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.shape({
    breadcrumb: PropTypes.shape({
      crumbs: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.shape().isRequired,
          pathname: PropTypes.string.isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
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
