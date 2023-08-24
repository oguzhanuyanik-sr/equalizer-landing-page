import { Phone, MobilePattern } from '../../utils/constants';
import Description from './Description';

type Props = {};

const AppSection = (props: Props) => {
  return (
    <div className='md:mb-[220px] lg:mx-36'>
      <div className='flex flex-col items-center bg-dark md:container relative rounded-xl md:pb-[100px] '>
        <img className='absolute' src={MobilePattern} alt='Pattern' />
        <img
          className='h-[430px] w-[208px] md:h-[556px] md:w-[270px] z-10 mt-[-100px] md:ml-[-300px] mb-12'
          src={Phone}
          alt='Phone'
        />
        <Description />
      </div>
    </div>
  );
};

export default AppSection;
