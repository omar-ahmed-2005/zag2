import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          Mini<span>Store</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;