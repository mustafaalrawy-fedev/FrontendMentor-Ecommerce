import { useSelector } from 'react-redux';
import './shoppingBadges.scss';

const ShoppingBadges = ({ mobile }) => {
  const { count, isEmpty } = useSelector((state) => state.cart);

  return (
    <>
      {isEmpty || (
        <div className={`shopping-items ${mobile ? 'mobile' : ''}`}>
          {count}
        </div>
      )}
    </>
  );
};

export default ShoppingBadges;
