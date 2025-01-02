import Avatar from '../../../components/avatar/Avatar.jsx';
import ShoppingCart from '../cart/ShoppingCart';
import Logo from '../../logo/Logo';
import './desktopNavBar.scss';
import NavLinks from '../navLinks/NavLinks.jsx';
import CartDropdown from '../cart/cartDropdown/CartDropdown.jsx';

const DesktopNavBar = () => {
  return (
    <>
      <nav className='desktop'>
        <nav className='desktop'>
          <Logo />
          <ul className='bars'>
            <NavLinks />
          </ul>
          <ul className='user-links'>
            <ShoppingCart />
          </ul>
          <Avatar />
        </nav>
        <CartDropdown />
      </nav>
    </>
  );
};

export default DesktopNavBar;
