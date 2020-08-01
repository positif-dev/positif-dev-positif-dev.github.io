import React, { FC } from 'react'
import Style from './style.module.scss'
import { Episode } from '../../types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  Episode: Episode,
  Max?: boolean
}

export const Card: FC<IProps> = ({ Episode, Max }: IProps) => {
  return (
    <div
      onClick={() => { window.open(Episode.link, '_blank') }}
      className={Max ? Style.MaxCard : Style.Card}>
      <div className = { Style.ImageContainer }>
        <img alt={Style.Title} src={Episode.image} />
      </div> 
      

      <div className={Style.Attribute}>
        <div className={Style.Title}>
          { Episode.title }
        </div>

        <div className={Style.Description}
          dangerouslySetInnerHTML={{__html: Episode.description}} >
        </div>

        <div>
          <div className = { Style.Icon }>
            <FontAwesomeIcon icon={faCalendar}/>
          </div>
          { Episode.date }
        </div>
      </div>

    </div>
  )
}