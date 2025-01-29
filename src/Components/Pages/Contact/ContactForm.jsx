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
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setDescription("");
  }
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
            />
          </div>
          <div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            ></input>
          </div>
          <div>
            <input
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone Number"
            ></input>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              placeholder="Subject"
              className="p-3"
            ></input>
          </div>
          <div>
            <textarea
              placeholder="What's on Your Mind ?"
              rows={5}
              cols="50"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div>
            <button onClick={submit}>
              <div className="flex gap-2">
                <div>
                  <IoIosSend />
                </div>
                <div>Send</div>
              </div>
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
