import { useState } from "react";
import { IoIosSend } from "react-icons/io";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function submit() {
    if (name === "") {
      setError("! Empty Name");
      return;
    }
    if (email === "") {
      setError("! Empty Email");
      return;
    }
    if (phone === "") {
      setError("! Empty PhoneNumber");
      return;
    }
    if (subject === "") {
      setError("! Empty Subject");
      return;
    }
    if (description === "") {
      setError("! Empty Description");
      return;
    }
    setError("");
    console.log(name, email, phone, subject, description);
    post();
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setDescription("");
  }
  const post = async () => {
    try {
      const res = await fetch("https://itbridge.com.np/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone_no: phone,
          subject: subject,
          message: description,
        }),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:flex-row max-w-6xl mx-auto lg:justify-between py-30">
        <div className="flex flex-col gap-5 ">
          <div>
            <h2 className="text-lg">
              <b className="text-lg">
                Contact Us about anything related to our company or services .
              </b>
            </h2>
            <h2>
              <b>
                We will do aout best to get back to you as soon as possible .
              </b>
            </h2>
          </div>
          <div className="text-red-400">{error}</div>
          <div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Full Name"
              className="bg-gray-100 p-2 rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              className="bg-gray-100 p-2 rounded-md w-full"
            ></input>
          </div>
          <div>
            <input
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone Number"
              className="bg-gray-100 p-2 rounded-md w-full"
            ></input>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              placeholder="Subject"
              className="bg-gray-100 p-2 rounded-md w-full"
            ></input>
          </div>
          <div>
            <textarea
              placeholder="What's on Your Mind ?"
              rows={5}
              cols="50"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="bg-gray-100 p-2 rounded-md w-full"
            ></textarea>
          </div>
          <div>
            <button
              onClick={submit}
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-md  flex items-center gap-2"
            >
              <IoIosSend className="text-xl" />
              <span>Send</span>
            </button>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3 text-gray-500">
            <li>
              <b>Banepa</b>
            </li>
            <li>Banepa-8 Santinagar</li>
            <li>9845046048</li>
            <li>info@itbridge.com.np</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
