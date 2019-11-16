module.exports = {
  siteMetadata: {
    title: 'lukapeharda.com',
    description: 'PHP & JS developer',
    author: '@lukapeharda'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'lukapeharda.com',
        short_name: 'lukapeharda',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1a1f36',
        display: 'minimal-ui',
        icon: 'src/images/lp-icon-large-filled.png'
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"],
        whitelist: ['bg-e6n-red', 'bg-e6n-blue', 'bg-e6n-green', 'bg-e6n-yellow']
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-21092091-4',
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      }
    }
  ]
};
