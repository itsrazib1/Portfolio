import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMailBulk
} from "react-icons/fa";
import Swal from "sweetalert2";
const ContractForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Subject:", Subject);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };
  const handleClick = () => {
    Swal.fire('+8801306050384');
  };
  const handleClickemail = () => {
    Swal.fire('itsrazib1@gmail.com');
  };

  return (
    <div className=" md:flex sm:flex-none  justify-evenly">
      <div className="bg-white mt-10 p-8 rounded-lg bg-opacity-50  text-black overflow-x-auto">
  <table className="table">
    {/* head */}
    <tbody>
      <tr>
        <th>Facebook</th>
        <th><FaFacebook></FaFacebook></th>
        <th><a className="text-sm px-4 py-1 bg-teal-500 rounded-md text-white" href="https://www.facebook.com/khayrul.kober.razib">LINK</a></th>
      </tr>
    </tbody>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>Instagram</th>
        <td><FaInstagram></FaInstagram></td>
        <td><a className="text-sm px-4 py-1 bg-teal-500 rounded-md text-white" href="https://www.instagram.com/k.kober.razib/">LINK</a></td>
        
      </tr>
      {/* row 2 */}
      <tr>
        <th>LinkedIn</th>
        <td><FaLinkedin></FaLinkedin></td>
        <td><a className="text-sm px-4 py-1 bg-teal-500 rounded-md text-white" href="https://www.linkedin.com/in/khayrul-kober-razib-47b5bb291/">LINK</a></td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <th>Github</th>
        <td><FaGithub></FaGithub></td>
        <td className=""><a className="text-sm px-4 py-1 bg-teal-500 rounded-md text-white" href="https://github.com/itsrazib1">LINK</a></td>
        
      </tr>
      <tr>
        <th>Whatsapp</th>
        <td><FaWhatsapp></FaWhatsapp></td>
        <td onClick={handleClick}> <a className="text-sm px-4 py-1 bg-pink-500 rounded-md text-white">Show</a></td>
        
      </tr>
      <tr>
        <th>Gmail</th>
        <td><FaMailBulk></FaMailBulk></td>
        <td onClick={handleClickemail}><a className="text-sm px-4 py-1 bg-pink-500 rounded-md text-white">Show</a></td>
        
      </tr>
    </tbody>
  </table>
</div>

      <div>
        <form
          onSubmit={handleSubmit}
          className=" bg-white mt-10 p-8 rounded-lg bg-opacity-50 max-w-md text-black mx-auto"
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
                className="w-full  px-3 py-2 border rounded-md"
                required
              />
            </div>{" "}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Subject:
              </label>
              <input
                type="Subject"
                id="Subject"
                value={Subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full  px-3 py-2 border rounded-md"
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
      </div>
    </div>
  );
};

export default ContractForm;
