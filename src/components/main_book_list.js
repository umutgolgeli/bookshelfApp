import React from "react";
import { getBooksFromLocalStorage } from "./book_store";
import { Link, Outlet } from "react-router-dom";

export function MainBookList() {
  const local_books = getBooksFromLocalStorage();

  return (
    <div className="bookshelf">
      {local_books.map((book) => (
        <Link className="book" key={book.id} to={`/book/${book.id}`}>
          <img className="book_img" src={book.cover} alt="book_cover" />
          <h3 className="book_title">{book.title}</h3>
          <p className="book_author">{book.author}</p>
        </Link>
      ))}
      <Outlet />
    </div>
  );
}
