import './ProductScreen.css'

function ProductScreen() {
    return (
        <div className='productscreen' >
            <div className='productscreen__left'>
                <div className='left__image'>
                    <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550696085-kingtop-1550696080.jpg?crop=1xw:1xh;center,top&resize=768:*' alt='product name' />
                </div>
                <div className='left__info'>
                    <p className='left__name'>Kingtop</p>
                    <p>Price: €17</p>
                    <p className='info__description'>
                        The Kingtop grinder 
                        is nearly as big as the palm of your hand, great for 
                        when you have a considerable amount of bud and dont 
                        need to be discrete. Its four pieces include a 
                        magnetically sealed cap, a grinder, a mesh screen, 
                        and a catch tray—a big one, at that—and its 45 teeth 
                        ensure smooth grinding.
                    </p>
                </div>
            </div>
            <div className='productscreen__right'>
                <div className='right__info'>
                    <p>
                        Price: <span>€499.99</span>
                    </p>
                    <p>
                        Status <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </p>
                    <p>
                        <button type='button'>Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen