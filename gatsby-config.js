module.exports = {
    plugins: [
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
      {
        resolve: `gatsby-transformer-remark`, 
        options: {
          plugins: [
            'gatsby-remark-relative-images', 
            {
              resolve: 'gatsby-remark-images', 
              options: {
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
    ],
  };