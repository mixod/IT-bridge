import { NavLink } from "react-router-dom";
import { dataFooter } from "../../assets/FooterData";
import MainFooterSection from "./MainFooterSection";
import { HiArrowRightCircle } from "react-icons/hi2";
function Footer() {
  return (
    <>
      <div className="bg-red-400 p-10">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto justify-between items center">
          <div>
            <h2>
              <b>Want to work together?</b>
            </h2>
            <h3>We are the perfect partner for your business</h3>
          </div>
          <div>
            <ul>
              {dataFooter.map((item) => (
                <li key={item.id}>
                  <NavLink to={"/contact"}>
                    <button
                      className="bg-white hover:text-black text-red-400 px-6 py-2  flex items-center gap-2"
                      data-aos="fade-right"
                    >
                      <div className="flex gap-2">
                        <div>{item.content}</div>
                        <div className="p-1">
                          <HiArrowRightCircle />
                        </div>
                      </div>
                    </button>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <MainFooterSection />
    </>
  );
}

export default Footer;
