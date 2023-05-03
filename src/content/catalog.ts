import { TMenuItem } from '@/components/main/header/types';

export const catalog: TMenuItem[] = [
  {
    title: 'Plants',
    type: 'main',
    children: [
      { title: 'All plants' },
      { title: 'Indoor plants' },
      { title: 'Outdoor plants' },
      { title: 'New in' },
      { title: 'Plant bundles' },
      { title: 'Seed & bulbs' },
    ],
  },
  {
    title: 'Pots',
    type: 'main',
    children: [
      { title: 'All pots' },
      { title: 'Indoor pots' },
      { title: 'Outdoor pots' },
    ],
  },
  {
    title: 'Plant care',
    type: 'main',
    children: [
      { title: 'All plant care' },
      { title: 'Tools & accessories' },
      { title: 'Indoor plant care' },
      { title: 'Outdoor plant care' },
      { title: 'As the plant doctor' },
    ],
  },
  {
    title: 'Businesses',
    type: 'main',
    children: [
      { title: 'All businesses' },
      { title: 'Commercial offices' },
      { title: 'Corporate gifting' },
      { title: 'Home office' },
    ],
  },
  {
    title: 'Gifts',
    type: 'main',
    children: [
      { title: 'All gifts' },
      { title: 'Most popular gifts' },
      { title: 'Take the gifting quiz' },
      { title: 'Gift vouchers' },
    ],
  },
];
