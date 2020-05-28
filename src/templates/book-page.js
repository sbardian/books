/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Tags from "../components/tags"
import mq from "../components/media-queries"

const BookPageWrapper = styled.div`
  display: grid;
  gap: 0.67rem;
  grid-template-rows: auto auto min-content;
  background: #dce0e6;
  box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.2);
`

const BookPageHeader = styled.div`
  display: grid;
  gap: 0.67rem;
  grid-template-rows: 1fr;
  align-items: center;
  background: #30475e;
  padding: 0 0.67rem 0 0.67rem;
  ${mq.md} {
    grid-template-columns: 1fr auto;
  }
`

const BookPageTitle = styled.h1`
  font-size: 1.5rem;
  margin: 1.2rem 1.2rem 0 1.2rem;
  color: #ececec;
  ${mq.md} {
    font-size: 3rem;
  }
`

const BookPageShortDescription = styled.pre`
  font-size: 1.2rem;
  color: #c1a57b;
  word-wrap: wrap;
  white-space: pre-wrap;
`

const BookPageAmazonYearReadWrapper = styled.div`
  display: grid;
  gap: 0.67rem;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  ${mq.md} {
    grid-template-columns: 1fr;
  }
`

const BookPageAmazonIconLink = styled.a`
  text-decoration: none;
  padding: 0 0 0.67rem;
  align-self: center;
  justify-self: center;
`

const BookPageReadIn = styled.span`
  align-self: center;
  font-size: 1.2rem;
  justify-self: center;
  color: #ececec;
`

const BookPageBodyWrapper = styled.div`
  display: grid;
  gap: 0.67rem;
  grid-template-columns: 1fr;
  align-items: start;
  color: #1f1f20;
  padding: 0 0.67rem 0.67rem 0.67rem;
  ${mq.md} {
    grid-template-columns: minmax(300px, 300px) minmax(300px, 1fr);
  }
`

const BookPageBookDescription = styled.span`
  font-size: 1.5em;
`

const BookPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
  data: {
    allSanityBook: { edges },
    allSanitySiteImage,
  },
}) => {
  const [book] = edges
  const [amazonImage] = allSanitySiteImage.edges

  return (
    <Layout location="header" crumbs={crumbs} crumbLabel={book.node.title}>
      <BookPageWrapper>
        <BookPageHeader>
          <BookPageTitle>
            {book.node.title}
            {book.node.shortDescription ? ":" : null}
            <BookPageShortDescription>
              {book.node.shortDescription}
            </BookPageShortDescription>
          </BookPageTitle>
          <BookPageAmazonYearReadWrapper>
            <BookPageAmazonIconLink href={book.node.amazonUrl}>
              <Img
                css={css`
                  width: 40px;
                `}
                fluid={amazonImage.node.image.asset.fluid}
                alt="amazon"
              />
            </BookPageAmazonIconLink>
            <BookPageReadIn>Read in: {book.node.yearRead}</BookPageReadIn>
          </BookPageAmazonYearReadWrapper>
        </BookPageHeader>
        <BookPageBodyWrapper>
          <Img
            fluid={book.node.image.asset.fluid}
            fadeIn
            alt={book.node.title}
            imgStyle={{ objectFit: "contain" }}
          />
          <div>
            <h2>Author: {book.node.author}</h2>
            <h3>ISBN: {book.node.isbn}</h3>
            <BookPageBookDescription>
              {book.node.description}
            </BookPageBookDescription>
          </div>
        </BookPageBodyWrapper>
        <Tags tags={book.node.tagsSet} />
      </BookPageWrapper>
    </Layout>
  )
}

BookPage.propTypes = {
  pageContext: PropTypes.shape({
    breadcrumb: PropTypes.shape({
      crumbs: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.shape(),
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
            shortDescription: PropTypes.string,
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
    allSanitySiteImage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            image: PropTypes.shape({
              asset: PropTypes.shape({
                fluid: PropTypes.shape({
                  base64: PropTypes.string,
                  aspectRatio: PropTypes.number,
                  src: PropTypes.string,
                  srcSet: PropTypes.string,
                  srcWebp: PropTypes.string,
                  srcSetWebp: PropTypes.string,
                  sizes: PropTypes.string,
                }),
              }),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
}

export const bookQuery = graphql`
  query($id: String) {
    allSanitySiteImage(filter: { name: { eq: "amazonLogo" } }) {
      edges {
        node {
          image {
            asset {
              assetId
              label
              fluid(maxWidth: 40) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    allSanityBook(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          amazonUrl
          title
          isbn
          shortDescription
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

export default BookPage
