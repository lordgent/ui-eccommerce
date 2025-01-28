import Layout from "@/components/layouts/layouts";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity as updateCartQuantity, removeFromCart } from "../../store/reducers/cart_action";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [isClient, setIsClient] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
      setTotalPrice(total);
    }
  }, [cartItems, isClient]);

  const updateQuantity = (id, qty) => {
    console.log(qty)
    if (qty > 0) {
      dispatch(updateCartQuantity({ id, qty: qty }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  if (!isClient) {
    return null;
  }
  const handlePay = () => {
    window.location.href = "/login"
  }

  return (
    <Layout>
      <div className="p-6 grid">
        <h1 className="text-2xl font-bold mb-4">My Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="w-full md:w-1/2 shadow-md rounded-lg">
            { cartItems.length === 0 ? (
              <p  className="text-center text-gray-400">Your cart is currently empty</p>
            ) : cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center">
                    <button onClick={() => updateQuantity(item.id, item.qty - 1)} className="bg-gray-200 text-xl w-8 h-8 rounded-l">
                      -
                    </button>
                    <span className="px-4 font-medium text-lg">{item.qty}</span>
                    <button onClick={() => updateQuantity(item.id, item.qty + 1)} className="bg-gray-200 text-xl w-8 h-8 rounded-l">
                      +
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">Total: ${(item.price * item.qty).toFixed(2)}</p>
                  <button onClick={() => handleRemove(item.id)} className="text-red-500 text-sm hover:underline flex items-center gap-1">
                    <img src="/icons/remove-red.svg" className="w-5 h-5" alt="Remove" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-[14px]">Subtotal:</p>
                <p className="text-gray-500 text-[14px]">${totalPrice}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-[14px]">Shipping:</p>
                <p className="text-gray-500 text-[14px]">Free</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-[14px]">Admin Fee:</p>
                <p className="text-gray-500 text-[14px]">$0</p>
              </div>
            </div>
            <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300" onClick={handlePay}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
