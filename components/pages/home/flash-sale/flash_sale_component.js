import React, { useState, useEffect } from "react";

const FlashSaleComponent = ({ promo }) => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
      {promo.length > 0 &&
        promo.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-2 p-4 rounded h-[500px]"
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <p className="text-white text-[17px]">{item.slogan}</p>
            <div>
              <p className="text-white text-[32px] font-bold">{item.name}</p>
            </div>

            <div>
              {item.category === "time" && currentTime && (
                <p className="text-white text-[30px] text-lg font-semibold">
                  {formatTime(currentTime)}
                </p>
              )}
              {item.category === "price" && (
                <p className="text-white text-[30px] text-lg font-semibold">
                  Rp.{item.value.toLocaleString("id-ID")}
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
