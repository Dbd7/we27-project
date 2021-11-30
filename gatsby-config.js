module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "WE27 PROJECT",
    description: "WANGEMAS27 PROJECT"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-background-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path:  `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Space Mono\:400`
        ],
        display: 'swap'
      }
    },
  ],
};
