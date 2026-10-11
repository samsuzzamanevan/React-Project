import React from 'react'

function Card2(props) {
    return (
        <>
            <div className='Card'>
                <p>{props.textcontent1}</p>
                <p style={{marginTop:"15px"}}>{props.textcontent4}</p>
                <h5>{props.textcontent2}</h5>
                <span>{props.textcontent3}</span>
                <div className='star'>
                    ⭐⭐⭐⭐⭐
                </div>
            </div>
        </>
    )
}

export default Card2
