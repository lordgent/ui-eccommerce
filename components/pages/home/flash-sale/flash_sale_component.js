import React from "react";

const FlashSaleComponent = ({ promo }) => {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
      {promo.length > 0 &&
        promo.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-2 p-4 rounded h-[500px]"
            style={{
              backgroundImage: item.bg ? `url(${item.bg})` : 'url(/default-bg.jpg)', // Fallback background
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <p className="text-white text-[17px]">{item.slogan}</p>
            <div>
              <p className="text-white text-[32px] font-bold">{item.name}</p>
            </div>

            <div>
         
            {item.category === "price" && (
                <p className="text-white text-[30px] text-lg font-semibold">
                  {item.value.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                </p>
              )}
              {item.category === "percentage" && (
                <p className="text-white text-[30px] text-lg font-semibold">
                  Up to {item.value}% OFF
                </p>
              )}
            </div>
            <br />
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
              Shop Now
            </button>
          </div>
        ))}
    </div>
  );
};

export default FlashSaleComponent;
