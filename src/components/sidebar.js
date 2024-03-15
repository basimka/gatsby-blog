import * as React from "react"
import {siteTitle} from "./layout.module.css"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { container,heading,navLinks,navLinkItem,navLinkText, sidebarst} from './layout.module.css'


const SideBar =( {data})=>{
  console.log(data)
  return(
   <main className={sidebarst} >
    <p>News1</p>
    <p>News2</p>
    <p>News3</p>
    <p>News4</p>
    <p>News5</p>
    <p>News6</p>
    <p>News7</p>
             
    
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

export default SideBar