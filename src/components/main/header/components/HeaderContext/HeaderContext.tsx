import {
  FC,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { MAIN_CATEGORY } from '@/constants/header';
import { useToggleMenu } from '@/hooks/useToggleMenu';
import { catalog } from '@/content/catalog';
import { Children } from '@/types';
import { TMenuItem } from '@/components/main/header/types';

import { THeaderContent } from './types';

export const HeaderContext = createContext<THeaderContent>({
  isOpenMobileMenu: false,
  openMobileMenu: () => undefined,
  closeMobileMenu: () => undefined,
  isNav: false,
  toggleNav: () => undefined,
  handleItemClick: () => () => undefined,
  currentMenu: [],
  isMainCategory: false,
});

//TODO: finalize & refactor

const HeaderContextProvider: FC<Children> = ({ children }) => {
  const {
    isOpen: isOpenMobileMenu,
    openMenu: openMobileMenu,
    closeMenu: closeMobileMenu,
  } = useToggleMenu();
  const [isNav, setIsNav] = useState(isOpenMobileMenu);
  const [currentMenu, setCurrentMenu] = useState<TMenuItem[]>(catalog);
  // const [parentTitle, setParentTitle] = useState('');
  // const [, setLevel] = useState(0);
  const [menuLevel, setMenuLevel] = useState<number>(0);

  const handleMenuItemClick = (index: number) => {
    setMenuLevel(index);
  };

  const handleBackClick = () => {
    setMenuLevel((prev) => prev - 1);
  };
  const toggleNav = useCallback(() => setIsNav((isNav) => !isNav), [setIsNav]);

  const handleItemClick = useCallback(
    (item: TMenuItem) => () => {
      if (!item.children) {
        return;
      }
      toggleNav();
      setTimeout(() => {
        toggleNav();
      });
      setMenuLevel((level) => level + 1);
      setCurrentMenu(item.children);
      // setParentTitle(item.title);
    },
    [toggleNav],
  );

  // const isMainCategory = useMemo(
  //   () => currentMenu[0].type === MAIN_CATEGORY,
  //   [currentMenu],
  // );

  useEffect(() => {
    toggleNav();

    return () => {
      setCurrentMenu(catalog);
    };
  }, [isOpenMobileMenu, toggleNav]);

  const value = {
    isOpenMobileMenu,
    openMobileMenu,
    closeMobileMenu,
    isNav,
    toggleNav,
    handleItemClick,
    currentMenu,
    // isMainCategory,
    handleBackClick,
  };
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export { HeaderContextProvider };
