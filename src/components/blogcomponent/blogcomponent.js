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
            <h2>Interesting Reads</h2> <Link  className={classes.link2} to='/blogs'>{`See all Blogs >`}</Link>
            <div>
                {data.allMarkdownRemark.edges.slice(0,3).map((item, index) => {
                    let clist = [classes.blogpost];
                    if( index >= 2){
                        clist.push(classes.hidden);
                    }
                    return (
                        <div className={clist.join(' ')} >
                            <img src='https://s3-alpha-sig.figma.com/img/d512/c636/b148f7e282bf59bce813cf31054d0ed5?Expires=1598832000&Signature=BB4gl7AbEtVDVP-BgaI8VVBFYHUgHln4Gcz~77miYxUDEyesOt-ityIuptuH3TTUo8ps5DGIPQnKbyejm39PL3Q5tA~t5krcm-VHY-en7VVzGyAowBOp7AdrH~3esXodh6MeonDXTG94oHZH-n-iXKMaOrkUgTfP-1BYGimQ76R4oQdx3ky1zeEQSuHpOEf4bSC6ap~jRyhYWoQ3CbtMXK2PPNz10~KL14soyZdiaoL43T9l5~0t2pRy9MtgqSZrvzQZpddAy4dNPuQB1SUDUTYaOW5q9W~4k4Jl3NwObHXJCZoL5V8FcNJx23vbcyPdNIfXAASi05Fx7uW9YUS2HA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
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
