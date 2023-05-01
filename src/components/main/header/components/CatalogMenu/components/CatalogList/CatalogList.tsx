import { useContext } from 'react';

import { WithTransitionMenu } from '@/hocs/WithTransitionMenu';
import { HeaderContext } from '@/components/main/header/components/HeaderContext';

import { CatalogItem } from '../CatalogItem';
import { getDefaultStyles, transitionStyles } from './constants';

const CatalogList = () => {
  const { isNav, currentMenu, handleItemClick } = useContext(HeaderContext);

  return (
    <ul className='w-full mt-8'>
      {currentMenu.map((item, index) => (
        <WithTransitionMenu
          key={item.title}
          style={{
            defaultStyle: getDefaultStyles(++index),
            transitionStyles,
          }}
          isOpen={isNav}
        >
          <CatalogItem {...item} onClick={handleItemClick(item)} />
        </WithTransitionMenu>
      ))}
    </ul>
  );
};

export { CatalogList };
