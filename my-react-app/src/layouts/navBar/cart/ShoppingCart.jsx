import cartIcon from '../../../assets/icons/icon-cart.svg';
import './shoppingCart.scss';
import ShoppingBadges from './shoppingBadges/ShoppingBadges';
import { useDispatch } from 'react-redux';
import { toggleOpenCart } from '../../../store/cartSlice/cartSlice';

const ShoppingCart = ({ mobile }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className='shopping-cart'>
        <img
          src={cartIcon}
          alt='cartIcon'
          onClick={() => dispatch(toggleOpenCart())}
        />
        <ShoppingBadges mobile={mobile} />
      </li>
    </>
  );
};

export default ShoppingCart;
