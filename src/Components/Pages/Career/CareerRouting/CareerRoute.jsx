import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

function CareerRoute() {
  const params = useParams();
  const [careers, setCareers] = useState([]);
  async function careerApiFetch() {
    try {
      const response = await fetch("https://itbridge.com.np/api/career");
      const data = await response.json();
      console.log(data);
      setCareers(data.data);
    } catch (error) {
      console.log(error);
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
  return (
    <div>
      <div>
        {filterdata && (
          <>
            <div className="bg-gray-400 text-white p-20 text-3xl  mb-10">
              <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
                {filterdata.title}
              </div>
            </div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: filterdata.excerpt }} />
              <div>
                <ul>
                  <li className="flex">
                    <div className="p-1">
                      <BiSolidShoppingBagAlt />
                    </div>
                    <div>Position: {filterdata.title}</div>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CareerRoute;
