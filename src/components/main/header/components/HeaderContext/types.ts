import { TMenuItem } from '@/components/main/header/types';

export type THeaderContent = {
  isOpenMobileMenu: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  isNav: boolean;
  toggleNav: () => void;
  handleItemClick: (item: TMenuItem) => () => void;
  currentMenu: TMenuItem[];
  isMainCategory: boolean;
};
