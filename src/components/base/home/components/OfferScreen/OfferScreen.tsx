import { OfferItem } from './OfferItem';
import { offers } from './contants';

const OfferScreen = () => (
  <section className='bg-zinc-50 max-w-[75rem] m-auto'>
    {offers.map((item) => (
      <OfferItem key={item.id} {...item} />
    ))}
  </section>
);

export { OfferScreen };
