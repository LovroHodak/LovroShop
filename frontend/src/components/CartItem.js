import React from 'react'
import './CartItem.css'
import {Link} from 'react-router-dom'

export default function CartItem() {
    return (
        <div className='cartitem'>
            <div className='cartitem__image'>
                <img 
                    src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550696085-kingtop-1550696080.jpg?crop=1xw:1xh;center,top&resize=768:*' 
                    alt='kingtopFoto' 
                />
            </div>

            <Link to={`/product/${11}`} className='cartitem__name'>
                <p>Kingtop</p>
            </Link>

            <p className='cartitem__price'>€16.99</p>

            <select className='cartitem__select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>

            <button className='cartitem__deleteBtn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}
