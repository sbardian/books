import React from "react"
import Proptypes from "prop-types"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import BookImage from "./book-image"

const BookWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr;
`

const BookButton = styled.button`
  padding: 20px;
  border: none;
  background: #606d80;
  &:hover {
    background: #607d80;
    cursor: pointer;
  }
`

const Book = ({ book }) => (
  <BookWrapper>
    <BookButton type="button" onClick={() => navigate(`/book/${book.node.id}`)}>
      <BookImage book={book.node} />
    </BookButton>
  </BookWrapper>
)

Book.propTypes = {
  book: Proptypes.shape({
    node: Proptypes.shape({
      id: Proptypes.string.isRequired,
      tagsSet: Proptypes.arrayOf(Proptypes.string),
    }),
  }).isRequired,
}

export default Book
