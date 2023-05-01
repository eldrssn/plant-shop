import { OfferPositions, TOfferItem } from './types';

export const offers: TOfferItem[] = [
  {
    title: 'Outdoor plants',
    description:
      'Spring is here. Choose from our easy outdoor range and turn that sun spot into a leafy paradise.',
    buttonText: 'Shop outdoor',
    image: 'src/assets/pictures/Outdoor_23-min.jpg',
    position: OfferPositions.LEFT,
    id: 1,
  },
  {
    title: 'Plants for your business',
    description:
      'From creating an office jungle to sending an unusual gift, there’s plenty of ways to turn your workplace green.',
    buttonText: 'Get in touch',
    image: 'src/assets/pictures/Jan_23_B2B-min.jpg',
    position: OfferPositions.RIGHT,
    id: 2,
  },
];
