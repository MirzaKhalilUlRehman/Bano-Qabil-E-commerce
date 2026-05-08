import React from "react";

const Navbar = () => {
  return (
    <section className="bg-black text-white flex justify-between py-4 px-16 ">
      <div className="flex items-center justify-center gap-5 ">
        <span className="text-lg font-medium cursor-pointer ">ShopEase</span>
        <span className="text-sm cursor-pointer hover:underline ">Shop</span>
        <span className="text-sm cursor-pointer hover:underline ">
          Beast Sellers
        </span>
        <span className="text-sm cursor-pointer hover:underline ">Deals</span>
      </div>
      <div className="md:flex items-center justify-center gap-5 hidden ">
        <div className=" flex items-center justify-center gap-1 cursor-pointer hover:underline ">
          <img src="/assets/cart-icon.svg" alt="" />
          <span className="text-sm">Cart</span>
        </div>
        <span className=" cursor-pointer hover:underline ">Help</span>
        <span className=" cursor-pointer hover:underline ">Login</span>
        <span className=" bg-white text-black px-3 py-2 rounded-full font-medium text-sm cursor-pointer ">Sign up</span>
      </div>
    </section>
  );
};

export default Navbar;
