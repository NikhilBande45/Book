import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    year:Number,
})

bookSchema.index({ title: 'text', author: 'text', genre: 'text' });

const Book = mongoose.model('Book' , bookSchema);

export default Book;
