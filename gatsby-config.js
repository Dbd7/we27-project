module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "WE27 PROJECT",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
};
