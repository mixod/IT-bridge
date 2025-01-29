import { NavLink } from "react-router-dom";
import { data } from "../../../assets/data";

function HomeSwitch() {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <NavLink to={"/about"}>{item.id}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeSwitch;
