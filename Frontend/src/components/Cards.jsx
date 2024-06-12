// Cards.jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Cards({ item, customImage }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={customImage || item.image}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{item.title}</p>
          <div className="card-actions justify-between mt-2">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
