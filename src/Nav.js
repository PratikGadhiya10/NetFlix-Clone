import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://imgs.search.brave.com/kCO3c7J-Mcdb886VStLfoKDYtQpNRyxq4lQpSJs2MK4/rs:fit:320:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/QW9CWlRjaHVWMDZo/MnpHQ0dUc1BnQUFB/QSZwaWQ9QXBp"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
