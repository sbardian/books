/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { jsx } from "@emotion/core"
import { atom, selector, useRecoilState } from "recoil"
import Layout from "../components/layout"
import Books from "../components/books"
import SearchBox from "../components/search-box"
import YearFilterButtons from "../components/year-filter-buttons"
import Filters from "../components/filter-heading"

const ALL = "All"

const IndexPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
  data: { allSanityBook },
  location,
}) => {
  const booksState = atom({
    key: "bookState",
    default: allSanityBook.edges,
  })

  const yearFiltersState = selector({
    key: "yearFiltersState",
    get: ({ get }) => {
      const years = get(booksState).map((book) => book.node.yearRead)
      return [...new Set([ALL, ...years])]
    },
  })

  const filterState = atom({
    key: "booksFilterState",
    default: ALL,
  })

  const filteredBooksState = selector({
    key: "filteredBooksState",
    get: ({ get }) => {
      const filter = get(filterState)
      const books = get(booksState)

      return books.filter(
        (book) =>
          book.node.yearRead === filter ||
          book.node.tagsSet.some((tag) => tag === filter) ||
          filter === ALL ||
          book.node.title.toLowerCase().includes(filter.toLowerCase()) ||
          book.node.author.toLowerCase().includes(filter.toLowerCase()) ||
          book.node.tagsSet.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
      )
    },
  })

  const [filter, setFilter] = useRecoilState(filterState)
  const [filteredBooks] = useRecoilState(filteredBooksState)
  const [filters] = useRecoilState(yearFiltersState)

  const clearSearchInput = () => {
    /* eslint-disable-next-line */
    document.querySelector("#books-search-input").value = ""
  }

  const handleYearFilter = (yearFilter) => {
    clearSearchInput()
    setFilter(yearFilter)
  }

  const handleSearch = ({ target: search }) => {
    setFilter(ALL)
    if (!search.value || search.value === "") {
      setFilter(ALL)
    } else {
      setFilter(search.value)
    }
  }

  React.useEffect(() => {
    if (location && location.state && location.state.filterState) {
      handleYearFilter(location.state.filterState)
      setFilter(location.state.filterState)
    }
  }, [location])

  return (
    <Layout crumbs={crumbs}>
      <YearFilterButtons
        yearFilters={filters}
        onYearFilter={handleYearFilter}
      />
      <SearchBox onSearch={handleSearch} />
      {filter && (
        <Filters filterHeading={filter} count={filteredBooks.length} />
      )}
      <Books books={filteredBooks} />
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
