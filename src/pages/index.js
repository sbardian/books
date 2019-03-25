/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql, navigate } from "gatsby"
import { jsx, css } from "@emotion/core"
import Layout from "../components/layout"
import Book from "../components/Book"
import SearchBox from "../components/SearchBox"
import YearFilterButton from "../components/YearFilterButton"
import mq from "../components/mediaQueries"
import Button from "../components/styled/button"

const IndexPage = ({ location, data: { allSanityBook } }) => {
  const [bookEdges, setBookEdges] = React.useState(allSanityBook.edges)
  const [initialBookEdges] = React.useState(allSanityBook.edges)

  const years = initialBookEdges.map(book => book.node.yearRead)

  const yearFilters = years.filter(
    (year, index) => years.indexOf(year) >= index
  )

  const handleClearSearchBox = () => {
    const input = document.querySelector("#books-search-input")
    input.value = ""
  }

  const handleClearYearFilter = () => {
    handleClearSearchBox()
    setBookEdges(initialBookEdges)
  }

  const handleYearFilter = year => {
    handleClearSearchBox()
    setBookEdges(initialBookEdges)
    setBookEdges(initialBookEdges.filter(book => book.node.yearRead === year))
  }

  const handleSearch = ({ target: search }) => {
    if (!search.value || search.value === "") {
      setBookEdges(initialBookEdges)
    } else {
      setBookEdges(
        initialBookEdges.filter(
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
        <Button type="button" onClick={() => handleClearYearFilter()}>
          All
        </Button>
        {yearFilters.map(year => {
          return (
            <YearFilterButton
              key={Math.random()}
              onYearFilter={handleYearFilter}
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
          {bookEdges.map(book => {
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
                  <Book book={book.node} />
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
    allSanityBook(sort: { fields: title, order: ASC }) {
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
              fixed(height: 400, width: 250) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`
