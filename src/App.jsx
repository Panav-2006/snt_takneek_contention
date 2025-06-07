import React, { useState } from "react";
import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("admin");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-primary'} border-bottom border-body fixed-top`}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://www.sntiitk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Science and Technology Council
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://www.sntiitk.com/tkn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.sntiitk.com/categories/clubs/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SnT Clubs
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://calendar.sntiitk.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.sntiitk.com/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Theme Toggle Button under Navbar */}
      <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞" : "🌙"}
      </div>

      {/* Page Content */}
      {!isLoggedIn ? (
        <LoginForm
          setIsLoggedIn={setIsLoggedIn}
          role={role}
          setRole={setRole}
        />
      ) : role === "admin" ? (
        <AdminPanel />
      ) : (
        <UserPanel />
      )}
    </div>
  );
}

export default App;
