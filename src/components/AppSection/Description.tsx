import Button from '../common/Button';

const Description = () => {
  return (
    <div className='bg-orange text-white z-10 rounded-xl py-[52px] md:py-6 md:px-8 px-9 md:max-w-[400px] md:absolute md:bottom-[-150px] md:ml-[150px]'>
      <h2 className='text-[40px] leading-[52px] font-bold mb-3'>Premium EQ</h2>
      <p className='text-lg leading-[28px] mb-6 md:mb-0'>
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <p className='leading-[88px] tracking-[-1px] font-bold text-[52px] mb-8 md:mb-0'>
        $4<span className='text-xl leading-[34px] font-normal'> / month</span>
      </p>
      <Button platform='ios' />
      <Button platform='android' />
    </div>
  );
};

export default Description;
