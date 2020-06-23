/** @jsx jsx */
import { atom, selector } from "recoil"

const ALL = "All"

// atom homding all books
export const booksState = atom({
  key: "bookState",
  default: [],
})

export const bookIdState = atom({
  key: "bookIdState",
  default: null,
})

// atom holding current filter value
export const filterState = atom({
  key: "booksFilterState",
  default: ALL,
})

// return array of filtered books
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

// return a reduced array of filter buttons
export const yearFiltersState = selector({
  key: "yearFiltersState",
  get: ({ get }) => {
    const years = get(booksState).map((book) => book.node.yearRead)
    const filtersSetReduced = [...new Set([ALL, ...years])]
    const yearButtons = filtersSetReduced.sort().slice(0, -1)
    const allButton = filtersSetReduced.slice(-1)
    return [...allButton, ...yearButtons]
  },
})

// array of all available tags
export const fullpageTagsState = selector({
  key: "tagsState",
  get: ({ get }) => {
    const tagSets = get(booksState).map((book) => book.node.tagsSet)

    const tags = []
    tagSets.forEach((currentTag) =>
      currentTag.forEach((tag) => {
        tags.push(tag)
      })
    )
    return [...new Set([...tags])]
  },
})

// export const specificBookTags = selector({
//   key: "specificBookTags",
//   get: ({ get }) => {
//     const bookId = get(bookIdState)
//     if (!bookId) {
//       throw new Error("Book ID state is null.")
//     }
//     const allBooks = get(booksState)
//     const currentBook = allBooks.filter(
//       (book) => {
//         if (book.node.id === bookId) {
//           return book
//         }
//       }
//       // TODO: deal with bad ID's. . . forward to 404?
//   },
//   set: ({ set }, id) => {
//     set(bookIdState, id)
//   },
// })

export const singleBookIdState = selector({
  key: "singleBookState",
  get: ({ get }) => {
    const books = get(booksState)
    const id = get(bookIdState)
    return books.filter((book) => id === book.node.id)
  },
})
