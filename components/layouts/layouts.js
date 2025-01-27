// components/Layout.tsx
import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { useSelector  } from 'react-redux';

const Layout  = ({children}) => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div>
      <Navbar cartTotal={cart.length} /> 
      <br></br>
      <main className="w-full max-w-screen-xl mx-auto px-4">{children}</main>

      <Footer/>
    </div>
  );
};

export default Layout;
