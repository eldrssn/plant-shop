import { socialLinksList } from '@/content/footer';

const SocialLinksList = () => (
  <ul className='w-fit m-auto pt-4'>
    {socialLinksList.map(({ title, link, id, Icon }) => (
      <li className='inline-block m-auto p-2' key={id}>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='m-auto fill-white'
        >
          <span className='hidden'>{title}</span>
          <Icon />
        </a>
      </li>
    ))}
  </ul>
);

export { SocialLinksList };
