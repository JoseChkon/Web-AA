import React from "react";
import Card from "../../components/Card";

export default function Gallery() {
  const carouselBlogs = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5},{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  return (
    <div className="my-5">
      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-scroll">
          {carouselBlogs.map((blog, index) => (
            <Card blog={blog.id} key={blog.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
