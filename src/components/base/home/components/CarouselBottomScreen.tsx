import { CarouselScreenTemplate } from '@/components/main/carouselScreenTemplate';
import { carouselBottom } from '@/content/carousel';

const CarouselBottomScreen = () => (
  <CarouselScreenTemplate
    header='Patch’s top 20'
    description='Discover and shop our most popular plants, pots and accessories.'
    carouselList={carouselBottom}
  />
);

export { CarouselBottomScreen };
