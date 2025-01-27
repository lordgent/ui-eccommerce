// components/Layout.tsx
import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Layout  = ({children}) => {
  return (
    <div>
      <Navbar /> 
      <br></br>
      <main className="w-full max-w-screen-xl mx-auto px-4">{children}</main>

      <Footer/>
    </div>
  );
};

export default Layout;
