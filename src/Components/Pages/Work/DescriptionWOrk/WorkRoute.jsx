import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function WorkRoute() {
  const params = useParams();
  const [works, setWorks] = useState([]);
  async function fetchApiWork() {
    try {
      const response = await fetch("https://itbridge.com.np/api/work");
      const data = await response.json();

      setWorks(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const filterdatas = works.filter((item) => item.slug === params.slug);
  console.log(filterdatas);
  if (filterdatas === 0) {
    alert("there is no data in the array");
  }
  const filterdata = filterdatas[0];

  useEffect(() => {
    fetchApiWork();
  }, []);
  return (
    <>
      <div>
        {filterdata && (
          <div>
            <div className="bg-gray-400 text-white p-20 text-3xl  mb-10">
              <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
                {filterdata.alias}
              </div>
            </div>
            <div>
              <div>{filterdata.photo}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkRoute;
