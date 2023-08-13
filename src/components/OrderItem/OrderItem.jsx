import './OrderItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const OrderItem = ({product, handleDeleteItem}) => {
    const {id, img, name, price, shipping} = product;
    return (
        <div className="order-item">
            <div className='order-item-info'>
                <img src={img} alt="" />
                <div className='order-flex'>
                    <h6>{name}</h6>
                    <p>Price: <span className='orange-text'>${price}</span></p>
                    <p>Shipping Charge: <span className='orange-text'>${shipping}</span></p>
                </div>
            </div>
            <button onClick={() => handleDeleteItem(id)} className='btn-order-delete'><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default OrderItem;