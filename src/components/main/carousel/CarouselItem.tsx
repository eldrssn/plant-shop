import { FC } from 'react';
import { TCarouselItem } from '@/types';
import { ButtonOptions } from './ButtonOptions';
import { ButtonToCart } from './ButtonToCart';

const CarouselItem: FC<TCarouselItem> = ({
  id,
  title,
  description,
  price,
  isOptions,
  img,
}) => (
  <article className='bg-transparent px-3'>
    <div className='border flex flex-col text-zinc-800'>
      <a href='/' className='overflow-hidden'>
        <img
          src={img}
          alt={title}
          className='aspect-square hover:scale-105 transition-transform duration-300'
        />
      </a>
      <div className='px-5 py-4 h-36 flex flex-col justify-between'>
        <a href='/' className='hover:text-teal-700 transition-colors'>
          <h3 className='font-bold text-xl pb-2'>{title}</h3>
          <p className='uppercase text-xs'>{description}</p>
        </a>

        <p>£{price}.00</p>
      </div>

      {isOptions ? <ButtonOptions href='#' /> : <ButtonToCart id={id} />}
    </div>
  </article>
);

export { CarouselItem };
