module.exports = {
  siteMetadata: {
    title: 'Books',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sbardian Books',
        short_name: 'sbardian-books',
        start_url: '/',
        background_color: '#606d80',
        theme_color: '#606d80',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    `gatsby-plugin-breadcrumb`,
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'xothad89',
        dataset: 'books',
      },
    },
    'gatsby-plugin-offline',
  ],
};
