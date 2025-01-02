import { useState } from 'react';
import arrowRightIcon from '../../../assets/icons/icon-next.svg';
import arrowLeftIcon from '../../../assets/icons/icon-previous.svg';
import './productModal.scss';
// closeBtn
import closeBtn from '../../../assets/icons/icon-close.svg';
// Thumbnails
import productImgThumbnail1 from '../../../assets/image-products/image-product-1-thumbnail.jpg';
import productImgThumbnail2 from '../../../assets/image-products/image-product-2-thumbnail.jpg';
import productImgThumbnail3 from '../../../assets/image-products/image-product-3-thumbnail.jpg';
import productImgThumbnail4 from '../../../assets/image-products/image-product-4-thumbnail.jpg';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../store/modalSlice/modalSlice';

const thumbnailImg = [
  { id: 1, imgSource: productImgThumbnail1 },
  { id: 2, imgSource: productImgThumbnail2 },
  { id: 3, imgSource: productImgThumbnail3 },
  { id: 4, imgSource: productImgThumbnail4 },
];

const ProductModal = () => {
  const [activeImg, setActiveImg] = useState(1);

  const handleActiveImg = (imgId) => {
    // console.log(imgId);
    const selectedThumbnail = thumbnailImg.find((img) => img.id === imgId);
    setActiveImg(selectedThumbnail.id);
  };

  const handleIncreaseImgId = () => {
    let id = activeImg + 1;
    if (id > 4 || id < 1) {
      return;
    }
    setActiveImg(id);
  };

  const handleDecreaseImgId = () => {
    let id = activeImg - 1;
    if (id < 1) {
      return;
    }
    setActiveImg(id);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className='modal-desktop'>
        <img
          src={closeBtn}
          alt='closeBtn'
          className='closeBtn'
          onClick={() => dispatch(closeModal())}
        />
        <div className='images'>
          <img
            src={`/image-products/image-product-${activeImg}.jpg`}
            alt={`product-${activeImg}`}
          />
          {/* Icons */}
          <button
            className='arrow-btn next'
            onClick={() => handleIncreaseImgId()}
            disabled={activeImg === 4 ? true : false}
          >
            <img src={arrowRightIcon} alt='arrowRightIcon' />
          </button>
          <button
            className='arrow-btn previous'
            onClick={() => handleDecreaseImgId()}
            disabled={activeImg === 1 ? true : false}
          >
            <img src={arrowLeftIcon} alt='arrowLeftIcon' />
          </button>
        </div>
        {/* Thumbnail */}
        <div className='product-image-selectors'>
          {thumbnailImg.map((item) => {
            const { id, imgSource } = item;
            return (
              <div
                key={id}
                className='thumbnail'
                onClick={() => handleActiveImg(id)}
              >
                <div
                  className={`highlight ${id === activeImg ? 'active' : ''}`}
                ></div>
                <img src={imgSource} alt='product thumbnail' />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductModal;
