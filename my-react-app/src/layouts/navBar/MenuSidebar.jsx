import OverLay from '../../components/overlay/OverLay';
import MobileSideBar from '../../layouts/navBar/mobile/sideBar/mobileSideBar';
import { useSelector } from 'react-redux';

const MenuSidebar = () => {
  const { isOpen } = useSelector((state) => state.menu);
  const { isClicked } = useSelector((state) => state.modal);

  return (
    <>
      <MobileSideBar isOpen={isOpen} />
      <OverLay isOpen={isOpen} isClicked={isClicked} />
    </>
  );
};

export default MenuSidebar;
