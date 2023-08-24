import { Phone, MobilePattern } from '../../utils/constants';
import Description from './Description';

const AppSection = () => {
  return (
    <div className='md:mb-[220px] lg:mx-36'>
      <div className='flex flex-col items-center md:container md:pb-[100px] relative rounded-xl bg-dark'>
        <img className='absolute' src={MobilePattern} alt='Pattern' />
        <img
          className='h-[430px] w-[208px] md:h-[556px] md:w-[270px] mt-[-100px] mb-12 md:ml-[-300px] z-10'
          src={Phone}
          alt='Phone'
        />
        <Description />
      </div>
    </div>
  );
};

export default AppSection;
