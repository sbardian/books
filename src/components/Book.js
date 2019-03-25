// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Book = ({ book }) => {
  return <Img fixed={book.image.asset.fixed} fadeIn alt={book.title} />
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    isbn: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    amazonUrl: PropTypes.string,
  }),
}

Book.defaultProps = {
  book: {},
}

export default Book
