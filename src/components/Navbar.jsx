import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">STA ✈️</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/destinations" onClick={() => setMenuOpen(false)}>
          Destinations
        </NavLink>

        <NavLink to="/login" onClick={() => setMenuOpen(false)}>
          Login
        </NavLink>
      </div>

      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;