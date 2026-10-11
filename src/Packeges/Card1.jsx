import React from 'react'
import Heading2 from './Heading2'
import Pera from './Pera'
import '../index.css'

function Card1(props) {
  return (
    <>
      <div className='cardbody'>
        <div className='cardimg'>
        <img src={props.src} alt="" width='68px' height='68px'/>
        </div>
        <h2><span>{props.text} </span> {props.text2}</h2>
        <p className='pera'>{props.textcontent}</p>
      </div>
    </>
  )
}

export default Card1
