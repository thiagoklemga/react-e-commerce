import { useEffect, useState } from 'react';
import { ProductCard } from '../../components';

type ProductsResponseProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}[];

export const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductsResponseProps>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  console.log(products);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-medium">Products</h1>
      <div className="grid grid-cols-3 justify-items-center gap-4">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};
