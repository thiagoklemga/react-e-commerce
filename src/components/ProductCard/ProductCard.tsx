import { FC } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  image,
  title,
  category,
  price,
}) => {
  return (
    <div className="flex w-80 flex-col gap-3">
      <div className="flex h-96 items-center bg-white">
        <img className="mx-auto block max-h-full" src={image}></img>
      </div>
      <h1 className="truncate text-base font-semibold">{title}</h1>
      <div className="inline-flex justify-between">
        <p className="text-base font-normal">{category}</p>
        <p className="text-base font-semibold">{price}</p>
      </div>
    </div>
  );
};
