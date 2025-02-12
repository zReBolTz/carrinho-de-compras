import { createContext, ReactNode, useState } from "react";
import { productsProps } from "../pages/home";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (product: productsProps) => void;
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
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;
      setCart(cartList);
      return;
    }
    const data = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };
    setCart((product) => [...product, data]);
  }
  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length, addItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
