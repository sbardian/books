/** @jsx jsx */
import { atom, selector } from "recoil"

const ALL = "All"

export const booksState = atom({
  key: "bookState",
  default: [],
})

export const filterState = atom({
  key: "booksFilterState",
  default: ALL,
})

// export const singleBookId = atom({
//   key: "singleBookId",
//   default: null,
// })

export const filteredBooksState = selector({
  key: "filteredBooksState",
  get: ({ get }) => {
    const filter = get(filterState)
    const books = get(booksState)

    const filteredBooks = books.filter(
      (book) =>
        filter === ALL ||
        book.node.yearRead === filter ||
        book.node.tagsSet.some((tag) => tag === filter) ||
        book.node.title.toLowerCase().includes(filter.toLowerCase()) ||
        book.node.author.toLowerCase().includes(filter.toLowerCase()) ||
        book.node.tagsSet.some((tag) =>
          tag.toLowerCase().includes(filter.toLowerCase())
        )
    )
    return {
      books: filteredBooks,
      count: filteredBooks.length,
    }
  },
})

// export const singleBookState = selector({
//   key: "singleBookState",
//   get: ({ get }) => {
//     const books = get(booksState)
//     const id = get(singleBookId)
//     return books.filter((book) => id === book.node.id)
//   },
// })

export const yearFilters = selector({
  key: "yearFiltersState",
  get: ({ get }) => {
    const years = get(booksState).map((book) => book.node.yearRead)
    return [...new Set([ALL, ...years])]
  },
})
