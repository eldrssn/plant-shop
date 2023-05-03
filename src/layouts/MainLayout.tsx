import { FC } from 'react';

import { Header } from '@components/main/header';
import { Footer } from '@/components/main/footer';
import { Children } from '@/types';

const MainLayout: FC<Children> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export { MainLayout };
