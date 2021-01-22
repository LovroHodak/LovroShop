import React from 'react'
import ProductDetail from '../components/ProductDetail'
import './HomeScren.css'

export default function HomeScreen() {
    return (
        <div className='homescreen'>
            <h2 className='homescreen__title'>Latest Products</h2>
            <div className='homescreen__products'>
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
            </div>
        </div>
    )
}
