import  { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleContactClick = (contactValue) => {
    Swal.fire(contactValue);
  };

  const handleContactEmailClick = () => {
    Swal.fire("itsrazib1@gmail.com");
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwYnHZR0ICQzzYoxABwgoTpIAKZzDOxROaPKKibF7G2WQsGj1b-DBBUDKQCxEwe3BRh/exec";
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Subject", subject);
    formData.append("Message", message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
        resetForm();
      } else {
        console.error("Error!", response.statusText);
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="md:flex sm:flex-none justify-evenly">
      <div className="bg-white mt-10 p-8 rounded-lg bg-opacity-50 text-black overflow-x-auto">
        <table className="table">
          {/* head */}
          <tbody>
            <tr>
              <th>Contact Method</th>
              <th>Icon</th>
              <th>Action</th>
            </tr>
          </tbody>
          {/* rows */}
          <tbody>
            <tr>
              <th>Facebook</th>
              <td>
                <FaFacebook />
              </td>
              <td>
                <a
                  className="text-sm px-4 py-1 bg-teal-500 rounded-md text-white"
                  href="https://www.facebook.com/khayrul.kober.razib"
                >
                  LINK
                </a>
              </td>
            </tr>
            <tr>
              <th>Instagram</th>
              <td>
                <FaInstagram />
              </td>
              <td>
                <a
                  className="text-sm px-4 py-1 bg-teal-500 rounded-md text-white"
                  href="https://www.instagram.com/k.kober.razib/"
                >
                  LINK
                </a>
              </td>
            </tr>
            <tr>
              <th>LinkedIn</th>
              <td>
                <FaLinkedin />
              </td>
              <td>
                <a
                  className="text-sm px-4 py-1 bg-teal-500 rounded-md text-white"
                  href="https://www.linkedin.com/in/khayrul-kober-razib-47b5bb291/"
                >
                  LINK
                </a>
              </td>
            </tr>
            <tr>
              <th>Github</th>
              <td>
                <FaGithub />
              </td>
              <td className="">
                <a
                  className="text-sm px-4 py-1 bg-teal-500 rounded-md text-white"
                  href="https://github.com/itsrazib1"
                >
                  LINK
                </a>
              </td>
            </tr>
            <tr>
              <th>Whatsapp</th>
              <td>
                <FaWhatsapp />
              </td>
              <td onClick={() => handleContactClick("+8801306050384")}>
                <a className="text-sm px-4 py-1 bg-pink-500 rounded-md text-white">
                  Show
                </a>
              </td>
            </tr>
            <tr>
              <th>Gmail</th>
              <td>
                <FaMailBulk />
              </td>
              <td onClick={handleContactEmailClick}>
                <a className="text-sm px-4 py-1 bg-pink-500 rounded-md text-white">
                  Show
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <form
          onSubmit={handleContactFormSubmit}
          className="bg-white mt-10 p-8 rounded-lg bg-opacity-50 max-w-md text-black mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>{" "}
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-5 py-4 border rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-block btn-accent hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        {messageSent && <span id="msg">Message Sent Successfully</span>}
      </div>
    </div>
  );
};

export default ContactForm;
