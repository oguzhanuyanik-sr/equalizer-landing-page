import { TabletPattern } from '../../utils/constants';
import Logo from '../common/Logo';

const FirstSection = () => {
  return (
    <div className='container relative pt-10 px-6 pb-[164px]'>
      <Logo />
      <div className='mt-8 md:mt-16'>
        <h1 className='font-bold text-[40px] md:text-[88px] leading-[52px] md:leading-[88px] md:tracking-[-1px] mb-5 md:mb-7 md:max-w-[70%]'>
          We make your music sound extraordinary.
        </h1>
        <p className='text-xl leading-[34px] md:max-w-[70%]'>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
      <img
        className='hidden md:block absolute right-[-50px] top-[-50px]'
        src={TabletPattern}
        alt='Pattern'
      />
    </div>
  );
};

export default FirstSection;
