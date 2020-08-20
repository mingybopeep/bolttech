module.exports = {
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-fontawesome-css`,
      `gatsby-plugin-material-ui`, 
      `gatsby-plugin-sass`, 
      {
        resolve: `gatsby-source-filesystem`, 
        options: {
          name: 'src', 
          path: `${__dirname}/src/`
        }
      }, 
      `gatsby-plugin-sharp`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-transformer-remark`, 
        options: {
          plugins: [
            'gatsby-remark-relative-images', 
            {
              resolve: 'gatsby-remark-images', 
              options: {
                linkImagesToOriginal: false, 
                maxWidth: 750
              }
            }
          ]
        }
      }
    ],
  };