import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { css } from "@emotion/core"
import BookImage from "./book-image"
import mq from "./media-queries"

const BooksWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  color: #1f1f20;
  ${mq.xl(
    css`
      grid-template-columns: repeat(auto-fit, 300px);
    `
  )};
  ${mq.sm(css`
    grid-template-columns: 1fr;
  `)};
`

const BookWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr;
  align-content: start;
`

const BookTitle = styled.h3`
  color: #ececec;
  font-size: 1.5rem;
`

const BookButton = styled.button`
  display: grid;
  grid-template-rows: auto 1fr;
  align-content: start;
  padding: 20px;
  border: none;
  background: #222831;
  box-shadow: 0px 5px 5px 0px rgba(26, 25, 26, 1);
  &:hover {
    background: #30475e;
    cursor: pointer;
  }
`

const Book = ({ books }) => (
  <BooksWrapper>
    {books.map((book) => {
      return (
        <BookWrapper key={book.node.id}>
          <BookButton
            type="button"
            onClick={() => navigate(`/book/${book.node.id}`)}
          >
            <BookTitle>{book.node.title}</BookTitle>
            <BookImage book={book.node} />
          </BookButton>
        </BookWrapper>
      )
    })}
  </BooksWrapper>
)

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        book: PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            tagsSet: PropTypes.arrayOf(PropTypes.string),
          }),
        }),
      }),
    })
  ).isRequired,
}

export default Book
