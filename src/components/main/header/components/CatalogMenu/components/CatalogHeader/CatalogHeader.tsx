import { useContext } from 'react';

import { CloseMenuButton } from '@/components/ui/CloseMenuButton';
import { LogoIcon } from '@/components/ui/Icons/LogoIcon';
import { ArrowBackIcon } from '@/components/ui/Icons/ArrowBackIcon';
import { HeaderContext } from '@/components/main/header/components/HeaderContext';

const CatalogHeader = () => {
  const { closeMobileMenu, isMainCategory } = useContext(HeaderContext);

  return (
    <div className='flex flex-row justify-between py-5 px-8'>
      {!isMainCategory ? (
        <button
          onClick={() => {
            console.log('back');
          }}
        >
          <ArrowBackIcon />
        </button>
      ) : (
        <LogoIcon />
      )}
      <CloseMenuButton onClick={closeMobileMenu} />
    </div>
  );
};

export { CatalogHeader };
