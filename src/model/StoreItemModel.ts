export type productItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

export interface ProductsProps {
  products: productItem;
}
