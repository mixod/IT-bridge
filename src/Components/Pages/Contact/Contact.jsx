import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <div className="bg-gray-400 text-white p-20 text-3xl">
        <div className="flex justify-center align-center max-w-6xl mt-10 mx-auto">
          Contact Us
        </div>
      </div>
      <ContactForm />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.681372693855!2d85.51093597516878!3d27.63823792853664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0fe087a9de87%3A0xe4828325dc04fc0!2sInformation%20Technology%20Bridge%20(IT%20BRIDGE%20)!5e1!3m2!1sen!2snp!4v1738227354721!5m2!1sen!2snp"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="flex max-w-6xl mx-auto mb-4"
      ></iframe>
    </>
  );
}

export default Contact;
