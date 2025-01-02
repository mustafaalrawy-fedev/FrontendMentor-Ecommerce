import deleteBtn from '../../../../assets/icons/icon-delete.svg';
import './cartContent.scss';

const CartContent = ({ count, content, handleRemoveFromCart }) => {
  const { imgSource, title, price } = content;
  return (
    <>
      <div className='content'>
        <div className='image'>
          <img src={imgSource} alt={title} />
        </div>
        <div className='info'>
          <div className='title'>
            <h6>{title}</h6>
          </div>
          <div className='price'>
            <span>
              {`$${price}.00`} x {count}{' '}
              <span className='total-price'>{`$${price * count}.00  `}</span>
            </span>
            <span className='delete-btn' onClick={handleRemoveFromCart}>
              <img src={deleteBtn} alt='deleteBtn' />
            </span>
          </div>
        </div>
      </div>
      <button
        className='checkout-btn'
        type='button'
        onClick={handleRemoveFromCart}
      >
        Checkout
      </button>
    </>
  );
};

export default CartContent;
