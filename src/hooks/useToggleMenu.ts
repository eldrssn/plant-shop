import { useState } from 'react';

export const useToggleMenu = (): {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
} => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log('isOpen', isOpen);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return { isOpen, openMenu, closeMenu };
};
