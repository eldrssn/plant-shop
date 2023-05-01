import { MobileMenuButton } from '@/components/ui/MobileMenuButton/MobileMenuButton';

import { CatalogHeader } from './components/CatalogHeader';
import { CatalogList } from './components/CatalogList';
import { useContext } from 'react';
import { HeaderContext } from '../HeaderContext';

import clsx from 'clsx';

const CatalogMenu = () => {
  const { isOpenMobileMenu, openMobileMenu, closeMobileMenu } =
    useContext(HeaderContext);

  return (
    <>
      <div className='flex-1 w-1/3 h-4'>
        <MobileMenuButton onClick={openMobileMenu} />
      </div>

      {isOpenMobileMenu && (
        <div
          onClick={closeMobileMenu}
          className={
            'absolute w-full h-screen left-0 top-0 bg-black opacity-25 transition-opacity z-9'
          }
        />
      )}

      <nav
        className={clsx(
          'absolute left-0 top-0 max-w-[700px] w-full h-screen bg-backSecond opacity-100 duration-200 transition-transform -translate-x-full',
          {
            'translate-x-0': isOpenMobileMenu,
          },
        )}
      >
        <CatalogHeader />
        <CatalogList />
      </nav>
    </>
  );
};

export { CatalogMenu };
