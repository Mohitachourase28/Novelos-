// Book.jsx
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import list from "../../public/list.json";
import customImage from "../../public/images/bookimg.jpg"; // Your custom image
import { Link } from "react-router-dom";

function Book() {
  const [book, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} customImage={customImage} />
          ))}
        </div>
        <div className="items-center justify-center text-center">
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Book;
