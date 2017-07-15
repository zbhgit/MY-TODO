import React from 'react'
import './index.scss'

const CommonHeader = ({title,description})=> {
  return (
    <div className="commonheader">
      <div className="circle">
        <div className="inner-circle"></div>
      </div>
      <h2 className="title" >{title}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default CommonHeader