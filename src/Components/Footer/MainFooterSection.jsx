import { NavLink } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
function MainFooterSection() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="flex flex-col gap-10 p-10 lg:py-7 md:flex-row md:gap-40  text-white max-w-6xl mx-auto ">
          <div className="flex flex-col gap-2 md:4">
            <div>
              <h1>Information</h1>
            </div>
            <ul>
              <li>
                <NavLink to={"/about"}>
                  <a href="javascript:void(0)">About Us</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>
                  <a href="javascript:void(0)">Our Services</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/works"}>
                  <a href="javascript:void(0)">Our Works</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/career"}>
                  <a href="javascript:void(0)">Career</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>
                  <a href="javascript:void(0)">Contact Us</a>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2>Banepa</h2>
            </div>
            <div>
              <ul>
                <li className="flex gap-1 ">
                  <div>
                    <IoLocation className="h-4 w-4" />
                  </div>
                  <div>Banepa-8 Shantinagar</div>
                </li>
                <li className="flex gap-1 ">
                  <div>
                    <FaPhoneAlt />
                  </div>
                  <div>9845046048</div>
                </li>
                <li className="flex gap-1 ">
                  <div>
                    <CiMail />
                  </div>
                  <div>info@itbridge.com.np</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2>Get In Touch</h2>
            </div>
            <div>
              <ul>
                <li>
                  <a href="https://www.facebook.com/itbridgenepal">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/itbridgenepal/">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://itbridge.com.np/">
                    <CgWebsite />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/itbridgenepal/?mx=2">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFooterSection;
