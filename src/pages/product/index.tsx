import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { productsProps } from "../home";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../context/cartContext";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<productsProps>();
  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    getProduct();
  }, []);
  return (
    <div>
      <main className="w-full max-w-7xl mx-auto px-4 my-6">
        {product && (
          <div className="flex flex-col lg:flex-row">
            <img src={product.image} className="w-100" />
            <div className="flex-1 w-full max-h-72 object-contain mx-6">
              <p className="font-bold mt-4 mb-2 text-2xl">{product.title}</p>
              <p className="my-4">{product.description}</p>
              <strong className="text-zinc-700/90 text-xl">
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </strong>
              <button
                className="bg-zinc-900 rounded p-1 cursor-pointer mx-3"
                onClick={() => addItemCart(product)}
              >
                <ShoppingCart size={20} color="#fff " />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Product;
