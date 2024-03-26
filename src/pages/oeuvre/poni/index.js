import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'


const SongsPoniPage= ({data}) => (
  <Layout pageTitle="Творчество Пони">
        <ul>
                {
                    data.allMdx.nodes.map(node =>(
                        <article key={node.id}>
                            <h2>
                              <Link to={`/oeuvre/poni/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                              </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </ul>
    <Link to="/oeuvre">Go back to the Oeuvrepage</Link>
  </Layout>
)

export const query = graphql`
query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {theme: {eq: "poni-song"}}}
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

export default SongsPoniPage