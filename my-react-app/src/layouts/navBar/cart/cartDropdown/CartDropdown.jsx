import { useDispatch, useSelector } from 'react-redux';
import './cartDropdown.scss';
import CartContent from '../cartContent/CartContent';
import { deleteFromCart } from '../../../../store/cartSlice/cartSlice';

const CartDropdown = () => {
  const { isOpen, content, isEmpty, count } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(deleteFromCart());
  };

  return (
    <>
      <div className={`cart-drop-down ${isOpen ? '' : 'close'}`}>
        <div className='cart-drop-down-header'>
          <h6 style={{ color: 'var(--very-dark-blue)' }}>Cart</h6>
        </div>
        <div className='cart-drop-down-content'>
          {isEmpty ? (
            <h6>Your Cart is Empty!</h6>
          ) : (
            <>
              <CartContent
                count={count}
                content={content}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
