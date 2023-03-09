import { FC } from 'react';

import { Button } from '../index';

import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../../hooks';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  addCart: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  image,
  title,
  category,
  price,
  addCart,
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
          <div className="absolute bottom-0 flex h-10 w-full justify-between bg-gray-400 pr-4">
            {addCart ? (
              <Button
                icon={<PlusIcon className="h-10 w-10" />}
                className=" items-center text-xl font-bold text-white"
                onClick={handleClick}
              >
                Add Cart
              </Button>
            ) : (
              <>
                <Button
                  icon={<TrashIcon className="h-8 w-8" />}
                  className=" items-center text-xl font-bold text-white"
                  onClick={handleClick}
                >
                  Remove
                </Button>

                <Button
                  className=" items-center text-xl font-bold text-white"
                  onClick={handleClick}
                >
                  Buy
                </Button>
              </>
            )}
          </div>
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
