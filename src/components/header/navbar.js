import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import {
  navBar,
  navLinks,
  navLinkItem,
  navLinkText,
} from './navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWidth(width)
  }

  const navList = [
    {name: 'CONTACT', linkSrc: '/contact', iconSrc: faAddressBook},
    {name: 'HOME', linkSrc: '/', iconSrc: faHome},
    {name: 'DOWNLOAD', linkSrc: '/gamelist', iconSrc: faAddressBook},
  ]

  return (
    <nav className={navBar}>
      <ul className={navLinks}>
        {navList.map((nav, index) => (
          <li key={index} className={navLinkItem}>
            <Link to={nav.linkSrc} className={navLinkText}>
              {width > 700 ? nav.name : <FontAwesomeIcon icon={nav.iconSrc} size="2px" />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;