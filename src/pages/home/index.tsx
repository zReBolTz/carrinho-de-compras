import { ShoppingCart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export interface productsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Home = () => {
  const [products, setProducts] = useState<productsProps[]>([]);

  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get("/products");

      const productData = response.data.map((product: any) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }));

      setProducts(productData);
    }

    getProduct();
  }, []);
  return (
    <div>
      <main className="w-full max-w-7xl mx-auto px-4 ">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em Alta
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <Link to={`/product/${product.id}`}>
              <section className="w-full" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-h-70  rounded-lg mb-2"
                />

                <p className="font-medium mt-1 mb-2">{product.title}</p>
                <div className="flex gap-3 items-center">
                  <strong className="text-zinc-700/90">
                    {product.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </strong>
                  <span
                    className="bg-zinc-900 rounded p-1 cursor-pointer"
                    onClick={() => addItemCart(product)}
                  >
                    <ShoppingCart size={20} color="#fff" />
                  </span>
                </div>
              </section>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
