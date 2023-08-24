import { Link } from 'react-router-dom';
import { socialData } from '../../utils/constants';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className='px-6 mt-16 md:container'>
      <Logo />
      <div className='md:flex md:items-center md:justify-between'>
        <p className='mt-8 mb-16 md:w-[50%]'>
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at <br />{' '}
          <span className='text-base leading-[26px] font-bold'>
            equalizer@example.com
          </span>
        </p>
        <div className='flex md:justify-end mb-16 gap-5 md:w-[50%]'>
          {socialData.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                to={item.url}
                className='text-2xl text-dark hover:text-orange transition-all'
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
