import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const cart = useSelector((state) => state.cart.items);

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  const totalPrice = cart.length > 0 ? calculateTotalPrice() : "0";  // Make sure to call the function

  return (
    <div>
      <Navbar cartTotal={cart.length} totalPrice={totalPrice} /> 
      <br />
      <main className="w-full max-w-screen-xl mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
