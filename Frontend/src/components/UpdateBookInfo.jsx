import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast'
const UpdateBookInfo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const book = state.item;
  //   console.log(book._id);
  const [title, setTitle] = useState(book.title);
  const [genre, setGenre] = useState(book.genre);
  const [year, setPublishedYear] = useState(book.year);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('title', book.title);
    // formData.append('genre', book.genre);
    // formData.append('publishedYear', book.year);

    const updatedBook = {
      title,
      genre,
      year,
    };

    try {
      await axios.put(`http://localhost:5001/books/${book._id}`,updatedBook)
      .then((res)=>{
        if(res.data){
            toast.success('Book Updated Successfully')
        }   
      })
      navigate("/books");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center mt-32 mb-5">
        <div className="border p-8">
          <div className="text-4xl mb-5">Update Book Info</div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 mb-2">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="py-1 border rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2 mb-2">
              <label>Genre:</label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
                className="py-1 border rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2 mb-2">
              <label>Published Year:</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setPublishedYear(e.target.value)}
                required
                className="py-1 border rounded-md outline-none"
              />
            </div>
            <div className="flex items-center justify-between  mt-4">
                <button className="bg-green-500 text-white hover:bg-green-700 p-2 rounded" type="submit">Update Book</button>
                <button className="bg-red-500 text-white hover:bg-red-700 p-2 rounded" type="button" onClick={() => navigate("/")}>Cancel</button>
            </div>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBookInfo;
