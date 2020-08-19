const path = require('path');

module.exports.onCreateNode =  ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node, 
            name: 'slug', 
            value: slug
        })
    }
}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const blogtemplate = path.resolve('./src/templates/blog.js');
    const auxtemplate = path.resolve('./src/templates/aux.js');

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            posttype
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    res.data.allMarkdownRemark.edges.forEach(edge=>{
        if(edge.node.frontmatter.posttype == "auxpage") {
            createPage({
                component: auxtemplate, 
                path: `/pages/${edge.node.fields.slug}`, 
                context: {
                    slug: edge.node.fields.slug
                }
            })
        } else {
            createPage({
                component: blogtemplate, 
                path: `/blog/${edge.node.fields.slug}`, 
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
    })
} 