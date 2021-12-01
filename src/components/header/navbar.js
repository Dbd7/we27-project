import React from "react";
import { Link } from "gatsby";
import {
  navBar,
  navLinks,
  navLinkItem,
  navLinkText,
} from './navbar.module.css'

const NavBar = () => {
  return (
    <nav className={navBar}>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/contact" className={navLinkText}>
            CONTACT
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            HOME
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/gamelist" className={navLinkText}>
            DOWNLOAD
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;