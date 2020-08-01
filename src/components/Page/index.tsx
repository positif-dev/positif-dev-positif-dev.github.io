import React, { FC } from 'react'
import Style from './style.module.scss'

interface IProps {
  ClassName?: string
}

export const Page: FC<IProps> = (props) => {
  return (
    <div className={`${Style.Page} ${props.ClassName || ''}`}>
      { props.children }
    </div>
  )
}