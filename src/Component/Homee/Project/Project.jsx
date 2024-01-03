import { Link } from 'react-router-dom';
import img1 from '../../../../public/img/rupsojjacosmetics.jpg'
import img2 from '../../../../public/img/infonexusimg.jpg'
import img3 from '../../../../public/img/bdcollegeimg.jpg'
import img4 from '../../../../public/img/project4.jpg'
const Project = () => {
  return (
    <div id='project'>
      <h2 className="text-5xl text-center font-bold bg-white text-black bg-opacity-50 sm:mx-0 md:mx-96 py-10">My Project</h2>
      <div className="grid text-white md:grid-cols-3 py-10  gap-4 sm:grid-cols-1 pt-20 md:px-36 sm:mx-0  ">


        <div className="card w-auto bg-gradient-to-t from-black to-sky-700  shadow-xl">
          <figure>
            <img
              src={img2}
              alt="Shoes"
              className='h-[300px] mt-5 rounded-lg'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              INFO NEXUS
            </h2>
            <p>This Is Research and analytics platform with communication Site</p>
            <p>
              My Role: I Am Working To Create Front-end UI Design ,Authentication,Database And Back-end Code <br />
              Features: <br />
              ● Research and analytics platform with communication <br />
              ● Visitors can Purchase Service Chat With Admin ,See Weather Update. <br />
              Technology Used: <br />
              <div className='grid grid-cols-3 gap-2 text-center pt-2'>
                <div className='border-2 border-blue-600 rounded-xl'>NextJS</div>
                <div className='border-2 border-red-500 rounded-xl'>Tailwind</div>
                <div className='border-2 border-green-600 rounded-xl'>Mongoose</div>
                <div className='border-2 border-red-500 rounded-xl'>Firebase</div>
                <div className='border-2 border-blue-600 rounded-xl'>Stripe</div>
              </div>

            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/infonexus'>Github Code</Link></div>
              <div className="badge badge-outline hover:text-red-500 "><Link to='https://infonexus.netlify.app/'>View Live Site</Link></div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-gradient-to-t from-black to-sky-700   shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Shoes"
              className='h-[300px] mt-5 rounded-lg'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              RUPSOJJA COSMATIC

            </h2>
            <p>This Is A Cosmatics Shop</p>
            <p>
            My Role: I create Front-end UI design and Back end, Firebase, and React router. 
 <br />
              Features: <br />
              ● It is my project and based on cosmetic shop.  <br />
              ● This project is an e-commerce-related website User can Purchase Product By Payment <br />
              Technology Used: <br />
              <div className='grid grid-cols-3 gap-2 text-center pt-2'>
                <div className='border-2 border-blue-600 rounded-xl'>ReactJS</div>
                <div className='border-2 border-red-600 rounded-xl'>Tailwind</div>
                <div className='border-2 border-green-600 rounded-xl'>Daisy Ui</div>
                <div className='border-2 border-red-600 rounded-xl'>Node.js</div>
                <div className='border-2 border-green-600 rounded-xl'>Express.js</div>
                <div className='border-2 border-blue-600 rounded-xl'>MongoDB</div>
                <div className='border-2 border-green-600 rounded-xl'>Firebase</div>
              </div>

            </p>
            <div className="card-actions justify-end pt-3">
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/Rupsojja-Cosmetics'>Client Code</Link></div>
              <div className="badge badge-outline hover:text-red-500 "><Link to='https://github.com/itsrazib1/BdCollege-server'>Server Code</Link></div>
              <div className="badge badge-outline hover:text-blue-500 "><Link to='https://rupsojja-cosmatic.web.app/' > Live Site</Link></div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-gradient-to-t from-black to-sky-700  shadow-xl">
          <figure>
            <img
              src={img3}
              alt="Shoes"
              className='h-[300px] mt-5 rounded-lg'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              BDCollege

            </h2>
            <p>This Is A College Related Site</p>
            <p>
            My Role: I was working to create Front-end UI design and Back end, Firebase, and React router.  
 <br />
              Features: <br />
              ●  It is a my project and based on College-related website.  <br />
              ● This project is an e-commerce-related website user wants to log in and will be enrolled classes. 
<br />
              Technology Used: <br />
              <div className='grid grid-cols-3 gap-2 text-center pt-2'>
                <div className='border-2 border-blue-600 rounded-xl'>ReactJS</div>
                <div className='border-2 border-red-600 rounded-xl'>Tailwind</div>
                <div className='border-2 border-green-600 rounded-xl'>Daisy Ui</div>
                <div className='border-2 border-red-600 rounded-xl'>Node.js</div>
                <div className='border-2 border-green-600 rounded-xl'>Express.js</div>
                <div className='border-2 border-blue-600 rounded-xl'>MongoDB</div>
                <div className='border-2 border-green-600 rounded-xl'>Firebase</div>
              </div>

            </p>
            <div className="card-actions justify-end pt-3">
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/BdCollege'>Client Code</Link></div>
              <div className="badge badge-outline hover:text-red-500 "><Link to='https://github.com/itsrazib1/BdCollege-server'>Server Code</Link></div>
              <div className="badge badge-outline hover:text-blue-500 "><Link to='https://bd-college-book.web.app/'>Live Site</Link></div>
            </div>
          </div>
        </div>
        <div className="card w-auto bg-gradient-to-t from-black to-sky-700  shadow-xl">
          <figure>
            <img
              src={img4}
              alt="Shoes"
              className='h-[300px] mt-5 rounded-lg'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              BDCollege

            </h2>
            <p>This Is A College Related Site</p>
            <p>
            My Role: I was working to create Front-end UI design and Back end, Firebase, and React router.  
 <br />
              Features: <br />
              ●  It is a my project and based on College-related website.  <br />
              ● This project is an e-commerce-related website user wants to log in and will be enrolled classes. 
<br />
              Technology Used: <br />
              <div className='grid grid-cols-3 gap-2 text-center pt-2'>
                <div className='border-2 border-blue-600 rounded-xl'>ReactJS</div>
                <div className='border-2 border-red-600 rounded-xl'>Tailwind</div>
                <div className='border-2 border-green-600 rounded-xl'>Daisy Ui</div>
                <div className='border-2 border-red-600 rounded-xl'>Node.js</div>
                <div className='border-2 border-green-600 rounded-xl'>Express.js</div>
                <div className='border-2 border-blue-600 rounded-xl'>MongoDB</div>
                <div className='border-2 border-green-600 rounded-xl'>Firebase</div>
              </div>

            </p>
            <div className="card-actions justify-end pt-3">
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/BdCollege'>Client Code</Link></div>
              <div className="badge badge-outline hover:text-red-500 "><Link to='https://github.com/itsrazib1/BdCollege-server'>Server Code</Link></div>
              <div className="badge badge-outline hover:text-blue-500 "><Link to='https://bd-college-book.web.app/'>Live Site</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
