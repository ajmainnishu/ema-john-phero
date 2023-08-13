import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './OrderReview.css'
import OrderItem from '../OrderItem/OrderItem';
import { useState } from 'react';
import { clearFromDb, deleteItemFromDb } from '../../Utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const OrderReview = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleDeleteItem = id => {
        const remainingCart = cart.filter(pd => pd.id !== id);
        setCart(remainingCart);
        deleteItemFromDb(id);
    }
    const clearData = () => {
        setCart([]);
        clearFromDb();
    }
     return (
        <div className='order-review-container'>
            <div className='order-item-container'>
                {
                    cart.map(product => <OrderItem key={product.id} product={product} handleDeleteItem={handleDeleteItem}></OrderItem>)
                }
            </div>
            <div className='order-summary-container'>
                <Cart cart={cart} clearData={clearData}>
                    <div>
                        <Link><button id='btn-order'>Proceed Checkout&nbsp;<FontAwesomeIcon  icon={faArrowRight}/></button></Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;