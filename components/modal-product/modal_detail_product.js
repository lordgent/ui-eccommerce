import React from "react";
import { addToCart } from '../../store/reducers/cart_action'
import {useDispatch } from 'react-redux';
import PopUpAddCart from "../pop-up-cart/pop_up_cart";

const ModalDetailProduct = ({ show, item, handleClose }) => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch()
  const [showPopup, setShowPopup] = React.useState(false);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...item,
        qty: quantity,
        total: (item.price * quantity).toFixed(2)
      })
    );
      setShowPopup(true); 
      setTimeout(() => setShowPopup(false), 2000);
  }

  return (
    show && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
   
      >
        <div
          className="bg-white w-full md:w-1/2 h-auto p-6 rounded-lg flex justify-between relative"
          onClick={(e) => e.stopPropagation()} 
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
          >
            <img src="/icons/close-dark.svg" alt="Close" className="h-6 w-6" />
          </button>

          <div className="flex w-1/2 items-center justify-center">
            <img
              className="w-full h-auto object-cover border border-green-400"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="w-1/2 px-4">
            <p className="text-xl font-semibold">{item.name}</p>
            <div className="flex items-center text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < Math.floor(item.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  className="w-[10px] h-[10px]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.429 8.209 1.193-5.938 5.787 1.399 8.168-7.338-3.859-7.338 3.859 1.399-8.168-5.938-5.787 8.209-1.193z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600 text-sm">({item.rating})</span>
            </div>
            <p className="text-gray-600 text-xl mt-1">${item.price.toFixed(2)}</p>
            <p className="text-[11px] text-gray-400 overflow-auto max-h-40 mt-2">
              {item.description}
            </p>

            <div className="flex w-full justify-between my-4">
              <p>Total</p>
              <p className="text-sm font-semibold">
                ${(item.price * quantity).toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-4 sm:gap-6 justify-between md:items-center border-b py-4">

              <div className="flex items-center">
                <button
                  onClick={handleDecrease}
                  className="bg-gray-200 text-xl w-8 h-8 rounded-l"
                >
                  -
                </button>
                <span className="mx-2 text-sm">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="bg-gray-200 text-xl w-8 h-8 rounded-r"
                >
                  +
                </button>
              </div>
              <button onClick={handleAddToCart} className="w-full text-white py-2 px-4 rounded bg-green-400 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {showPopup && (
          <PopUpAddCart/>
        )}
      </div>
    )
  );
};

export default ModalDetailProduct;
