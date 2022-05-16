import React from 'react'
import PlayButtonSvg from '../playbuttonsvg'
import './style.css'

const Top = () => {
  return (
    <div className='Top'>
    <div>
      <div className='TopSvg'>
          <PlayButtonSvg/>
      </div>
          <h3 className='topComing'>Coming Soon</h3>
      </div>
    </div>
  )
}

export default Top