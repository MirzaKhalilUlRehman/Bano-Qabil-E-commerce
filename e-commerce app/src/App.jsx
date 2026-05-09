import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollProducts from "./components/ScrollProducts";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollProducts />
      <div className="flex flex-col w-full lg:w-[80%] m-auto">
        <FeatureSection
          ImagUrl="/assets/first-feature.png"
          Title="Why Choose us?"
          Decription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore dolor ab corrupti corporis magnam veniam error quasi nam ipsum!"
          ButtonContent="Learn More"
        />
        <FeatureSection
          className="flex-row-reverse"
          ImagUrl="/assets/second.png"
          Title="Why Choose us?"
          Decription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore dolor ab corrupti corporis magnam veniam error quasi nam ipsum!"
          ButtonContent="Learn More"
        />
        <FeatureSection
          ImagUrl="/assets/third.png"
          Title="Why Choose us?"
          Decription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore dolor ab corrupti corporis magnam veniam error quasi nam ipsum!"
          ButtonContent="Learn More"
        />
        <FeatureSection
          className="flex-row-reverse"
          ImagUrl="/assets/four.png"
          Title="Why Choose us?"
          Decription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore dolor ab corrupti corporis magnam veniam error quasi nam ipsum!"
          ButtonContent="Learn More"
        />
        <FeatureSection
          ImagUrl="/assets/five.png"
          Title="Why Choose us?"
          Decription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore dolor ab corrupti corporis magnam veniam error quasi nam ipsum!"
          ButtonContent="Learn More"
        />
      </div>
    </div>
  );
};

export default App;
