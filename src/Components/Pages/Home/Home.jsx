function Home() {
  return (
    <>
      <div>
        <img src="public/images/itbridge-1.png"></img>
      </div>
      <div>
        <div className="max-w-6xl mx-auto flex justify-between py-10 gap-10">
          <div data-aos="fade-up">
            <img
              src="public/images/aboutImageDesc.png"
              className="hidden md:flex w-350"
            ></img>
          </div>
          <div>
            <h2 className="text-lg">
              <b>Our Company</b>
            </h2>
            <p className="flex flex-wrap text-gray-500 leading-6.5 ">
              4 IT-Bridge Nepal is a privately held company, consisting of a
              creative and multi-talented team comprised of web designers, web
              developers and graphic designers. We provide a wide range of
              services including web design, web development, and mobile
              application development, web hosting, and consulting. IT-Bridge
              Nepal offers customer-oriented services and delivers creative and
              effective results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
