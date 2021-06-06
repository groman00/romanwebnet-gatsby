module.exports = {
  siteMetadata: {
    title: 'Romanwebnet.com',
    description:
      'Website of Gregory M. Roman. Software Engineer. Jersey City, NY',
    author: '@gatsbyjs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `
          $font-bold: 'foo';
          @import "${__dirname}/src/scsshelpers/variables';
          @import "${__dirname}/src/scsshelpers/mixins';
        `,
        // indentedSyntax: true,
        // sassOptions: {
        //   includePaths: [`${__dirname}/src/scss`],
        // },
      },
    },
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
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': 'src',
          '@scss': 'src/scss',
          // '@components': 'src/components',
          // '@layouts': 'src/layouts',
          // '@pages': 'src/pages',
          // '@sass': 'src/sass',
          // '@templates': 'src/templates',
          // '@posts': 'content/posts',
        },
        // extensions: [], // Omit extensions
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
