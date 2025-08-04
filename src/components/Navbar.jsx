import { Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
import { Dropdown as BootstrapDropdown } from "bootstrap";

export const Navbar = ({ favoritos = [] }) => {
  
  useEffect(() => {
    // Inicializa todos los botones dropdown
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.forEach(dropdownToggleEl => {
      new BootstrapDropdown(dropdownToggleEl);
    });
  }, []);
  
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img
            src="src/assets/img/star_wars_logo.png"
            alt="Star Wars Logo"
            width="60"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu">
            {favoritos.length === 0 ? (
              <li>
                <span className="dropdown-item-text">No hay favoritos</span>
              </li>
            ) : (
              favoritos.map((name, index) => (
                <li key={name}>
                  <a className="dropdown-item" href="#">{name}</a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
