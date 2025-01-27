import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
function Navigation() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="shadow-md">
      <div className="grid grid-cols-2 max-w-6xl mx-auto bg-white py-1 px-2 it items-center">
        <div className="flex items-center  ">
          <img src="public/images/Logo.png" alt="Logo" className="h-12" />
        </div>
        <div
          className={
            showMediaIcons
              ? " flex  justify-center align-center h-10 bg-green top-15 fixed bg-blue-400"
              : "hidden lg:flex justify-end"
          }
        >
          <ul className="flex items-center text-gray-700 gap-5 ">
            <li>
              <NavLink to="/home">
                <a href="#">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a href="#">About</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <a href="#">Our Service</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/works">
                <a href="#">Our works</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/career">
                <a href="#">Career</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <a href="#">Contact Us</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="flex justify-end"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <a href="#">
            <GiHamburgerMenu className="grid justify-end lg:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
