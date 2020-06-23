import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSetRecoilState } from "recoil"
import { booksState, bookIdState } from "./state"

const usePopulateData = (bookId = null) => {
  const setBookIdState = useSetRecoilState(bookIdState)
  const setBookState = useSetRecoilState(booksState)

  const { allSanityBook } = useStaticQuery(graphql`
    query {
      allSanityBook(sort: { fields: author, order: ASC }) {
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
            tagsSet
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
  `)

  React.useEffect(() => {
    setBookState(allSanityBook.edges)
    if (bookId) {
      setBookIdState(bookId)
    }
  }, [bookId])
}

export default usePopulateData
