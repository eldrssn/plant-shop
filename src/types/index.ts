import { ReactNode } from 'react';

export type Children = { children: ReactNode };

export type TButton = Children & {
  href?: string;
};

export type TOnClick = { onClick: () => void };
