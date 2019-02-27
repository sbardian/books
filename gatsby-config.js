module.exports = {
  siteMetadata: {
    title: 'Books',
    siteUrl: 'http://localhost:9000',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/my-site-map.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sbardian Books',
        short_name: 'sbardian-books',
        start_url: '/',
        background_color: '#606d80',
        theme_color: '#606d80',
        display: 'minimal-ui',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        sitemapPath: `/my-site-map.xml`,
      },
    },
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
