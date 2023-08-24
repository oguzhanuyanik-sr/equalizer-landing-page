import { Phone, AppBackground } from '../../utils/constants';
import Description from './Description';

type Props = {};

const AppSection = (props: Props) => {
  return (
    <div className='flex flex-col items-center bg-dark relative mt-[164px] rounded-xl'>
      <img className='absolute' src={AppBackground} alt='Pattern' />
      <img
        className='h-[430px] w-[208px] z-10 mt-[-100px] mb-12'
        src={Phone}
        alt='Phone'
      />
      <Description />
    </div>
  );
};

export default AppSection;
