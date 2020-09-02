import React, { FC } from 'react'
import Style from './style.module.scss'
import { Member } from '../../types'
import { AboutUsCard } from '../../components'

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