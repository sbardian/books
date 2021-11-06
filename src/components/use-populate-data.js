import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSetRecoilState, useRecoilValue } from "recoil"
import { booksState, bookIdState } from "../state"

const usePopulateData = (bookId = null) => {
  const setBookIdState = useSetRecoilState(bookIdState)
  const setBookState = useSetRecoilState(booksState)
  const books = useRecoilValue(booksState)

  const { allSanityBook } = useStaticQuery(graphql`
    query {
      allSanityBook(
        sort: { fields: [author, shortDescription], order: [ASC, ASC] }
      ) {
        edges {
          node {
            id
            amazonUrl
            title
            isbn
            description
            shortDescription
            author
            amazonUrl
            imageUrl
            yearRead
            tagsSet
            image {
              asset {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `)

  React.useEffect(() => {
    if (!books.length) {
      setBookState(allSanityBook.edges)
    }
  }, [])

  React.useEffect(() => {
    if (bookId) {
      setBookIdState(bookId)
    }
  }, [bookId])
}

export default usePopulateData
