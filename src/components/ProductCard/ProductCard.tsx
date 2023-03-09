import { FC } from 'react';

import { Button } from '../index';

import { PlusIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../../hooks';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  image,
  title,
  category,
  price,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    const product = {
      id,
      image,
      title,
      category,
      price,
    };

    addToCart(product);
  };

  return (
    <div className="flex w-80 flex-col gap-3">
      <div className="relative flex h-96 items-center bg-white">
        <img className="mx-auto block max-h-full" src={image} />
        <div className="absolute inset-0 opacity-0 hover:opacity-75">
          <Button
            icon={<PlusIcon className="h-10 w-10" />}
            className="absolute bottom-0 h-10 w-full items-center bg-gray-400 text-xl font-bold text-white"
            onClick={handleClick}
          >
            Add Cart
          </Button>
        </div>
      </div>
      <h1 className="truncate text-base font-semibold">{title}</h1>
      <div className="inline-flex justify-between">
        <p className="text-base font-normal">{category}</p>
        <p className="text-base font-semibold">{price}</p>
      </div>
    </div>
  );
};
