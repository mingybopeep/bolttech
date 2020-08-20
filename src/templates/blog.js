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
            author
        }
        html
    }
}
`


export default function Blog(props) {

    return (
        <Layout>
            <div>
                <section className={classes.blog} >
                    <div>
                        <img src='' />
                        <span>
                            <b>{`${props.data.markdownRemark.frontmatter.date}   `}</b>
                            <br />
                            {props.data.markdownRemark.frontmatter.author}
                        </span>
                        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    </div>
                    <div className={classes.md} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
                </section>
                <BlogComponent />
            </div>
        </Layout>
    )

}