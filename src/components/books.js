import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"
import { useRecoilValue } from "recoil"
import BookImage from "./book-image"
import mq from "./media-queries"
import { filteredBooksState } from "./state"

const BooksWrapper = styled.div`
  display: grid;
  grid-gap: 0.67rem;
  grid-template-columns: 1fr;
  justify-content: center;
  ${mq.md} {
    grid-template-columns: repeat(auto-fit, 300px);
  }
`

const BookWrapper = styled.div`
  display: grid;
  gap: 0.67rem;
  grid-template-rows: 1fr;
  align-content: start;
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
const BookTitle = styled.h3`
  color: #ececec;
  font-size: 1.5rem;
`

const Book = () => {
  const { books } = useRecoilValue(filteredBooksState)

  return (
    <BooksWrapper>
      {books.map((book) => {
        return (
          <BookWrapper key={book.node.id}>
            <BookButton
              type="button"
              onClick={() => navigate(`/book/${book.node.title}`)}
            >
              <BookTitle>{book.node.title}</BookTitle>
              <BookImage book={book.node} />
            </BookButton>
          </BookWrapper>
        )
      })}
    </BooksWrapper>
  )
}

export default Book
