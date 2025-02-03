import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function Service() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  async function service() {
    try {
      const response = await fetch("https://itbridge.com.np/api/service");
      const data = await response.json();
      console.log(data);
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    service();
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
    <>
      <div className="bg-gray-400 text-white p-20 text-3xl">
        <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
          Our Services
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center items-center p-10 text-xl">
        <h2>
          <b>Service We Provide For Your Business</b>
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-1 ">
          {product.map((item) => (
            <div key={item.status}>
              <div
                className="h-60 w-90 bg-cover bg-center mb-5 flex "
                style={{ backgroundImage: `url(${item.photo})` }}
              >
                <NavLink
                  to={"/service/" + item.slug}
                  className="text-white pt-50 pl-20"
                >
                  <b>{item.title}</b>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
