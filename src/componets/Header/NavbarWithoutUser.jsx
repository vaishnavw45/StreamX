import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarWithoutUser() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full flex justify-between items-center px-10 py-2 transition duration-500 ease-in-out ${
        show ? "bg-black shadow-lg" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-10 sm:h-10 object-contain cursor-pointer"
          src="streamXlogo.png" // Store in public folder or import it
          alt="StreamX"
        />
      </div>

      {/* Login Button */}
      <div className="flex items-center">
        <Link to="/signin">
          <button className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 rounded-md py-2 text-white text-sm sm:text-base font-bold transition duration-300">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}

export default NavbarWithoutUser;
