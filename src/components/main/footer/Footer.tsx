import { footerList } from '@/content/footer';
import { JoinBox } from './components/JoinBox';
import { FooterLinksList } from './components/FooterLinksList';
import { SocialLinksList } from './components/SocialLinksList';
import { Copyright } from './components/Copyright';

const Footer = () => (
  <footer className='bg-zinc-800 text-white p-12'>
    <div className='flex flex-col md:flex-row md:max-w-6xl m-auto'>
      <JoinBox />
      {footerList.map((list, index) => (
        <FooterLinksList key={list.id} {...list} order={index} />
      ))}
    </div>
    <SocialLinksList />
    <Copyright />
  </footer>
);

export { Footer };
