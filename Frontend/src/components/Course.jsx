import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from './Search'

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:5001/books");
        console.log("response", response.data);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-full container ma-auto md:px-20 px-4 mt-20">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
          View all your book collection
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          {/* <Link to="/">
            <button className="bg-pink-500 px-6 py-2 rounded text-white mt-6 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link> */}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
