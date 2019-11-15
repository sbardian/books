import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Tags from "../components/tags"

const TagsPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
  data: { allSanityBook },
}) => {
  const tagSets = allSanityBook.edges.map(book => book.node.tagsSet)

  const tags = []
  tagSets.forEach(currentTag =>
    currentTag.forEach(tag => {
      tags.push(tag)
    })
  )
  const filteredTags = [...new Set([...tags])]

  return (
    <Layout
      crumbs={crumbs.map(crumb => ({
        ...crumb,
        crumbLabel:
          crumb.crumbLabel[0].toUpperCase() + crumb.crumbLabel.slice(1),
      }))}
    >
      <Tags tags={filteredTags} />
    </Layout>
  )
}

TagsPage.propTypes = {
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

export default TagsPage

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
