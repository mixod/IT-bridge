import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomeSliderSection() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
  };
  const [client, setClient] = useState([]);
  async function fetchApiSlider() {
    try {
      const response = await fetch("https://itbridge.com.np/api/happy-client");
      const data = await response.json();
      console.log(data);
      setClient(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiSlider();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center max-w-6xl mx-auto mt-20 text-2xl">
        <h2>Our Happy Clients</h2>
      </div>
      <div className="flex flex-col p-10 max-w-3xl mx-auto mb-10">
        <Slider {...settings}>
          {client.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.photo} className="h-40 w-40"></img>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeSliderSection;
