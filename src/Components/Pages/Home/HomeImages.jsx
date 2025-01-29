function HomeImages() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-30 md:gap-30 lg:gap-45 md:flex-row">
        <div>
          <img
            src="public/images/domain-registration-1.png"
            data-aos="fade-right"
          />
          <h2 className="flex justify-center items-center">Domain Expert</h2>
        </div>
        <div>
          <img src="public/images/domain-registration-2.png" />
          <h2 className="flex justify-center items-center text-black text-2xl">
            Creative Ideas
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <img src="public/images/startup-1.png" data-aos="fade-left" />
          </div>
          <div>
            <h2 className="flex justify-center items-center">Dedication</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeImages;
