import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header className="w-full px-1  bg-slate-200">
      <nav className="w-full max-w-7xl flex justify-between h-14 items-center px-5 mx-auto">
        <Link to="/" className="font-bold text-2xl">
          <p>Dev Shop</p>
        </Link>

        <Link to="/cart" className="relative">
          <ShoppingCart />
          {cart.length > 0 && (
            <span className="bg-blue-400  w-5 h-5 rounded absolute flex justify-center items-center -top-2 -right-2">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
