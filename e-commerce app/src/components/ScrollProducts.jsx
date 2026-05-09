import React, { useEffect, useState } from "react";

const ScrollProducts = () => {
  const [product, setProduct] = useState([]);

  const FetchProduct = async () => {
    const response = await fetch(
      "https://dummyjson.com/products"
    );

    const data = await response.json();


     setProduct(data.products);
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <section className="flex flex-col w-[80%] m-auto mt-28">
      <h1 className="text-4xl font-bold">Top Products</h1>

      <div className="flex gap-8 overflow-x-scroll mt-8 no-scrollbar ">
        {product.map((item) => (
          <div key={item.id} className=" max-w-70 min-w-70 h-80 flex flex-col bg-wild-sand items-center justify-center whitespace-nowrap p-4 rounded-lg "> 
            <img src={item.thumbnail} alt={item.title} className=" w-full h-full object-fill " />
            <span>{item.title}</span>
            <span className=" font-medium  "> ${item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollProducts;