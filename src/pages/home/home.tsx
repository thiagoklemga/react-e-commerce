import { useEffect, useState } from 'react';
import { ProductCard, RadioGroup } from '../../components';

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
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState<ProductsResponseProps>([]);

  const categoryOptions = [
    { value: '', label: 'All' },
    { value: 'category/electronics', label: 'Eletronics' },
    { value: 'category/jewelery', label: 'Jewelery' },
    { value: `category/men's%20clothing`, label: 'Mens clothing' },
    { value: `category/women's%20clothing`, label: 'Womens clothing' },
  ];

  console.log(category);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category]);

  console.log(products);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-medium">Products</h1>
      <RadioGroup
        value={category}
        onChange={setCategory}
        options={categoryOptions}
        className="inline-flex justify-center gap-4 pl-8 pb-8"
      />
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
