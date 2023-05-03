import { FC } from 'react';
import { TIcon } from './types';

const Icon: FC<TIcon> = ({ svgId, className }) => (
  <svg className={className}>
    <use href={`src/assets/sprite.svg#${svgId}`} />
  </svg>
);

export { Icon };
