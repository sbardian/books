// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const BookImage = ({ book }) => {
  return <Img fixed={book.image.asset.fixed} fadeIn alt={book.title} />
}

BookImage.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    isbn: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    amazonUrl: PropTypes.string,
  }),
}

BookImage.defaultProps = {
  book: {},
}

export default BookImage
