import { useState } from 'react';

export const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return [isOpen, openMenu, closeMenu];
};
