import React from 'react'
import Heading1 from '../Packeges/Heading1'
import '../index.css'

function Version2() {
    return (
        <>
            <div className='version2'>
                <div className='container'>
                    <h1>Light <span>&</span> Dark Versions</h1>
                    <div className='flex'>
                        <div className='right'>
                            <img src="src/assets/major2.jpg" alt="" />
                        </div>
                        <div className='left'>
                            <img src="src/assets/major2-2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Version2
