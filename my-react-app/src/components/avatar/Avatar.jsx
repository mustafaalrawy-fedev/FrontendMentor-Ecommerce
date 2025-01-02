import avatarImg from '../../assets/image-avatar.png';
import './avatar.scss';

const Avatar = () => {
  return (
    <>
      <div className='avatar'>
        <img src={avatarImg} alt='avatar' />
      </div>
    </>
  );
};

export default Avatar;
