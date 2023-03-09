import { create } from 'zustand';

type CartItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
};

type CartStore = {
  cartData: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartData: [],
  addToCart: (item: CartItem) => {
    set((state) => {
      if (state.cartData.find((cartItem) => cartItem.id === item.id)) {
        return state;
      }

      return {
        cartData: [...state.cartData, item],
      };
    });
  },
}));
