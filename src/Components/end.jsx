import React from 'react'
import '../index.css'
import Heading1 from '../Packeges/Heading1'
import Button from '../Packeges/Button'

function End() {
    return (
        <>
            <div className='end'>
                <div className='container'>
                    <Heading1 text='Start Your Website Today!' />
                    <Button textcontent='Get it Now!' />
                </div>
            </div>
        </>
    )
}

export default End
