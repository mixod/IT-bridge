import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Work() {
  const [works, setWorks] = useState([]);
  async function fetchDataApi() {
    try {
      const response = await fetch("https://itbridge.com.np/api/work");
      const data = await response.json();
      console.log(data);
      setWorks(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDataApi();
  }, []);
  return (
    <>
      <div className="bg-gray-400 text-white p-20 text-3xl">
        <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
          Our Works
        </div>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 max-w-6xl mx-auto mt-20 ml-[15%]">
        {works.map((item) => (
          <div key={item.id}>
            <NavLink to={"/works/" + item.slug}>
              <div className="flex gap-10 mb-10 shadow-sm mr-10 p-3">
                <div>
                  <img src={item.photo} className="w-30 h-30 "></img>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-l">
                    <b>{item.title}</b>
                  </div>
                  <div>{item.alias}</div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default Work;
