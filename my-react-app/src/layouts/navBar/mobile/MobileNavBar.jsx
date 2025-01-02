import Avatar from '../../../components/avatar/Avatar';
import ShoppingCart from '../cart/ShoppingCart';
import Logo from '../../logo/Logo';
import menuIcon from '../../../assets/icons/icon-menu.svg';
import './mobileNavBar.scss';
import { useDispatch } from 'react-redux';
import { openMenu } from '../../../store/menuSlice/menuSlice';
import CartDropdown from '../cart/cartDropdown/CartDropdown';

const MobileNavBar = () => {
  const dispatch = useDispatch();
  const handleMenuOpen = () => {
    dispatch(openMenu());
  };

  return (
    <>
      <nav className='mobile'>
        <ul className='bars'>
          <li>
            <img
              className='menu-icon'
              src={menuIcon}
              alt='menuIcon'
              onClick={() => handleMenuOpen()}
            />
          </li>
          <Logo />
        </ul>
        <ul className='user-links'>
          <ShoppingCart mobile={'mobile'} />
          <Avatar />
        </ul>
        <CartDropdown />
      </nav>
    </>
  );
};

export default MobileNavBar;
