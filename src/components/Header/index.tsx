import React, { FC } from 'react'
import Style from './style.module.scss'

interface IProps {
  ClassName?: string
}

export const Header: FC<IProps> = (props) => {
  return (
    <div
      className = { Style.Header }>
      abc
    </div>
  )
}