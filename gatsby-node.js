const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const bookPageTemplate = path.resolve("src/templates/book-page.js")

  return graphql(`
    query {
      allSanityBook {
        edges {
          node {
            id
            amazonUrl
            title
            isbn
            shortDescription
            description
            author
            amazonUrl
            imageUrl
            yearRead
            image {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const books = result.data.allSanityBook.edges

    books.forEach((book) => {
      createPage({
        path: `/book/${book.node.title}`,
        component: bookPageTemplate,
        context: {
          id: book.node.id,
        },
      })
    })
    return null
  })
}
