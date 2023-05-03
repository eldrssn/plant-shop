import { getCurrentYear } from '@/utility';

const Copyright = () => (
  <p className='text-sm text-center p-6 '>
    © {getCurrentYear()} Maxim Kalumullin
  </p>
);

export { Copyright };
