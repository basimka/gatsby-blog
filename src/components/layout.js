import * as React from 'react'
import { wrapper,heading,sidepage, sidebarst,headbarst} from './layout.module.css'
import Header from './header'
import MainMenu from './main-menu'
import SideBar from './sidebar'
import { Link } from 'gatsby'


const Layout = ({  pageTitle, children, data }) => {
 console.log(data)
  return (
    <div className={wrapper}>
      <Header />
      <MainMenu />
      <main className={sidepage}>
        <div className={headbarst} >
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
        <div  className={sidebarst} >
          <SideBar />  
        </div>
      </main>
      
    </div>
  )
}



export default Layout