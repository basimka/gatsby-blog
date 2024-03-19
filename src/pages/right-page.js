import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Seo from "../components/seo"
import Video from "../components/video"

const RightPage = ({data}) => {
    console.log(data)
    return(
        <main>
            <p>Right Page</p>
            <ul>
                {
                    data.allMdx.nodes.map(node =>(
                        <article key={node.id}>
                            <h2>
                              <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                              </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </ul>

          
        </main>
        
      )
}
  


export const query = graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {theme: {eq: "blog"}}}
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

export const Head = () => <Seo title="Right Page" />

export default RightPage