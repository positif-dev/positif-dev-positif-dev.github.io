import React, { ReactNode, MouseEventHandler, CSSProperties } from 'react'
import Style from './style.module.scss'

interface IButton {
  children?: ReactNode,
  Content?: ReactNode,
  OnClick?: MouseEventHandler,
  ClassName?: String,
  CustomStyle?: CSSProperties,
  Solid?: Boolean,
  Outlined?: Boolean
}

export default ( props: IButton ) => {
  let value: ReactNode = props.children || props.Content || ''
  let className: String = props.ClassName || ''
  let mode: String = ''
  
  if (props.Solid) {
    mode = Style.Solid
  } else if (props.Outlined) {
    mode = Style.Outlined
  }

  let style: string = `${Style.Button} ${mode} ${className}`

  return <div className={style} onClick={props.OnClick}
    style={props.CustomStyle}>
    { value }
  </div>
}
