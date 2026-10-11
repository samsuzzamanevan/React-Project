import React from 'react'
import '../index.css'
import Li from '../Packeges/Li'

function Navbar() {
  return (
    <div>
      <div className='navber'>
            <div className='container'>
                <div className='box'>
                <img src="src/assets/logo.png" alt="" className='img' />
                <ul className='ul'>
                    <Li text = 'About'/>
                    <Li text = 'Features'/>
                    <Li text = 'Demos'/>
                    <Li text = 'Reviews'/>
                </ul>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar
