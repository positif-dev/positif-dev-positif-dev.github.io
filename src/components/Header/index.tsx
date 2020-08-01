import React, { FC } from 'react'
import './header.scss'
import Logo from '../../assets/logo.png'

interface IProps {
  ClassName?: string
}

const HOME = '/'

export const Header: FC<IProps> = (props) => {
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
          <a className = 'nav-link' href = { HOME }>Home</a>
        </li>
        <li>
          <a className = 'nav-link' href = { HOME }>Episodes</a>
        </li>
        <li>
          <a className = 'nav-link' href = { HOME }>Blog</a>
        </li>
        <li>
          <a className = 'nav-link' href = { HOME }>About Us</a>
        </li>
      </ul>
    </header>
  )
}