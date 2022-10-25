export type Image = {
  src: string;
  alt: string;
};

export interface CoffeCardProps {
  id?: number;
  img: Image;
  coffeType: string;
  title: string;
  description: string;
  price: 9.9;
}
