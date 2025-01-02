import NavLinks from '../../navLinks/NavLinks.jsx';
import './sideBar.scss';
import closeIcon from '../../../../assets/icons/icon-close.svg';
import { closeMenu } from '../../../../store/menuSlice/menuSlice.js';
import { useDispatch } from 'react-redux';

const MobileSideBar = ({ isOpen }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={`side-bar ${isOpen ? '' : 'close'}`}>
        <img
          className='close-btn'
          src={closeIcon}
          alt='closeIcon'
          onClick={() => dispatch(closeMenu())}
        />
        <ul>
          <NavLinks />
        </ul>
      </div>
    </>
  );
};

export default MobileSideBar;
