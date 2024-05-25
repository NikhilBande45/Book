import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddBook = ({ onAddBook }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBook = {
        title,
        author,
        genre,
        year,
      };

      console.log(newBook);

      await axios.post("http://localhost:5001/books", newBook)
      .then((res)=>{
        if(res.data){
            toast.success("book Added successfully")
        }
      })
      setTitle("");
      setAuthor("");
      setGenre("");
      setYear("");
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancleClick = () =>{
        navigate('/')
  }
  return (
    <>
      <div className="w-full flex items-center justify-center mt-32 mb-5">
        <div className="border p-8 rounded">
          <div className="text-4xl mb-5">Add a New Book</div>
          <form
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-1 mb-2">
              <label>Book Name</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="px-2 py-1 border rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col space-y-1 mb-2">
              <label>Author Name</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="px-2 py-1 border rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col space-y-1 mb-2">
              <label>Genre</label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
                className="px-2 py-1 border rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col space-y-1 mb-2">
              <label>Published Year</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
                className="px-2 py-1 border rounded-md outline-none"
              />
            </div>

            <div className="flex items-center justify-between  mt-4">
                <button type="submit" className="bg-green-500 text-white hover:bg-green-700 p-2 rounded">Submit</button>
                <button type="submit" className="bg-red-500 text-white hover:bg-red-700 p-2 rounded" onClick={handleCancleClick}>Cancel</button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};
 
export default AddBook;
