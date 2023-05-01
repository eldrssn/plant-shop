import { FC } from 'react';
import { TOnClick } from '@/types';

const CloseMenuButton: FC<TOnClick> = ({ onClick }) => (
  <button type='button' onClick={onClick}>
    <span
      className='h-4 relative w-4 
      before:bg-black before:h-[2px] before:right-0 before:absolute before:top-0 before:w-5 before:rotate-45 
      after:bg-black after:h-[2px] after:right-0 after:absolute after:top-0 after:w-5 after:-rotate-45 
      '
    />
  </button>
);

export { CloseMenuButton };