import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
function CareerRoute() {
  const params = useParams();
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function careerApiFetch() {
    try {
      const response = await fetch("https://itbridge.com.np/api/career");
      const data = await response.json();
      console.log(data);
      setCareers(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const filterdatas = careers.filter((item) => item.slug === params.slug);
  console.log(filterdatas);
  if (filterdatas === 0) {
    alert("there is no data in the array");
  }
  const filterdata = filterdatas[0];
  useEffect(() => {
    careerApiFetch();
  }, []);

  if (loading) {
    return <div className="text-center text-xl p-100">Loading .....</div>;
  }

  return (
    <div>
      <div>
        {filterdata && (
          <>
            <div className="bg-gray-400 text-white p-20 text-3xl  mb-20">
              <div className="flex justify-center align-center max-w-6xl mt-15 mx-auto">
                {filterdata.title}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2  max-w-6xl mx-auto gap-5 lg:gap-20 mb-10 p-10 lg:p-0">
              <div
                dangerouslySetInnerHTML={{ __html: filterdata.excerpt }}
                className="flex flex-wrap "
              />
              <div className="">
                <ul className="bg-red-500 text-white p-5">
                  <li className="flex">
                    <div className="p-1">
                      <BiSolidShoppingBagAlt />
                    </div>
                    <div>Position: {filterdata.title}</div>
                  </li>
                  <li className="flex">
                    <div className="p-1">
                      <TiGroup />
                    </div>
                    <div>Opening Positions: {filterdata.opening_position}</div>
                  </li>
                  <li className="flex">
                    <div className="p-1">
                      <SlCalender />
                    </div>
                    <div>Deadline: {filterdata.deadline}</div>
                  </li>
                  <li className="flex">
                    <div className="p-1">
                      <FaLocationDot />
                    </div>
                    <div>Location: {filterdata.location}</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto gap-4 lg:gap-30 p-10 lg:p-0 mb-20">
              <div className="flex flex-col gap-2">
                <div>
                  <h2>
                    <b>Responsibilites </b>
                  </h2>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: filterdata.responsibilites,
                  }}
                />
                <div>
                  <NavLink to={"/contact"}>
                    <button className="bg-orange-400 text-white p-2 rounded-lg">
                      <div className="flex">
                        <div>Apply Now</div>
                        <div className="flex p-1.5">
                          <IoIosSend />
                        </div>
                      </div>
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="bg-yellow-300 p-7">
                <div className="flex flex-col gap-2">
                  <div>
                    <h2>
                      <b>Requirements </b>
                    </h2>
                  </div>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: filterdata.requirements,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CareerRoute;
