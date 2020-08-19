import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import classes from './aux.module.scss';

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
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
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                </div>
                <div className={classes.md} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}} /> 
            </section>
        </Layout>
    )

}