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
        className = 'header_title'>
        <img src={Logo} className = 'logo' alt='positif.dev logo'/>
        <p className='name'>positif.dev</p>
      </a>
    </header>
  )
}