import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar({ click }) {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <h2>Miha Shop</h2>
            </div>

            <ul className='navbar__links'>
                <li>
                    <Link to='/cart' className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart <span className='cartlogo__badge'></span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>Shop</Link>
                </li>
            </ul>

            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}
