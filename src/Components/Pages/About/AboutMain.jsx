function AboutMain() {
  return (
    <>
      <div className="max-w-6xl mx-auto mb-5 flex justify-between py-10 gap-10">
        <div>
          <img
            src="public/images/aboutImageDesc.png"
            className="hidden md:flex w-350"
          ></img>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-xl">
              <b>Our Company</b>
            </h2>
          </div>
          <div>
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
      <div>
        <div className="flex gap-10 max-w-6xl mx-auto ">
          <div>
            <img
              src="public/images/aboutContainerImage.jpg"
              className="hidden md:flex w-120"
            ></img>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-xl">
                <b>Vision</b>
              </h2>
            </div>
            <div>
              <p className="flex flex-wrap text-gray-500 leading-6.5">
                To be at the forefront of application development and be
                respected for setting the highest standards of professionalism
                and Quality of Service.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 max-w-6xl mx-auto ">
          <div>
            <img
              src="public/images/Teamwork.jpg"
              className="hidden md:flex w-345 "
            ></img>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-xl">
                <b>Why Choose Us ?</b>
              </h2>
            </div>
            <div>
              <p className="flex flex-wrap text-gray-500 leading-6.5 ">
                Nepal is fast emerging as a key destination of IT sector.
                IT-Bridge is a new Generation Software Company. In this scenario
                IT-Bridge has experienced dedicated development teams, Combining
                business and industry, knowledge with technology, who work
                closely with clients to produce comprehensive product. Our
                services and product are designed with a focus on stable and
                reliable business systems because:
              </p>
            </div>
            <div className="mb-5">
              <ul>
                <li>Avoid the risk.</li>
                <li>Follow Conceptual Integrity.</li>
                <li>Process Control.</li>
                <li>Inspection and testing.</li>
                <li>Product Cost and quality.</li>
                <li>On-time Delivery...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMain;
