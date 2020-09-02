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
    image: 'https://picsum.photos/200/300'
  },
  {
    name: 'Devin Ryan Riota',
    description: 'Software Engineer',
    image: 'https://picsum.photos/200/300',
    github: 'https://google.com',
    linkedin: 'https://google.com',
    website: 'https://google.com'
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