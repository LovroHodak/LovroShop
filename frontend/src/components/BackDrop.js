import React from 'react'
import './BackDrop.css'

export default function BackDrop({ show, click }) {
    return show && <div className='backdrop' onClick={click} ></div>
}
