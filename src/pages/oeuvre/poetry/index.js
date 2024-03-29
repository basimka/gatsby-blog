import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'


const PoetryPage= ({data}) => (
  <Layout pageTitle="Поэзия и проза">
        <ul>
                {
                    data.allMdx.nodes.map(node =>(
                        <article key={node.id}>
                            <h2>
                              <Link to={`/oeuvre/poetry/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                              </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </ul>
    <Link to="/oeuvre">Вернуться обратно</Link>
  </Layout>
)

export const query = graphql`
query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {theme: {eq: "poetry"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="Postament Songs" />

export default PoetryPage