import React from "react";

const Footer = () => {
  return (
    <section className=" bg-black text-white p-20 md:px-36 mt-16 flex flex-col ">
      <span className="text-lg font-medium">ShopEase</span>
      <span className="mt-8 hover:underline cursor-pointer ">
        Visit Help Center
      </span>
      <div className="flex justify-between gap-2 mt-8 flex-wrap">
        <div>
          <span className="text-lg font-medium">Company</span>
          <div className="flex flex-col gap-3 mt-2">
            <span className="text-sm">About Us</span>
            <span className="text-sm">Our Offering</span>
            <span className="text-sm">Newsroom</span>
            <span className="text-sm">Invester</span>
          </div>
        </div>
        <div>
          <span className="text-lg font-medium">Quick Links</span>
          <div className="flex flex-col gap-3 mt-2">
            <span className="text-sm">Home</span>
            <span className="text-sm">Shop</span>
            <span className="text-sm">Best Seller</span>
            <span className="text-sm">Deals</span>
          </div>
        </div>
        <div>
          <span className="text-lg font-medium">Customer Support</span>
          <div className="flex flex-col gap-3 mt-2">
            <span className="text-sm">FAqs</span>
            <span className="text-sm">Shipping & Delivery</span>
            <span className="text-sm">Return & Refund</span>
            <span className="text-sm">Privacy Policy</span>
          </div>
        </div>
        <div>
          <span className="text-lg font-medium">Follow us</span>
          <div className="flex flex-col gap-3 mt-2">
            <span className="text-sm">Instagram</span>
            <span className="text-sm">Facebook</span>
            <span className="text-sm">Twitter / X</span>
            <span className="text-sm">LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 mt-6">
        <img src="/assets/playstore.png" alt="" className="w-[7.8rem] cursor-pointer" />
        <img src="/assets/appstore.png" alt="" className="w-[7.8rem] cursor-pointer" />
      </div>
        <span className="mt-6 text-gray-400 text-xs">© 2026 ShopEase Technologies Inc.</span>
    </section>
  );
};

export default Footer;
