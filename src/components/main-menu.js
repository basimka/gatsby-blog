import * as React from "react"
import { Link } from 'gatsby'
import { navLinks,navLinkItem,navLinkText} from './layout.module.css'


const MainMenu =()=>{
 
  return(
    <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/'  className={navLinkText}>
              Главная
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/about' className={navLinkText}>
              Контакты
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/blog' className={navLinkText}>
              Блог
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/oeuvre' className={navLinkText}>
              Творчество
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/maps' className={navLinkText}>
              Карты
            </Link>
          </li>
        </ul>
      </nav>
  )
}
export default MainMenu