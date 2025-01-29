import { NavLink } from "react-router-dom";
import { data } from "../../../assets/data";

function HomeSwitch() {
  return (
    <div>
      <ul className="flex flex-col p-10 md:p-10 max-w-6xl mx-auto md:grid grid-cols-2 gap-1 justify-center align-center  mb-20">
        {data.map((item) => (
          <li key={item.id}>
            <NavLink to={"/about"}>
              <div
                className="h-80 bg-cover bg-center text-white text-xl rounded"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <h2 className="flex pt-70 px-8">{item.desc}</h2>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeSwitch;
