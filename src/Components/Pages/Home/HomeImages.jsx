function HomeImages() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="text-lg">
          <b>IT Bridge is perfect for your Business</b>
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-30 md:gap-30 lg:gap-45 md:flex-row mb-8 p-10">
        <div className="flex flex-col gap-5 justify-center align-center">
          <div>
            <img
              src="public/images/domain-registration-1.png"
              data-aos="fade-right"
            />
          </div>
          <div>
            <h2
              className="flex justify-center items-center text-black"
              data-aos="fade-right"
            >
              Domain Expert
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center align-center">
          <div>
            <img src="public/images/domain-registration-2.png" />
          </div>
          <div>
            <h2 className="flex justify-center items-center text-black ">
              Creative Ideas
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <img src="public/images/startup-1.png" data-aos="fade-left" />
          </div>
          <div>
            <h2
              className="flex justify-center items-center text-black"
              data-aos="fade-left"
            >
              Dedication
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-30 md:gap-30 lg:gap-45 md:flex-row mb-15 p-10">
        <div className="flex flex-col gap-5 justify-center align-center">
          <div>
            <img
              src="public/images/domain-registration-4.png"
              data-aos="fade-up"
            />
          </div>
          <div>
            <h2 className="flex justify-center items-center" data-aos="fade-up">
              Innovation
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center align-center">
          <div>
            <img
              src="public/images/domain-registration-5.png"
              data-aos="fade-up"
            />
          </div>
          <div>
            <h2
              className="flex justify-center items-center text-black  "
              data-aos="fade-up"
            >
              Experienced
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <img
              src="public/images/domain-registration-6.png"
              data-aos="fade-up"
            />
          </div>
          <div>
            <h2 className="flex justify-center items-center" data-aos="fade-up">
              Dedicated Team
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <img
              src="public/images/domain-registration-7.png"
              data-aos="fade-up"
            />
          </div>
          <div>
            <h2 className="flex justify-center items-center" data-aos="fade-up">
              Quality Product
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeImages;
