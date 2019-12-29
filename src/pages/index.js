/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { jsx } from "@emotion/core"
import Layout from "../components/layout"
import Books from "../components/books"
import SearchBox from "../components/search-box"
import YearFilterButtons from "../components/year-filter-buttons"
import Filters from "../components/filter-heading"

const ALL = "All"
const SEARCH = "Search"

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

  const handleYearFilter = filter => {
    handleClearSearchInput()
    setBooks(allBooks)
    setBooks(
      allBooks.filter(
        book =>
          book.node.yearRead === filter ||
          book.node.tagsSet.some(tag => tag === filter) ||
          filter === "All"
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
            book.node.author
              .toLowerCase()
              .includes(search.value.toLowerCase()) ||
            book.node.tagsSet.some(tag =>
              tag.toLowerCase().includes(search.value.toLowerCase())
            )
        )
      )
    }
  }

  React.useEffect(() => {
    if (location && location.state && location.state.filterState) {
      handleYearFilter(location.state.filterState)
      setFilterHeading(location.state.filterState)
    }
  }, [location])

  return (
    <Layout crumbs={crumbs}>
      <YearFilterButtons
        yearFilters={filters}
        onYearFilter={handleYearFilter}
      />
      <SearchBox onSearch={handleSearch} />
      {filterHeading && (
        <Filters filterHeading={filterHeading} count={books.length} />
      )}
      <Books books={books} />
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
