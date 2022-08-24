import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            SubliGift
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  /* href="#" */
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="navbar-text dropdown-item">
                      <Link
                        to={"/category/Vasos"}
                        style={{ textDecoration: "none" }}
                      >
                        Vasos
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="navbar-text dropdown-item">
                      <Link
                        to={"/category/Gorras"}
                        style={{ textDecoration: "none" }}
                      >
                        Gorras
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="navbar-text dropdown-item">
                      <Link
                        to={"/category/Mates"}
                        style={{ textDecoration: "none" }}
                      >
                        Mates
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="navbar-text dropdown-item">
                      <Link
                        to={"/category/Tazas"}
                        style={{ textDecoration: "none" }}
                      >
                        Tazas
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="navbar-text dropdown-item">
                      <Link
                        to={"/category/Botellas de aluminio"}
                        style={{ textDecoration: "none" }}
                      >
                        Botellas
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="navbar-text dropdown-item">
                      <Link
                        to={"/category/Remeras"}
                        style={{ textDecoration: "none" }}
                      >
                        Remeras
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="navbar-text dropdown-item " >
                      <Link
                        to={"/category/Matermos"}
                        style={{ textDecoration: "none" }}
                      >
                        Matermos
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="navbar-text dropdown-item" >
                      <Link
                        to={"/category/Cantimploras"}
                        style={{ textDecoration: "none" }}
                      >
                        Cantimploras
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
{/*             <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
          <Link className="nav-link" to={"/cart/"}>
            <CartWidget />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
