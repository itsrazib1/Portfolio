import logo from "../../../../public/img/logo.jpg";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaReact } from "react-icons/fa";

const Navber = () => {
  const dtails = (
    <>
      <li className="ms-5 border-2 rounded-lg border-cyan-400 hover:bg-white ">
        <a href="#">Home<FaHome></FaHome></a>
      </li>
      <li className="ms-5 border-2 rounded-lg border-cyan-400 hover:bg-white">
        <a href="#about">About<FaInfoCircle></FaInfoCircle></a>
      </li>
      <li className="ms-5 border-2 rounded-lg border-cyan-400 hover:bg-white">

        <a href="#project">Projects<FaReact></FaReact></a>


      </li>
      <li className="ms-5 border-2 rounded-lg border-cyan-400 hover:bg-white">

        <a href="#contract">Contact<FaPhoneAlt></FaPhoneAlt></a>

      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed top-0 z-50 font-bold  text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu z-50 menu-sm dropdown-content mt-3 gap-3 p-2 shadow bg-black rounded-box w-52"
            >
              {dtails}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl ms-10">ITS RAZiB</a>
          <img className="w-10 rounded-full shadow-xl " src={logo} alt="" />
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">{dtails}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
