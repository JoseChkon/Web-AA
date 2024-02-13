import React from "react";
import ProductCard from "../../components/ProductCard";
import InputSearch from "../../components/InputSearch";

const array = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function Gallery() {
  
  return (
    <>
      <div className="flex justify-center py-5 sticky top-0 bg-white z-50">
        <div className="w-6/12">
          <InputSearch />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {array.map((element) => {
          console.log(element.id)
          return <ProductCard id={element.id} key={element.id}/>;
        })}
      </div>
    </>
  );
}
