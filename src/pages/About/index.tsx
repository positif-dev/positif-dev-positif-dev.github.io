import React, { FC } from 'react'
// import Style from './style.module.scss'

interface IProps {
  ClassName?: string
}

export const About: FC<IProps> = (props) => {
  return (
    <div>
      About
    </div>
    // <div className={`${Style.Page} ${props.ClassName || ''}`}>
    //   { props.children }
    // </div>
  )
}