import * as React from 'react'
import { Link,useStaticQuery,graphql } from 'gatsby'
import { container,heading,sidepage,sidebarst} from './layout.module.css'
import Header from './header'
import MainMenu from './main-menu'
import SideBar from './sidebar'
import RightPage from '../pages/right-page'

const Layout = ({  pageTitle, children }) => {
 
  return (
    <div className={container}>
      <Header />
      <MainMenu />
      <main className={sidepage}>
        <div >
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
        <div>
          <SideBar />
          
        </div>
      </main>
      
    </div>
  )
}


export default Layout