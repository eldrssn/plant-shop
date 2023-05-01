import { TMenuItem } from '@/components/main/header/types';

export type TCatalogItem = TMenuItem & {
  onClick: () => void;
};
