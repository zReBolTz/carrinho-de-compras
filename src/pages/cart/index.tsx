const Cart = () => {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <h1 className="font-bold text-2xl text-center my-4">Meu Carrinho</h1>
      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="https://down-tw.img.susercontent.com/file/tw-11134207-7rasg-m46uqw7b1lds07"
          alt="Logo Produto"
          className="w-28"
        />
        <strong>R$ 1.500,00</strong>

        <div className="flex gap-3 items-center justify-center">
          <button className="px-2 bg-slate-600 text-white rounded font-meidum flex items-center justify-center">
            -
          </button>
          1
          <button className="px-2 bg-slate-600 text-white rounded font-meidum flex items-center justify-center">
            +
          </button>
        </div>
        <strong>SubTotal: 1.500,00</strong>
      </section>
      <p className="font-bold mt-4">Total: R$1.500,00</p>
    </div>
  );
};

export default Cart;
