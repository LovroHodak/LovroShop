import React from 'react'
import './ProductDetail.css'
import { Link } from 'react-router-dom'

export default function ProductDetail() {
    return (
        <div className='product'>
            <img 
                src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550696085-kingtop-1550696080.jpg?crop=1xw:1xh;center,top&resize=768:*' 
                alt='ProductName' 
            />
            <div className='product__info'>
                <p className='info__name'>Kingtop</p>
                <p className='info__description'>
                    The Kingtop grinder 
                    is nearly as big as the palm of your hand, great for 
                    when you have a considerable amount of bud and dont 
                    need to be discrete. Its four pieces include a 
                    magnetically sealed cap, a grinder, a mesh screen, 
                    and a catch tray—a big one, at that—and its 45 teeth 
                    ensure smooth grinding.
                </p>
                <p className='info__price'>€17</p>

                <Link to={`/product/${11}`} className='info__button'>View</Link>
            </div>
        </div>
    )
}
