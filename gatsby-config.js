module.exports = {
  siteMetadata: {
    title: 'Books',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sbardian Books',
        short_name: 'sbardian-books',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'BooksJson',
        imagePath: 'imageUrl',
      },
    },
    'gatsby-plugin-offline',
  ],
};
