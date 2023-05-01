import { PromiseItem } from './PromiseItem';
import { promises } from './constants';

const PromiseScreen = () => (
  <section>
    <div className='max-w-[1180px] mx-auto my-24'>
      <h2 className='text-center m-6 mb-10 text-5xl font-bold'>Why Patch?</h2>
      <ul className='flex flex-col gap-y-5 px-6 text-center md:flex-row md:gap-x-10'>
        {promises.map((item) => (
          <PromiseItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  </section>
);

export { PromiseScreen };
