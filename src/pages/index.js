/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { jsx } from "@emotion/core"
import { useRecoilState, useSetRecoilState } from "recoil"
import Layout from "../components/layout"
import Books from "../components/books"
import SearchBox from "../components/search-box"
import YearFilterButtons from "../components/year-filter-buttons"
import Filters from "../components/filter-heading"
import { booksState, filterState } from "../components/state"

const ALL = "All"

const IndexPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
  data: { allSanityBook },
  location,
}) => {
  // our recoil state
  const setBookState = useSetRecoilState(booksState)
  const [filter, setFilter] = useRecoilState(filterState)

  // filter results based on search
  const handleSearch = ({ target: search }) => {
    if (!search.value || search.value === "") {
      setFilter(ALL)
    } else {
      setFilter(search.value)
    }
  }

  // set recoil book state on mount
  // set filter if returning from previously filtered results
  React.useEffect(() => {
    setBookState(allSanityBook.edges)

    if (location && location.state && location.state.filterState) {
      setFilter(location.state.filterState)
    }
  }, [location])

  return (
    <Layout crumbs={crumbs}>
      <YearFilterButtons />
      <SearchBox onSearch={handleSearch} />
      {filter && <Filters />}
      <Books />
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
