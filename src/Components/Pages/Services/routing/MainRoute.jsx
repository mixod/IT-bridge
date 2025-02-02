import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MainRoute() {
  const params = useParams();
  const [services, setServices] = useState([]);
  async function dataFetch() {
    try {
      const response = await fetch("https://itbridge.com.np/api/service");
      const data = await response.json();
      setServices(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const filterdatas = services.filter((item) => item.slug === params.slug);
  console.log(filterdatas);
  if (filterdatas.length === 0) {
    alert("there is no data in the array");
  }
  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <div>
      <div className="bg-gray-400 text-white p-20 text-3xl">
        <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
          Our Services
        </div>
      </div>
    </div>
  );
}

export default MainRoute;
