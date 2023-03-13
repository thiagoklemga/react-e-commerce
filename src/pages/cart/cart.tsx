import { useAuth0 } from '@auth0/auth0-react';
import { ProductCard } from '../../components';
import { useCartStore } from '../../hooks';

export const Cart: React.FC = () => {
  const { user } = useAuth0();
  const cartData = useCartStore((state) => state.cartData);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-medium">
        Welcome back, {user?.given_name}!
      </h1>
      <h1 className="my-8 text-center text-5xl font-medium">Your Cart</h1>
      <div className="grid grid-cols-3 justify-items-center gap-4">
        {cartData.map((products) => (
          <ProductCard
            key={products.id}
            id={products.id}
            image={products.image}
            title={products.title}
            category={products.category}
            price={products.price}
            addCart={false}
          />
        ))}
      </div>
    </>
  );
};
