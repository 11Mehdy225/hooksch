import React from "react";
import { Link } from "react-router-dom";
import "../style/Card.css";


const Header = () => {
  return (
    
      <nav className="header">
        <Link to="/">Movielist</Link>
        <Link to="/Favoris">Favoris</Link>
      </nav>
   
  );
};

export default Header;
