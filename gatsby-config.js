const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Romanwebnet.com',
    description:
      'Website of Gregory M. Roman. Software Engineer. Jersey City, NY',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- excerpt end -->',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: './types/__generated__/gatsby-types.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
        },
        extensions: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Lato:300', 'EB Garamond:600']
    //     }
    //   }
    // },
  ],
};
