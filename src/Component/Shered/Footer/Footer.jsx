import logo from '../../../../public/img/logo.jpg'
import { FaInstagram, FaFacebook,FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="footer  mt-20 p-10  text-neutral-content">
  <div>
    <img className='w-16 rounded-full' src={logo} alt="" />
    <p>ITS RAZiB</p>
  </div> 
  <div className='bg-white text-black bg-opacity-50 p-3 rounded-lg'>
    <span className="footer-title ">Social</span> 
    <div className="grid grid-flow-col gap-4">
      
      <a href='https://www.facebook.com/khayrul.kober.razib'><FaFacebook size={32}></FaFacebook></a>
      <a href='https://www.instagram.com/k.kober.razib/'><FaInstagram size={32}></FaInstagram></a>
      <a href='https://twitter.com/k_kober_razib'><FaTwitter size={32}></FaTwitter></a>
      
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;