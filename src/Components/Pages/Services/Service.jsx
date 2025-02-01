import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Service() {
  const [product, setProduct] = useState([]);
  async function service() {
    try {
      const response = await fetch("https://itbridge.com.np/api/service");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    service();
  }, []);
  return (
    <>
      <div className="bg-gray-400 text-white p-20 text-3xl">
        <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
          Our Services
        </div>
      </div>
      <div>
        <div>
          {product.map((item) => (
            <div key={item.status}>
              <NavLink to={"/service/" + item.status}>
                <img src={item.photo}></img>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
