import { Link } from "react-router-dom";
import gmail from "../../../../public/img/gmail.png";
import linkedin from "../../../../public/img/640px-LinkedIn_logo_initials.png";

const Contract = () => {
  const gmailUrl = `https://mail.google.com/mail/u/0/#inbox?compose=itsrazib1@gmail.com `;
  const linkdinUrl = `https://www.linkedin.com/in/kkoberrazib/ `;
  return (
    <div className="pt-20 h-[470px]">
      <h2 className="text-5xl text-center font-bold bg-white text-black bg-opacity-50 sm:mx-0 md:mx-96 py-10">Contract Me</h2>
<div className="grid md:me-10 sm:me-0 md:grid-cols-2 sm:grid-cols-1 gap-8 md:ms-20 sm:ms-5 mt-20">
<div className="flex gap-8 ps-10 bg-white text-black bg-opacity-50 py-5">
        <img className="h-14 w-[60px] rounded-lg " src={gmail} alt="" />
        <div>
          <h2>Gmail</h2> 
          <div className="text-blue-900 underline">
            <Link  to={gmailUrl}>Email : itsrazib1@gmail.com</Link>
          </div>
        </div>
      </div>
      <div className="flex gap-8 ps-10 bg-white text-black bg-opacity-50 py-5">
        <img className="h-16 w-[60px]" src={linkedin} alt="" />
        <div>
          <h2>Linkedin</h2>
          <div className="text-blue-900 underline">
            <Link to={linkdinUrl}>LinkeDin : kkoberrazib</Link>
          </div>
        </div>
      </div>
</div>
      
    </div>
  );
};

export default Contract;
