import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-screen-xl mx-auto px-4">

        <div>
          <img  src='/images/logo-white.png' alt="logo" />
          <p className="text-sm text-gray-400 mt-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              <span className="text-green-500">(219) 555-0114</span> or{" "}
              <span className="text-green-500">Proxy@gmail.com</span>
            </p>
          </div>
        </div>

Categories
        <div>
          <h3 className="font-semibold text-lg">My Account</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Helps</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Proxy</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Categories</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Fruit & Vegetables</li>
            <li>Meat & Fish</li>
            <li>Bread & Bakery</li>
            <li>Beauty & Health</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t w-full max-w-screen-xl mx-auto px-4 border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">

          <img
            src="/icons/visa.svg"
            alt="Visa"
            className="h-6"
          />
          <img
            src="/icons/mastercard.svg"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="/icons/secure.svg"
            alt="Secure Payment"
            className="h-6"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
