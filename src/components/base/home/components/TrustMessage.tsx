import { FC } from 'react';
import { TTrustMessage } from './types';

const TrustMessage: FC<TTrustMessage> = ({ icon, title, descriptions }) => (
  <li className='flex flex-col md:flex-row items-center md:items-start text-center md:text-start mb-12 px-4 md:basis-1/2 lg:basis-1/4'>
    <img
      src={icon}
      alt={title}
      width={30}
      height={30}
      className='mb-4 md:mr-4 md:mt-[6px] aspect-square'
    />

    <div className=''>
      <h4 className='mb-4 uppercase font-bold'>{title}</h4>
      <div className='text-sm gap-2 flex flex-col'>
        {descriptions.map((description, i) => (
          <p className='block' key={i}>
            {description}
          </p>
        ))}
      </div>
    </div>
  </li>
);

export { TrustMessage };
