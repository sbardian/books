/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Book from "../components/book"
import SearchBox from "../components/search-box"
import FilterButton from "../components/filter-button"
import mq from "../components/media-queries"

const ALL = "All"
const SEARCH = "Search"

const SortButtonWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(auto, 200px));
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

const FilterHeading = styled.div`
  display: flex;
  justify-content: center;
`

const IndexPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
  data: { allSanityBook },
  location,
}) => {
  const [books, setBooks] = React.useState(allSanityBook.edges)
  const [filterHeading, setFilterHeading] = React.useState(ALL)
  const allBooks = allSanityBook.edges

  const years = allBooks.map(book => book.node.yearRead)

  const filters = [...new Set([ALL, ...years])]

  const handleClearSearchInput = () => {
    /* eslint-disable-next-line */
    const searchInput = document.querySelector("#books-search-input")
    searchInput.value = ""
  }

  const handleClearFilter = () => {
    handleClearSearchInput()
    setBooks(allBooks)
    setFilterHeading(ALL)
  }

  const handleFilter = filter => {
    handleClearSearchInput()
    setBooks(allBooks)
    setBooks(
      allBooks.filter(
        book =>
          book.node.yearRead === filter ||
          book.node.tagsSet.some(tag => tag === filter)
      )
    )
    setFilterHeading(filter)
  }

  const handleSearch = ({ target: search }) => {
    setFilterHeading(SEARCH)
    if (!search.value || search.value === "") {
      setFilterHeading(ALL)
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

  React.useEffect(() => {
    if (location && location.state && location.state.filterState) {
      handleFilter(location.state.filterState)
      setFilterHeading(location.state.filterState)
    }
  }, [location])

  return (
    <Layout crumbs={crumbs}>
      <SortButtonWrapper>
        {filters.map(filter => {
          return (
            <FilterButton
              key={Math.random()}
              onFilter={filter === "All" ? handleClearFilter : handleFilter}
              filter={filter}
            />
          )
        })}
      </SortButtonWrapper>
      <SearchBox onSearch={handleSearch} />
      <FilterHeading>{filterHeading && <h1>{filterHeading}</h1>}</FilterHeading>
      <BooksWrapper>
        {books.map(book => (
          <Book key={book.node.id} book={book} />
        ))}
      </BooksWrapper>
    </Layout>
  )
}

IndexPage.defaultProps = {
  location: null,
}

IndexPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      filterState: PropTypes.string,
    }),
  }),
  pageContext: PropTypes.shape({
    breadcrumb: PropTypes.shape({
      crumbs: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.shape(),
          pathname: PropTypes.string,
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
          tagsSet
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
