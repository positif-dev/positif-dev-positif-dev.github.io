import React, { FC, useEffect } from 'react'
import Style from './style.module.scss'
import { Member } from '../../types'
import { AboutUsCard } from '../../components'

import ReactGA from 'react-ga'

export const PageViewAbout = () => {
  const pathName = window.location.pathname + window.location.search
  if(process.env.NODE_ENV === 'production') {
    ReactGA.pageview(pathName)
  }
}
interface IProps {
  ClassName?: string
}

const members: Member[] = [
  {
    name: 'Clavin June',
    description: 'Software Engineer',
    image: 'jun.jpeg',
    github: 'https://github.com/ClavinJune',
    linkedin: 'https://www.linkedin.com/in/juneardoc/',
    website: 'https://clavinjune.dev',
    medium: 'https://medium.com/@clavinjune'
  },
  {
    name: 'Devin Ryan Riota',
    description: 'Software Engineer',
    image: 'devin.jpg',
    github: 'https://github.com/devinryanriota',
    linkedin: 'https://www.linkedin.com/in/devinryanriota/',
    medium: 'https://medium.com/@devinryanriota'
  },
]

export const About: FC<IProps> = (props) => {
  useEffect(() => {
    PageViewAbout()
  }, [])

  return (
    <div className = { Style.container }>
      <h2 style = {{ textAlign: 'center' }}>
        About Us
      </h2>

      <div className = { Style.gridContainer }>
      {
        members.map((m: Member, index: number) => {
          return <AboutUsCard key = { index } Member = { m }/>
        })
      }
      </div>
    </div>
  )
}