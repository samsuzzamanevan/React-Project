import React from 'react'
import '../index.css'
import Heading1 from '../Packeges/Heading1'
import Button from '../Packeges/Button'

function Bannar() {
    return (
        <>
            <div className='bannar'>
                <div className='container'>
                    <div className='box'>
                        <div className='right'>
                            <Heading1 type='true' text='Premium Resume, CV, vCard & Portfolio WordPress Theme' />
                            <Button type = 'true' textcontent = 'View Demos' />
                            <Button type = 'true' textcontent = 'Buy Now' />
                        </div>
                        <div className='left'>
                            
                            <img src="src/assets/bannar.gif" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bannar
