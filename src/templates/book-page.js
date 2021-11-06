/** @jsx jsx */
/* eslint-disable react/no-danger, no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import { useRecoilValue } from "recoil"
import he from "he"
import Layout from "../components/layout"
import Tags from "../components/tags"
import usePopulateData from "../components/use-populate-data"
import mq from "../components/media-queries"
import { singleBookIdState } from "../state"

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
    id,
  },
  data: { allSanitySiteImage },
}) => {
  const [amazonImage] = allSanitySiteImage.edges
  usePopulateData(id)
  const [book] = useRecoilValue(singleBookIdState)

  function createMarkup(value) {
    return { __html: value }
  }

  return (
    // eslint-disable-next-line
    <React.Fragment>
      {book && (
        <Layout crumbs={crumbs} crumbLabel={book.node.title}>
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
                  <GatsbyImage
                    image={amazonImage.node.image.asset.gatsbyImageData}
                    alt="Amazon"
                    css={css`
                      width: 40px;
                    `}
                  />
                </BookPageAmazonIconLink>
                <BookPageReadIn>Read in: {book.node.yearRead}</BookPageReadIn>
              </BookPageAmazonYearReadWrapper>
            </BookPageHeader>
            <BookPageBodyWrapper>
              <GatsbyImage
                image={book.node.image.asset.gatsbyImageData}
                alt={book.node.name}
              />
              <div>
                <h2>Author: {book.node.author}</h2>
                <h3>ISBN: {book.node.isbn}</h3>
                <BookPageBookDescription>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      he.decode(book.node.description)
                    )}
                  />
                </BookPageBookDescription>
              </div>
            </BookPageBodyWrapper>
            <Tags tags={book.node.tagsSet} />
          </BookPageWrapper>
        </Layout>
      )}
    </React.Fragment>
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
    id: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
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
  query {
    allSanitySiteImage(filter: { name: { eq: "amazonLogo" } }) {
      edges {
        node {
          image {
            asset {
              assetId
              label
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default BookPage
