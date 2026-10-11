import React from 'react'
import '../index.css'


function Button(props) {
  return (
    <>
      {
        props.type?<button className='button'>{props.textcontent}</button>:<button className='normalbutton'>{props.textcontent}</button>
      }
    </>
  )
}

export default Button
