import { FC } from 'react';
import { TButtonIcon } from './types';

const ButtonIcon: FC<TButtonIcon> = ({ svgId }) => (
  <button className='p-3'>
    <svg className='w-[20px] h-[25px]'>
      <use href={`src/assets/sprite.svg#${svgId}`} />
    </svg>
  </button>
);

export { ButtonIcon };
