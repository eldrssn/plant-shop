import { SingUpForm } from './SingUpForm';

const JoinBox = () => (
  <section className='max-w-[300px] md:max-w-[350px] flex flex-col text-center m-auto pb-8 md:basis-1/3 md:order-1'>
    <h5 className='font-bold mb-4'>Join Patch</h5>
    <p className='text-sm mb-6'>
      Sign up for our free video course and urban garden inspiration
    </p>
    <SingUpForm />
  </section>
);

export { JoinBox };
