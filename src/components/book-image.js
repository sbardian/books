// eslint-disable-next-line
import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const BookImage = ({ book }) => (
  // eslint-disable-next-line
  <GatsbyImage
    image={book.image.asset.gatsbyImageData}
    alt={book.title}
    css={css`
      object-fit: cover;
      height: 100%;
      width: 100%;
    `}
  />
)

BookImage.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    isbn: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    amazonUrl: PropTypes.string,
    image: PropTypes.shape({
      asset: PropTypes.shape({
        gatsbyImageData: PropTypes.objectOf(PropTypes.any),
      }),
    }),
  }),
}

BookImage.defaultProps = {
  book: {},
}

export default BookImage
