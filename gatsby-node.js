const path = require('path');

exports.createPages = async ({ node, actions, graphql }) => {
  // TODO: probably no reason to query books with graphql, pull it from nodes
  const { createPage } = actions;
  const bookPageTemplate = path.resolve('src/templates/bookPage.js');

  return graphql(`
    query {
      allSanityBook {
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const books = result.data.allSanityBook.edges;

    books.forEach(book => {
      createPage({
        path: `/book/${book.node.id}`,
        component: bookPageTemplate,
        context: {
          id: book.node.id,
        },
      });
    });
  });
};
