import * as React from 'react'
import { container,heading,sidepage} from './layout.module.css'
import Header from './header'
import MainMenu from './main-menu'
import SideBar from './sidebar'

const Layout = ({  pageTitle, children,data }) => {
 console.log(data)
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