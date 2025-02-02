import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Career() {
  const [careers, setCareers] = useState([]);
  async function fetchApiCareer() {
    try {
      const response = await fetch("https://itbridge.com.np/api/career");
      const data = await response.json();
      console.log(data);
      setCareers(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchApiCareer();
  }, []);
  return (
    <>
      <div className="bg-gray-400 text-white p-20 text-3xl">
        <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
          Career
        </div>
      </div>
      <div>
        <p className="flex flex-wrap max-w-6xl mx-auto justify-center items-center p-30 text-xl text-gray-600">
          IT-Bridge Nepal is a privately held company, consisting of a creative
          and multi-talented team comprised of web designers, web developers and
          graphic designers. We provide a wide range of services including web
          design, web development, and mobile application development, web
          hosting, and consulting. IT-Bridge Nepal offers customer-oriented
          services and delivers creative and effective results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-15 gap-15 p-15 ">
        {careers.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col gap-4 shadow-sm p-5">
              <div>
                <img src={item.photo}></img>
              </div>
              <div>
                <b>{item.title}</b>
              </div>
              <NavLink to={"/career/" + item.slug}>
                <div>We are group of young motivated engineers who ......</div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Career;
