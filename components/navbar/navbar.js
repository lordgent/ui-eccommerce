import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = ({ cartTotal, totalPrice }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="h-auto py-4 border-b border-gray-200">
      <div className="w-full px-4 md:px-10 flex items-center gap-2 justify-between text-center md:justify-start">
        <img src="/icons/map.svg" alt="maps" className="h-4" />
        <p className="text-[12px] text-gray-600">
          Lokasi Toko: Lincoln-344, Illinois, Chicago, USA
        </p>
      </div>

      <div className="w-full px-4 md:px-10 flex flex-col md:flex-row items-center justify-between mt-4">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-10 md:h-12 mb-4 md:mb-0"
          />
        </Link>

        <div className="w-full md:w-[400px] flex items-center border border-gray-300 p-2 rounded mb-4 md:mb-0">
          <img src="/icons/Search.svg" alt="ico-search" className="h-4" />
          <input
            type="text"
            placeholder="Cari"
            className="w-full focus:outline-none text-sm px-2"
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/icons/Heart.svg"
            alt="ico-like"
            className="h-6 cursor-pointer"
          />

          <div className="hidden md:block border-l border-gray-300 h-6"></div>

          <div className="flex items-center gap-2">
            <Link href="/cart">
              <div className="relative flex items-center">
                <img src="/icons/Bag.svg" alt="ico-bag" />
                {cartTotal > 0 && (
                  <div className="absolute top-0 right-0 bg-green-400 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                    {cartTotal}
                  </div>
                )}
              </div>
            </Link>

            <div>
              <p className="text-[12px] text-gray-600">Keranjang belanja:</p>
              <p className="text-[12px] text-gray-900 font-semibold">${totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
