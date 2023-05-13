import { useWindowSize } from '@/hooks/useWindowSize';
import { CatalogMenuDesktop } from './CatalogMenuDesktop';
import { HeaderContextProvider } from './HeaderContext';
import { CatalogMenu } from './CatalogMenu';

const CatalogMenuMD = () => {
  const { isDesktop } = useWindowSize();

  return isDesktop ? (
    <CatalogMenuDesktop />
  ) : (
    <HeaderContextProvider>
      <CatalogMenu />
    </HeaderContextProvider>
  );
};

export { CatalogMenuMD };
