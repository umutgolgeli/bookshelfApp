import React, { useState } from "react";
import { addBookToLocalStorage } from "../../components/book_store";
import { useNavigate } from "react-router-dom";

export function AddBook() {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    cover: "",
    description: "",
  });

  const navigate = useNavigate();

  function handleAddBook() {
    if (
      newBook.title.trim() === "" ||
      newBook.author.trim() === "" ||
      newBook.cover.trim() === "" ||
      newBook.description.trim() === ""
    ) {
      alert("Please fill all the fields!");
      return;
    }

    addBookToLocalStorage(newBook);
    alert("New book added succesfully!");
    navigate("/");
  }

  //event

  return (
    <div>
      <div className="add_book">
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />

        <input
          type="text"
          placeholder="Description"
          value={newBook.description}
          onChange={(e) =>
            setNewBook({ ...newBook, description: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Cover URL"
          value={newBook.cover}
          onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })}
        />

        <button className="button" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
    </div>
  );
}
