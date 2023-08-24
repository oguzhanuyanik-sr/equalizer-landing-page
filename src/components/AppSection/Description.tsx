import Button from '../common/Button';

type Props = {};

const Description = (props: Props) => {
  return (
    <div className='bg-orange text-white z-10 rounded-xl py-[52px] px-9'>
      <h2 className='text-heading-2 mb-3'>Premium EQ</h2>
      <p className='text-body-2 mb-6'>
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <p className='text-heading-1 text-[52px] mb-8'>
        $4<span className='text-body-1 font-normal'> / month</span>
      </p>
      <Button platform='ios' />
      <Button platform='android' />
    </div>
  );
};

export default Description;
