import { Link } from 'react-router-dom';
import { LogoImage } from '../../utils/constants';

const Logo = () => {
  return (
    <Link className='inline-block' to='/'>
      <img src={LogoImage} alt='Logo' />
    </Link>
  );
};

export default Logo;
