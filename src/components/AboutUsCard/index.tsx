import React, { FC } from 'react'
import Style from './style.module.scss'
import { Member } from '../../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  Member: Member
}

export const AboutUsCard: FC<IProps> = ({ Member }: IProps) => {
  return (
    <div className={Style.Card}>
      <div className = { Style.ImageContainer }>
        <img alt={Style.Title} src={Member.image} />
      </div> 
      

      <div className={Style.Attribute}>
        <div className={Style.Title}>
          { Member.name }
        </div>

        <div className={Style.Description}
          dangerouslySetInnerHTML={{__html: Member.description}} >
        </div>

        {/* <div>
          <div className = { Style.Icon }>
            <FontAwesomeIcon icon={faCalendar}/>
          </div>
          { Episode.date }
        </div> */}
      </div>

    </div>
  )
}