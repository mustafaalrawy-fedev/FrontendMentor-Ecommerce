import './productItems.scss';
import productImgThumbnail1 from '../../../../assets/image-products/image-product-1-thumbnail.jpg';
import productImgThumbnail2 from '../../../../assets/image-products/image-product-2-thumbnail.jpg';
import productImgThumbnail3 from '../../../../assets/image-products/image-product-3-thumbnail.jpg';
import productImgThumbnail4 from '../../../../assets/image-products/image-product-4-thumbnail.jpg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../store/modalSlice/modalSlice';

const thumbnailImg = [
  { id: 1, imgSource: productImgThumbnail1 },
  { id: 2, imgSource: productImgThumbnail2 },
  { id: 3, imgSource: productImgThumbnail3 },
  { id: 4, imgSource: productImgThumbnail4 },
];

const ProductItems = () => {
  const [activeImg, setActiveImg] = useState(1);

  const handleActiveImg = (imgId) => {
    // console.log(imgId);
    const selectedThumbnail = thumbnailImg.find((img) => img.id === imgId);
    setActiveImg(selectedThumbnail.id);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className='product-image'>
        <img
          src={`/image-products/image-product-${activeImg}.jpg`}
          alt='product'
          onClick={() => dispatch(openModal())}
        />
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

export default ProductItems;
