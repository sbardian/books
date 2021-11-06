// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const BookImage = ({ book }) => (
  // eslint-disable-next-line
  <GatsbyImage image={book.image.asset.gatsbyImageData} alt={book.title} />
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
        gatsbyImageData: PropTypes.arrayOf(PropTypes.any),
      }),
    }),
  }),
}

BookImage.defaultProps = {
  book: {},
}

export default BookImage
