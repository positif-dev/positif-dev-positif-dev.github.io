import React, { FC } from 'react'
import Style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'

export const Footer: FC<{}> = () => {
  const iconSize: "2x" | "xs" | "lg" | "sm" | "1x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | undefined = '2x'

  return (
    <footer className={Style.Footer}>
      <div>&copy; 2020 positif.dev. All Rights Reserved.</div>
      
      <div>

        <a className={Style.Icon} rel="noopener noreferrer" target="_blank"
          href="https://instagram.com/positif.dev">
          <FontAwesomeIcon icon={faInstagram} size={iconSize}/>
        </a>

        <a className={Style.Icon} rel="noopener noreferrer" target="_blank"
          href="https://open.spotify.com/show/6jBnKq2wqFuPoNIzibWVid" >
          <FontAwesomeIcon icon={faSpotify} size={iconSize}/>
        </a>

        <a className={Style.Icon} rel="noopener noreferrer" target="_blank"
          href="mailto:hello@positif.dev">
          <FontAwesomeIcon icon={faEnvelope} size={iconSize}/>
        </a>
      </div>
    </footer>
  )
}