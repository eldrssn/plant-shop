import { CarouselScreenTemplate } from '@/components/main/carouselScreenTemplate';
import { carouselTop } from '@/content/carousel';

const CarouselTopScreen = () => (
  <CarouselScreenTemplate
    header='Shop the look'
    description='We’ve made it easy for you to bring your home to life with plants and pots.'
    carouselList={carouselTop}
  />
);

export { CarouselTopScreen };
