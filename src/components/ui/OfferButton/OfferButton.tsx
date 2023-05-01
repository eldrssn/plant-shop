import { FC } from 'react';
import { TButton } from '@/types';

const OfferButton: FC<TButton> = ({ href = '/', children }) => (
  <a
    href={href}
    className='text-white bg-teal-700 border font-bold py-4 px-20 block max-w-[280px] ease-in-out transition-colors duration-300
    hover:bg-teal-700/80 text-center md:max-w-[300px]'
  >
    {children}
  </a>
);

export { OfferButton };
