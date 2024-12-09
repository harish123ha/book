import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand  fs-2" href="#">
            BookStore
          </a>
          <div className="search-1 border-black">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="nav-sections">
              <div className="nav-first-sections">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/course" className="nav-link" aria-current="page">
                      Course
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="toggle-switch tt">
                      <input type="checkbox" id="toggle-switch" />
                      <label for="toggle-switch"></label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="search-2">
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
            <div className="login">
              <button type="button" className="btn btn-dark">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
