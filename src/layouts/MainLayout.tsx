import { FC } from 'react';

import { Header } from '@components/main/header';
import { Children } from '@/types';

const MainLayout: FC<Children> = ({ children }) => (
  <body className='text-base'>
    <Header />
    {children}
  </body>
);

export { MainLayout };
