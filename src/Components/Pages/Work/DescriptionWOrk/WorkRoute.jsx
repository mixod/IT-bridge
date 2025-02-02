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
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto justify-evenly mb-5">
              <div>
                <img src={filterdata.photo} className="h-50 w-50"></img>
              </div>
              <div className="flex flex-col gap-3 p-10">
                <div>
                  <h1 className="text-xl">
                    <b>{filterdata.title}</b>
                  </h1>
                </div>
                <div>{filterdata.alias}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkRoute;
