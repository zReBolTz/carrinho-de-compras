import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cart, removeItemCart, addItemCart } = useContext(CartContext);
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <h1 className="font-bold text-2xl text-center my-4">Meu Carrinho</h1>
      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-gray-300"
        >
          <img src={item.image} alt="Logo Produto" className="w-28" />
          <strong>
            {item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>

          <div className="flex gap-3 items-center justify-center">
            <button
              className="px-2 bg-slate-600 text-white rounded font-meidum flex items-center justify-center cursor-pointer"
              onClick={() => removeItemCart(item)}
            >
              -
            </button>
            {item.amount}
            <button
              className="px-2 bg-slate-600 text-white rounded font-meidum flex items-center justify-center cursor-pointer"
              onClick={() => addItemCart(item)}
            >
              +
            </button>
          </div>
          <strong>
            SubTotal:{" "}
            {item.total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </section>
      ))}
      <p className="font-bold mt-4">Total: R$1.500,00</p>
    </div>
  );
};

export default Cart;
