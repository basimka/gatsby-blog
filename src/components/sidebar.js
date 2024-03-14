import * as React from "react"
import {siteTitle} from "./layout.module.css"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { container,heading,navLinks,navLinkItem,navLinkText, sidebarst} from './layout.module.css'


const SideBar =({data})=>{
 
  return(
   <main className={sidebarst} >
    <p>News1</p>
    <p>News2</p>
    <p>News3</p>
    <p>News4</p>
    <p>News5</p>
    <p>News6</p>
    <p>News7</p>
    <ul>
                
            </ul>
   </main>
  )
}



export default SideBar