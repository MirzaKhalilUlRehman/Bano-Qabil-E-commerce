import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center gap-8 lg:gap-0 lg:justify-between w-[82%] m-auto mt-28 lg:flex-nowrap flex-wrap ">
      <div className=" flex flex-col gap-4 w-full">
        <span className="text-[3.25rem] font-medium ">
          Shop Smarter. Shop Better.
        </span>
        <span className="w-full lg:w-[38rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          aliquid nam ullam id labore quidem nobis, magni animi ipsa inventore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          adipisci?
        </span>
        <div className=" flex gap-4 mt-8 ">
          <button className=" bg-black text-white px-8 py-3 rounded-md font-medium cursor-pointer hover:bg-black/80 ">
            Show Now
          </button>
          <button className=" bg-black text-white px-8 py-3 rounded-md font-medium cursor-pointer hover:bg-black/80 ">Explore Deals</button>
        </div>
      </div>
      <img src="/assets/hero-image.png" alt="" className="w-[20rem] lg:w-[30rem] lg:h-[25rem] " />
    </section>
  );
};

export default Hero;
