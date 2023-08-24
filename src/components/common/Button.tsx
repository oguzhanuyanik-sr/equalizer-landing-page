import { Link } from 'react-router-dom';
import { Ios, Android } from '../../utils/constants';

const Button = ({ platform }: string) => {
  const isAndroid = platform === 'android';

  return (
    <Link
      className={`rounded-xl flex justify-center items-center py-5 gap-3 text-body-1 font-bold transition-all ${
        isAndroid
          ? 'bg-white text-dark hover:bg-lightOrange hover:text-dark'
          : 'bg-dark text-white mb-4 hover:bg-blue hover:text-white'
      }`}
      to='/'
    >
      <img src={isAndroid ? Android : Ios} alt='Mobile App' />
      <p className='capitalize'>{isAndroid ? 'Android' : 'iOS'} Download</p>
    </Link>
  );
};

export default Button;
