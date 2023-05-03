import { OfferItem } from '@/components/ui/OfferItem/OfferItem';
import { FC } from 'react';
import { TOfferScreen } from './types';

const OfferScreen: FC<TOfferScreen> = ({ offers }) => (
  <section className='bg-zinc-50 max-w-[75rem] m-auto'>
    {offers.map((item) => (
      <OfferItem key={item.id} {...item} />
    ))}
  </section>
);

export { OfferScreen };
