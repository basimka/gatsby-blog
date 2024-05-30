import * as React from "react"
import { sidebarst} from './layout.module.css'
import { useStaticQuery, graphql, Link} from 'gatsby'
import {siteTitle} from "./layout.module.css"


const SideBar =()=>{
  const data = useStaticQuery(graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {theme: {eq: "blog"}}}
      limit: 2
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title 
          slug
        }
        id
        excerpt(pruneLength: 20)
      }
    }
  }
`)
 
  return(
   <main>
    <h3><p>Новенькое на сайте</p></h3>
    
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
    
   </main>
  )
}
export default SideBar



