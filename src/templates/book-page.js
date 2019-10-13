/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { jsx, css } from "@emotion/core"
import Layout from "../components/layout"
import mq from "../components/media-queries"

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
      <div
        css={css`
          display: grid;
          grid-gap: 20px;
          grid-template-rows: auto 1fr;
          background: #dce0e6;
          box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.2);
        `}
      >
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr auto;
            align-items: center;
            background: #567ebb;
            padding: 0 20px 0 20px;
            ${mq.sm(css`
              grid-template-columns: 1fr;
              grid-gap: 0px;
            `)}
          `}
        >
          <h1>{book.node.title}</h1>
          <div
            css={css`
              display: grid;
              grid-template-rows: 1fr 1fr;
              justify-content: center;
              ${mq.sm(css`
                grid-template-columns: 1fr 1fr;
                grid-template-rows: none;
              `)}
            `}
          >
            <a
              css={css`
                text-decoration: none;
                padding: 20px;
                align-self: center;
                justify-self: center;
              `}
              href={book.node.amazonUrl}
            >
              <Img
                css={css`
                  width: 40px;
                `}
                fluid={amazonImage.node.image.asset.fluid}
                alt="amazon"
              />
            </a>
            <span
              css={css`
                align-self: center;
                justify-self: center;
              `}
            >
              {book.node.yearRead}
            </span>
          </div>
        </div>
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: minmax(300px, 300px) minmax(300px, 1fr);
            grid-gap: 20px;
            align-items: start;
            color: #1f1f20;
            padding: 0 20px 20px 20px;
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
          <Img
            fluid={book.node.image.asset.fluid}
            fadeIn
            alt={book.node.title}
            imgStyle={{ objectFit: "contain" }}
          />
          <div>
            <h2 css={css(`margin-top: 0;`)}>Author: {book.node.author}</h2>
            <h3>ISBN: {book.node.isbn}</h3>
            <h3>{book.node.description}</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

BookPage.propTypes = {
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
    allSanitySiteImage: PropTypes.shape({
      edges: PropTypes.shape({
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
      }),
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

export default BookPage
