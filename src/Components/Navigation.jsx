import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
function Navigation() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className="fixed w-full shadow-md bg-white z-1000 h-20 py-3">
      <div className="grid grid-cols-2 max-w-6xl mx-auto bg-white py-1 px-2 it items-center ">
        <div className="flex items-center  ">
          <img src="public/images/Logo.png" alt="Logo" className="h-12" />
        </div>
        <div
          className={
            showMediaIcons
              ? " flex flex-wrap justify-center align-center h-10  top-14 fixed w-full lg:static"
              : "hidden lg:flex justify-end"
          }
        >
          <ul className="flex w-full justify-end flex-col bg-white p-10 lg:p-2 lg:flex-row items-center text-gray-700 gap-8 ">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-amber-500" : ""
                }
                to="/home"
              >
                <a href="#">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-amber-500" : ""
                }
                to="/about"
              >
                <a href="#">About</a>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-amber-500" : ""
                }
                to="/service"
              >
                <a href="#">Our Service</a>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-amber-500 hover:border-b-amber-300"
                    : "hover:border-b-amber-300"
                }
                to="/works"
              >
                <a href="#">Our works</a>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-amber-500" : ""
                }
                to="/career"
              >
                <a href="#">Career</a>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-amber-500" : ""
                }
                to="/contact"
              >
                <a href="#">Contact Us</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <a href="#">
            <GiHamburgerMenu
              className="grid justify-end lg:hidden"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
