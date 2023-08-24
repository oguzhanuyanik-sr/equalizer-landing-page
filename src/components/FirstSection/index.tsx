import Logo from '../common/Logo';

const FirstSection = () => {
  return (
    <div className='bg-first-section relative pt-10 px-6'>
      <Logo />
      <div className='mt-16'>
        <h1 className='text-heading-2 mb-5'>
          We make your music sound extraordinary.
        </h1>
        <p className='text-body-1'>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
