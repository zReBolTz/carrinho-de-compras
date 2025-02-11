import { ShoppingCart } from "lucide-react";

const Home = () => {
  return (
    <div>
      <main className="w-full max-w-7xl mx-auto px-4 ">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em Alta
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full">
            <img
              src="https://m.media-amazon.com/images/I/416ZUxb5TiL._AC_UF1000,1000_QL80_.jpg"
              alt="Logo Produto"
              className="w-full rounded-lg max-h-70 mb-2"
            />
            <p className="font-medium mt-1 mb-2">AirPods (3.ª geração)</p>
            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">R$ 1.500,00</strong>
              <span className="bg-zinc-900 rounded p-1">
                <ShoppingCart size={20} color="#fff" />
              </span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
