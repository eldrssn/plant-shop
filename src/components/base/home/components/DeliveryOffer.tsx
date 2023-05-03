const DeliveryOffer = () => (
  <section className='bg-stone-200 p-6'>
    <div className='bg-stone-200 text-center flex flex-col lg:flex-row justify-center items-center gap-5'>
      <div>
        <img
          src='src/assets/svg/delivery-van.svg'
          alt='delivery van'
          className='w-32'
        />
      </div>
      <p className='font-bold text-xl md:text-3xl'>
        Free standard delivery on orders over £50
      </p>
    </div>
  </section>
);

export { DeliveryOffer };
