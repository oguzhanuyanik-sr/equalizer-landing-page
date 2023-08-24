import { Link } from 'react-router-dom';
import { Ios, Android } from '../../utils/constants';

const Button = ({ platform }: { platform: string }) => {
  const isAndroid = platform === 'android';

  return (
    <Link
      className={`flex justify-center items-center py-5 font-bold text-xl md:text-[18px] leading-[34px] px-2 rounded-xl transition-all ${
        isAndroid
          ? 'bg-white text-dark hover:bg-lightOrange hover:text-dark'
          : 'bg-dark text-white mb-4 hover:bg-blue hover:text-white'
      }`}
      to='/'
    >
      <img src={isAndroid ? Android : Ios} alt='Mobile App' />
      <p className='pl-2'>{isAndroid ? 'Android' : 'iOS'} Download</p>
    </Link>
  );
};

export default Button;
