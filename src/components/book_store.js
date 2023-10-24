// BookStore.js
import { main_book } from "../dummy_data/main_books";

const BOOKS_STORAGE_KEY = "myBookstoreBooks"; // locakstorage daki KEY

export function getBooksFromLocalStorage() {
  initializeLocalStorage();
  const storedBooks = localStorage.getItem(BOOKS_STORAGE_KEY); // localstorage dan kitapları alıyoruz
  return JSON.parse(storedBooks) || []; // kitapları json formatına çeviriyoruz
}

export function initializeLocalStorage() {
  if (!localStorage.getItem(BOOKS_STORAGE_KEY)) {
    localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(main_book));
  }
}

export function addBookToLocalStorage(book) {
  const books = getBooksFromLocalStorage();
  const result = [...books, book];

  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(result));
}
