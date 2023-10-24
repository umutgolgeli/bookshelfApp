import React from "react";
import { main_book } from "../../dummy_data/main_books";
import { Link, useParams } from "react-router-dom";

export function BookDetail() {
  const { id } = useParams();
  const book = main_book.find((book) => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="empty_book_container">
        <div className="empty_book_detail">BOOK DOESN'T EXIST</div>
        <div className="empty_book_detail_button">
          <li>
            <Link className="main_link" to="/">
              HOME
            </Link>
          </li>
        </div>
      </div>
    );
  }

  return (
    <div className="book-container">
      <img className="book_img" src={book.cover} alt="book_cover" />
      <div className="book-details">
        <h2>{book.title}</h2>
        <p>
          <b>Author:</b> {book.author}
        </p>
        <p>{book.description}</p>
        <div className="empty_book_detail_button">
          <li>
            <Link className="book_detail_link" to="/">
              HOME
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
