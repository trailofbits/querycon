module.exports = {
  siteMetadata: {
    title: 'QueryCon 2019',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
        }
      }
    },
    /* TODO: Do we want analytics?
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-79943921-2'
      }
    },*/
    { resolve: 'gatsby-plugin-react-helmet' },
    { resolve: 'gatsby-plugin-sass' }
  ],
}
