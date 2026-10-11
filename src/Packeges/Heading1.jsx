import React from 'react'
import '../index.css'

function Heading1(props) {
  return (
    <>
      {
        props.type?<h1 className='heading1'>{props.text}</h1>:<h1 className='normalh1'>{props.text}</h1>
      }
    </>
  )
}

export default Heading1
