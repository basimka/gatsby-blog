import * as React from 'react'
import Layout from '../../../../components/layout'
import Seo from '../../../../components/seo'
import { graphql } from 'gatsby'

const SongPost = ({data,children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.data}</p>
      {children}
      
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }`


export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default SongPost