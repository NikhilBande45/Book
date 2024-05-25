import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'

const cards = ({ item }) => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    console.log(item);
    navigate(`/update/${item._id}`, { state: { item } });
  };

  const handleDeleteClick = async () =>{
    try{
        await axios.delete(`http://localhost:5001/books/${item._id}`)
        .then((res)=>{
            if(res.data){
                toast.success("Book Deleted Succeefully") 
            }
        })
        window.location.reload();
    } catch(error){
        console.error('Error deleting book:', error);
    }
  }

  const handleCardClick = () =>{
    console.log("Card Clicked")
  }
  return (
    <>
      <div className="mt-4 my-3 p-3" onClick={handleCardClick}>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <div className="badge badge-secondary">{item.genre}</div>
            <p>Written By: {item.author}</p>
            <p>Published At: {item.year}</p>
            <img className="rounded" src={"https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"}/>
            <div className="flex justify-between">
                <div className="card-actions justify-between">
                    <button className="bg-pink-500 text-white p-2 rounded hover:bg-pink-700" onClick={handleUpdateClick}>Update</button>
                </div>
                <div className="card-actions justify-between">
                    <button className="bg-pink-500 text-white p-2 rounded hover:bg-pink-700" onClick={handleDeleteClick}>Delete</button>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default cards;
