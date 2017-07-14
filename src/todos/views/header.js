import React from 'react'
import './style/header.scss'

const THeader = (props)=> {
  return (
    <div className="header"> 
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </div>   
  )
}

export default THeader