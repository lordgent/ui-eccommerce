import React from "react";

const PopUpAddCart = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
        <div className="bg-green-400 text-white text-sm py-2 px-4 rounded-full">
             Berhasil menambahkan ke keranjang
        </div>
  </div>
  );
};

export default PopUpAddCart;
