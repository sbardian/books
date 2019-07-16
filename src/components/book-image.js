// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const BookImage = ({ book }) => (
  <Img fluid={book.image.asset.fluid} fadeIn alt={book.title} />
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
}

BookImage.defaultProps = {
  book: {},
}

export default BookImage
