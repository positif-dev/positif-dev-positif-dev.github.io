import React, { FC } from 'react'
import './header.scss'
import Logo from '../../assets/logo.png'

interface IProps {
  ClassName?: string
}

const HOME = '/'
// const EPISODE = '/ep'
// const BLOG = '/blog'
// const ABOUT = '/about'

const pathLink = window.location.pathname

export const Header: FC<IProps> = (props) => {
  const baseNavClass = 'nav-link'
  const activeNavClass = 'nav-link active'
  const homeClass = pathLink === HOME ? activeNavClass : baseNavClass
  // const episodeClass = pathLink === EPISODE ? activeNavClass : baseNavClass
  // const blogClass = pathLink === BLOG ? activeNavClass : baseNavClass
  // const aboutClass = pathLink === ABOUT ? activeNavClass : baseNavClass

  return (
    <header>
      <a
        href = { HOME }
        className = 'header-title'>
        <img src={Logo} className = 'logo' alt='positif.dev logo'/>
        {/* <p className = 'name'>positif.dev</p> */}
      </a>

      <ul className = 'nav-list'>
        <li>
          <a className = { homeClass } href = { HOME }>Home</a>
        </li>
        {/* <li>
          <a className = { episodeClass } href = { EPISODE }>Episodes</a>
        </li>
        <li>
          <a className = { blogClass } href = { BLOG }>Blog</a>
        </li>
        <li>
          <a className = { aboutClass } href = { ABOUT }>About Us</a>
        </li> */}
      </ul>
    </header>
  )
}