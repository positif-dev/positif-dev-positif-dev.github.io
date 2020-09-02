import React, { FC } from 'react'
import Style from './style.module.scss'
import { Member } from '../../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  Member: Member
}

export const AboutUsCard: FC<IProps> = ({ Member }: IProps) => {
  return (
    <div className = { Style.Card } >
      <img className = { Style.MemberImage } alt = { Member.name } src = { Member.image } />
      
      <div className = { Style.TextContainer } >
        <div className = { Style.Title }>
          { Member.name }
        </div>
        <div className = { Style.Description }
          dangerouslySetInnerHTML = {{__html: Member.description}} >
        </div>
        {
          Member.github !== undefined && (
            <div className = { Style.Social }>
              <a href = { Member.github }>
                <div className = { Style.Icon }>
                  <FontAwesomeIcon icon = { faGithub } />
                </div>
                Github
              </a>
            </div>
          )
        }

        {
          Member.linkedin !== undefined && (
            <div className = { Style.Social }>
              <a href = { Member.linkedin }>
                <div className = { Style.Icon }>
                  <FontAwesomeIcon icon = { faLinkedinIn } />
                </div>
                Linkedin
              </a>
            </div>
          )
        }

        {
          Member.website !== undefined && (
            <div className = { Style.Social }>
              <a href = { Member.website }>
                <div className = { Style.Icon }>
                  <FontAwesomeIcon icon = { faGlobe } />
                </div>
                Website
              </a>
            </div>
          )
        }
        
      </div>
    </div>
  )
}