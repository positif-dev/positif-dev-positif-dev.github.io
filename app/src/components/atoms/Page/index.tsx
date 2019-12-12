import React, { ReactNode, CSSProperties } from 'react'
import Style from './style.module.scss'

interface IPage {
  children: ReactNode,
  CustomStyle?: CSSProperties,
  ClassName?: String
}

export default ( { children, CustomStyle, ClassName }: IPage ) => {
  let className = `${Style.Page} ${ClassName || ''}`

  return <div className={className} style={CustomStyle}>
    { children }
  </div>
}