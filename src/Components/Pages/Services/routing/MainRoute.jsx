import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function MainRoute() {
  const params = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  async function dataFetch() {
    try {
      setLoading(true);
      const response = await fetch("https://itbridge.com.np/api/service");
      const data = await response.json();
      setServices(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const filterdatas = services.filter((item) => item.slug === params.slug);
  console.log(filterdatas);
  if (filterdatas === 0) {
    alert("there is no data in the array");
  }
  const filterdata = filterdatas[0];
  useEffect(() => {
    dataFetch();
  }, []);
  if (loading) {
    return (
      <div className="text-center text-xl p-80">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton count={100} />
          </p>
        </SkeletonTheme>
      </div>
    );
  }
  return (
    <div>
      <div>
        {filterdata && (
          <div>
            <div className="bg-gray-400 text-white p-20 text-3xl  mb-10">
              <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
                {filterdata.title}
              </div>
            </div>
            <div className="flex flex-col gap-10 max-w-6xl mx-auto">
              <div>
                <img
                  src={filterdata.photo}
                  className="flex justify-center items-center h-60 w-95"
                ></img>
              </div>
              <div className="flex flex-col gap-5 ">
                <div>
                  <b>{filterdata.title}</b>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: filterdata.excerpt }}
                  className="flex flex-wrap mb-10"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainRoute;
