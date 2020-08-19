import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import classes from './blog.module.scss';
import BlogComponent from '../components/blogcomponent/blogcomponent';


export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            date
        }
        html
    }
}
`

export default function Blog(props) {
    return (
        <Layout>
            <section className={classes.blog} >
                <div>
                    <img src='' />
                    <span> {props.data.markdownRemark.frontmatter.date}</span>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                </div>
                <div className={classes.md} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}} /> 
            </section>
            <BlogComponent />
        </Layout>
    )

}