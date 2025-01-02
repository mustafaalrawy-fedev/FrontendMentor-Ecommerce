import { useDispatch, useSelector } from 'react-redux';
import cartIcon from '../../../assets/icons/icon-cart.svg';
import minusIcon from '../../../assets/icons/icon-minus.svg';
import plusIcon from '../../../assets/icons/icon-plus.svg';
import './productsDetails.scss';
import {
  addToCart,
  decreaseCount,
  increaseCount,
} from '../../../store/cartSlice/cartSlice';
import productImgThumbnail from '../../../assets/image-products/image-product-1-thumbnail.jpg';

const ProductsDetails = () => {
  const { count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className='product-details'>
        <h6>sneaker company</h6>
        <h1>
          Fall Limited Edition <br />
          Sneakers
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear <br />
          companion. Featuring a durable rubber outer sole, they’ll <br />
          withstand everything the weather can offer.
        </p>
        <div className='price'>
          <div>
            $125.00 <span className='offer-percentage'>50%</span>
          </div>
          <div className='price-without-offer'>
            <del>$250</del>
          </div>
        </div>
        <div className='add-to-cart'>
          <div className='amount'>
            <span>
              <img
                src={minusIcon}
                alt='minusIcon'
                onClick={() => dispatch(decreaseCount())}
              />
              <div className='count'>{count}</div>
              <img
                src={plusIcon}
                alt='plusIcon'
                onClick={() => dispatch(increaseCount())}
              />
            </span>
          </div>
          <button
            className='add-to-cart-btn'
            onClick={() =>
              dispatch(
                addToCart({
                  product: {
                    title: 'Fall Limited Edition Sneakers',
                    imgSource: productImgThumbnail,
                    price: 125,
                  },
                  count: count,
                })
              )
            }
          >
            <img src={cartIcon} alt='cartIcon' />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
