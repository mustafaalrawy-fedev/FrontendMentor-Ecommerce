import { useState } from 'react';
import arrowRightIcon from '../../../../../assets/icons/icon-next.svg';
import arrowLeftIcon from '../../../../../assets/icons/icon-previous.svg';
import './productImages.scss';

const ProductImages = () => {
  const [imgId, setImgId] = useState(1);

  const handleIncreaseImgId = () => {
    let id = imgId + 1;
    if (id > 4 || id < 1) {
      return;
    }
    setImgId(id);
  };

  const handleDecreaseImgId = () => {
    let id = imgId - 1;
    if (id < 1) {
      return;
    }
    setImgId(id);
  };

  return (
    <div className={`mobile`}>
      <div className='images'>
        <img
          src={`/image-products/image-product-${imgId}.jpg`}
          alt={`product-${imgId}`}
        />
        {/* Icons */}
        <button
          className='arrow-btn next'
          onClick={() => handleIncreaseImgId()}
          disabled={imgId === 4 ? true : false}
        >
          <img src={arrowRightIcon} alt='arrowRightIcon' />
        </button>
        <button
          className='arrow-btn previous'
          onClick={() => handleDecreaseImgId()}
          disabled={imgId === 1 ? true : false}
        >
          <img src={arrowLeftIcon} alt='arrowLeftIcon' />
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
