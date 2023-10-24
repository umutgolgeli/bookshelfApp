import { Link, Outlet } from "react-router-dom";
import React from "react";

export function MainLayout() {
  return (
    <div className="main_link_container">
      <nav className="navbar">
        <ul>
          <li>
            <Link className="main_link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="main_link" to="/add">
              Add Book
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
