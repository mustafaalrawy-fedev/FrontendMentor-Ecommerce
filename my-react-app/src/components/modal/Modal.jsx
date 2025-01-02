import { useSelector } from 'react-redux';
import './modal.scss';
import ProductModal from './productModal/ProductModal';

const Modal = () => {
  const { isClicked } = useSelector((state) => state.modal);

  return (
    <>
      <div className={`modal ${isClicked ? '' : 'close'}`}>
        <ProductModal />
      </div>
    </>
  );
};

export default Modal;
