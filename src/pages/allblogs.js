import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import classes from './allblogs.module.scss';
import Layout from '../components/layout';


export default function AllBlogs() {
    let data = useStaticQuery(graphql`
        query{
            allMarkdownRemark {
                edges {
                    node {
                        excerpt(pruneLength: 300)
                        frontmatter {
                            title
                            date
                            posttype
                            featuredImage
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    
    data.allMarkdownRemark.edges = data.allMarkdownRemark.edges.filter(post=>{
        return post.node.frontmatter.posttype != "auxpage";
    });

    return (
        <Layout >
            <section className={classes.allblogs} >
                <div className={classes.nonfeatured}>
                    {
                        data.allMarkdownRemark.edges.map((item, index) => {
                            if (index == 0) {
                                return (
                                    <div key={index} className={classes.featured}>
                                        <img src={item.node.frontmatter.featuredImage} />
                                        <div>
                                            <h3>{item.node.frontmatter.title}</h3>
                                            <p>{item.node.excerpt}</p>
                                            <Link className={classes.link} to={`/blog/${item.node.fields.slug}`}>Read More</Link>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index }className={classes.blogpost} >
                                        <img src={item.node.frontmatter.featuredImage} />
                                        <div>
                                            <h5>{item.node.frontmatter.title}</h5>
                                            <p>{item.node.excerpt}</p>
                                            <Link className={classes.link} to={`/blog/${item.node.fields.slug}`}>Read More</Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </section>
        </Layout >
    )
}
