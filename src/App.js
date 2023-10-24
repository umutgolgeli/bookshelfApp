import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddBook } from "./pages/add_book";
import { MainLayout } from "./pages/main_layout";
import { MainBookList } from "./components/main_book_list";
import { BookDetail } from "./pages/book_detail";

function App() {
  return (
    <div>
      <header>
        <h1 className="header_title">MY BOOKSHELF</h1>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainBookList />} />
            <Route path="/add" element={<AddBook />} />
          </Route>
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>

      <footer>&copy; {new Date().getFullYear()} My Bookshelf App</footer>
    </div>
  );
}

export default App;
