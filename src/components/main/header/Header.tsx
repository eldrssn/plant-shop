import { buttonIcons } from '@/constants/header';
import { LogoIcon } from '@/components/ui/Icons/LogoIcon';
import { Icon } from '@/components/ui/ButtonIcon/Icon';

import { CatalogMenuMD } from './components/CatalogMenuMD';

const Header = () => (
  <header className='h-16 w-full sticky top-0 bg-white/80 z-10 lg:h-20'>
    <div className='max-w-[75rem] w-full flex flex-row items-center m-auto h-full'>
      <CatalogMenuMD />

      <div className='flex-1 w-1/3 lg:flex-none lg:w-auto flex justify-center lg:-order-1 lg:justify-start lg:px-2'>
        <LogoIcon />
      </div>

      <div className='flex-1 w-1/3 '>
        <div className='float-right clear-both flex flex-row pr-4'>
          {buttonIcons.map(({ svgId }) => (
            <button className='p-3' key={svgId}>
              <Icon className='w-[20px] h-[25px]' svgId={svgId} />
            </button>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export { Header };
