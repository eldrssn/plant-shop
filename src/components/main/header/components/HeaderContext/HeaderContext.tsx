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
  const [isOpenMobileMenu, openMobileMenu, closeMobileMenu] = useToggleMenu();
  const [isNav, setIsNav] = useState(isOpenMobileMenu);
  const [currentMenu, setCurrentMenu] = useState<TMenuItem[]>(catalog);
  const [, setLevel] = useState(0);

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
      setLevel((level) => level++);
      setCurrentMenu(item.children);
    },
    [toggleNav],
  );

  const isMainCategory = useMemo(
    () => currentMenu[0].type === MAIN_CATEGORY,
    [currentMenu],
  );

  useEffect(() => {
    toggleNav();

    return () => {
      setCurrentMenu(catalog);
    };
  }, [isOpenMobileMenu, toggleNav]);

  const value = useMemo(
    () => ({
      isOpenMobileMenu,
      openMobileMenu,
      closeMobileMenu,
      isNav,
      toggleNav,
      handleItemClick,
      currentMenu,
      isMainCategory,
    }),
    [
      isOpenMobileMenu,
      openMobileMenu,
      closeMobileMenu,
      isNav,
      handleItemClick,
      toggleNav,
      currentMenu,
      isMainCategory,
    ],
  );
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export { HeaderContextProvider };
