import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        COVID-19
      </Link>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink
            to="/myth-buster"
            activeClassName="active"
            className="nav-link"
          >
            Myth Buster
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
