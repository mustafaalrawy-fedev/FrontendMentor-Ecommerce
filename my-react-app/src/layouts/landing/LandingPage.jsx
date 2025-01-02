import ProductsDetails from './productDetails/ProductsDetails';
import DesktopProductItems from './productItems/desktop/ProductItems';
import MobileProductItems from './productItems/mobile/productItems';
import './landingPage.scss';
import Modal from '../../components/modal/modal';

const LandingPage = () => {
  return (
    <>
      <div className='products'>
        {/* Desktop */}
        <DesktopProductItems />
        {/* Mobile */}
        {/* <div className='mobile'> */}
        <MobileProductItems />
        {/* </div> */}
        <ProductsDetails />
        <Modal />
      </div>
    </>
  );
};

export default LandingPage;
