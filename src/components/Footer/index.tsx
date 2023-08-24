import Logo from '../common/Logo';
import { socialData } from '../../utils/constants';
import { Link } from 'react-router-dom';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='px-6 mt-16'>
      <Logo />
      <p className='mt-8 mb-16'>
        All rights reserved © Equalizer 2021 Have any problems? Contact us via
        social media or email us at <br />{' '}
        <span className='text-body-3 font-bold'>equalizer@example.com</span>
      </p>
      <div className='flex mb-16 gap-5'>
        {socialData.map((item, index) => (
          <Link key={index} to={item.url}>
            <img src={item.icon} alt='Social Icon' />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
