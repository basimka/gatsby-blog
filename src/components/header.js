import * as React from "react"
import {siteTitle} from "./layout.module.css"
import { useStaticQuery, graphql, Link } from 'gatsby'

const Header =()=>{
  const data = useStaticQuery(graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return(
    <header className={siteTitle}>{data.site.siteMetadata.title}</header>
  )
}
export default Header
