import HomeImages from "./HomeImages";
import HomeSwitch from "./HomeSwitch";

function Home() {
  return (
    <>
      <div>
        <div className="bg-[url('/images/circle.png')] bg-cover bg-center">
          <div>
            <img src="public/images/itbridge-1.png" className="w-400"></img>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex flex-col md:flex-row  max-w-6xl mx-auto justify-between py-10 gap-10">
          <div data-aos="fade-up">
            <img
              src="public/images/aboutImageDesc.png"
              className="flex justify-center w-150 md:w-350"
            ></img>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-lg">
                <b className="p-5 md:p-0"> Our Company</b>
              </h2>
            </div>
            <div>
              <p className="flex flex-wrap text-gray-500 leading-6.5 p-5 md:p-0 ">
                4 IT-Bridge Nepal is a privately held company, consisting of a
                creative and multi-talented team comprised of web designers, web
                developers and graphic designers. We provide a wide range of
                services including web design, web development, and mobile
                application development, web hosting, and consulting. IT-Bridge
                Nepal offers customer-oriented services and delivers creative
                and effective results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeSwitch />
      <HomeImages />
    </>
  );
}

export default Home;
