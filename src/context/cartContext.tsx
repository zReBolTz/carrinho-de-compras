import { createContext, ReactNode, useState } from "react";
import { productsProps } from "../pages/home";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newProduct: productsProps) => void;
  removeItemCart: (product: CartProps) => void;
}

interface CartProps {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
  total: number;
}

export const CartContext = createContext({} as CartContextData);

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItemCart(newProduct: productsProps) {
    const indexItem = cart.findIndex((item) => item.id === newProduct.id);
    if (indexItem !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === indexItem) {
          return {
            ...item,
            amount: item.amount + 1,
            total: (item.amount + 1) * item.price,
          };
        }
        return item;
      });

      setCart(updatedCart);
      return;
    }
    const data = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };
    setCart((product) => [...product, data]);
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);
    if (indexItem !== -1 && cart[indexItem]?.amount > 1) {
      const updateCart = cart.map((itemProduct, index) => {
        if (index === indexItem) {
          return {
            ...itemProduct,
            amount: itemProduct.amount - 1,
            total: itemProduct.total - itemProduct.price,
          };
        }
        return itemProduct;
      });
      setCart(updateCart);
      return;
    }
    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
  }
  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length, addItemCart, removeItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
