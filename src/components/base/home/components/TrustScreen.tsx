import { trustMessages } from '@/content/trustMessages';
import { TrustMessage } from './TrustMessage';

const TrustScreen = () => (
  <section className='bg-zinc-50 pt-12'>
    <ul className='flex flex-col items-center md:items-start md:flex-row md:flex-wrap max-w-[1200px] m-auto'>
      {trustMessages.map((message) => (
        <TrustMessage key={message.id} {...message} />
      ))}
    </ul>
  </section>
);

export { TrustScreen };
