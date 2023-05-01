import { buttonIcons } from '@/constants/header';
import { LogoIcon } from '@/components/ui/Icons/LogoIcon';
import { ButtonIcon } from '@/components/ui/ButtonIcon/ButtonIcon';

import { CatalogMenu } from './components/CatalogMenu';
import { HeaderContextProvider } from './components/HeaderContext';

const Header = () => (
  <header className='h-16 w-full sticky top-0 bg-white/80 z-10'>
    <div className='max-w-[1690px] w-full flex flex-row items-center m-auto h-full'>
      <HeaderContextProvider>
        <CatalogMenu />
      </HeaderContextProvider>

      <div className='flex-1 w-1/3 flex justify-center'>
        <LogoIcon />
      </div>

      <div className='flex-1 w-1/3'>
        <div className='float-right clear-both flex flex-row pr-4'>
          {buttonIcons.map(({ svgId }) => (
            <ButtonIcon key={svgId} svgId={svgId} />
          ))}
        </div>
      </div>
    </div>
  </header>
);

export { Header };
