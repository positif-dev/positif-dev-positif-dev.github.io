import React, { CSSProperties } from 'react'
import UnderDevelopment from './pages/UnderDevelopment'

export default () => {
  let style: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100%'
  }

  return <div style={style}>
    <UnderDevelopment />
  </div>
}