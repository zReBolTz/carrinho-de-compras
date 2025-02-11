import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full px-1  bg-slate-200">
      <nav className="w-full max-w-7xl flex justify-between h-14 items-center px-5 mx-auto">
        <Link to="/" className="font-bold text-2xl">
          <p>Dev Shop</p>
        </Link>

        <Link to="/cart" className="relative">
          <ShoppingCart />
          <span className="bg-blue-400  w-5 h-5 rounded absolute flex justify-center items-center -top-2 -right-2">
            1
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
