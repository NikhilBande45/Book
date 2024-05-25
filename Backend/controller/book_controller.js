import Book from "../model/book_model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};

export const addbook = async (req, res) => {
  const { title, author, genre, year } = req.body;

  const newBook = new Book({
    title,
    author,
    genre,
    year,
  });

  try {
    const savedBook = await newBook.save();
    res.status(201).send(newBook);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSpecificBook = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id); // For debugging purposes
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error(error); // For debugging purposes
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  try {
    const id = req.params.id;
    const bookToUpdate = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!bookToUpdate) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(bookToUpdate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  console.log(req.params.id);
  try {
    const id = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchBook = async (req, res) => {
  const { query } = req.query;
  console.log("Received query:", query);
  if (!query) {
    return res.status(400).json({ message: "Search query cannot be empty" });
  }

  try {
    const books = await Book.find({ $text: { $search: query } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
