export enum OfferPositions {
  LEFT = 'left',
  RIGHT = 'right',
}

export type TOfferItem = {
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  image: string;
  position: OfferPositions;
  id: number;
};
