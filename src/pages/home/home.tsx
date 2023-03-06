import { useEffect, useState } from 'react';
import { ProductCard, RadioGroup, Select } from '../../components';

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
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const [products, setProducts] = useState<ProductsResponseProps>([]);

  const categoryOptions = [
    { value: '', label: 'All' },
    ...categories.map((category: string) => ({
      value: `/category/${encodeURIComponent(category)}`,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })),
  ];

  const sortOptions = [
    { value: '', label: 'Accending' },
    { value: 'sort=desc', label: 'Descending' },
  ];

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products${category}?${sort}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category, sort]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  console.log(products, sort);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-medium">Products</h1>
      <div className="flex justify-between p-8">
        <RadioGroup
          value={category}
          onChange={setCategory}
          options={categoryOptions}
          className="inline-flex justify-center gap-4 "
        />
        <Select
          options={sortOptions}
          onChange={(e) => setSort(e.target.value)}
        />
      </div>
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
