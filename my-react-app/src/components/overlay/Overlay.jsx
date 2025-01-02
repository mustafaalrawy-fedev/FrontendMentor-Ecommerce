import { useDispatch } from 'react-redux';
import { closeMenu } from '../../store/menuSlice/menuSlice';
import './overlay.scss';

const OverLay = ({ isOpen, isClicked }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`overlay ${isOpen || isClicked ? '' : 'close'}`}
        onClick={() => dispatch(closeMenu())}
      ></div>
    </>
  );
};

export default OverLay;
