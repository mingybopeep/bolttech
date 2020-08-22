import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import classes from './blogcomponent.module.scss';


export default function BlogComponent() {

    let data = useStaticQuery(graphql`
        query{
            allMarkdownRemark {
                edges {
                    node {
                        excerpt(pruneLength: 80)
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
    `)
    
    data.allMarkdownRemark.edges = data.allMarkdownRemark.edges.filter(post=>{
        return post.node.frontmatter.posttype != "auxpage";
    });

    return (
        <section className={classes.BlogComponent} >
            <h2>Interesting Reads</h2> <Link  className={classes.link2} to='/allblogs'>{`See all Blogs >`}</Link>
            <div>
                {data.allMarkdownRemark.edges.slice(0,3).map((item, index) => {
                    let clist = [classes.blogpost];
                    if( index >= 2){
                        clist.push(classes.hidden);
                    }
                    return (
                        <div className={clist.join(' ')} >
                            <img src={item.node.frontmatter.featuredImage} />
                            <div>
                                <h3>{item.node.frontmatter.title}</h3>
                                <p>{item.node.excerpt}</p>
                                <Link className={classes.link} to={`/blog/${item.node.fields.slug}`}>Read More</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
