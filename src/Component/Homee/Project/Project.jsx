import { Link } from 'react-router-dom';
import img1 from '../../../../public/img/project1.jpg'
import img2 from '../../../../public/img/project2.jpg'
import img3 from '../../../../public/img/project3.jpg'
const Project = () => {
  return (
    <div>
      <div className="grid text-white md:grid-cols-3 py-10  gap-4 sm:grid-cols-1 pt-20 md:px-36 sm:mx-0  "> 
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
            <div className="card-actions justify-end">
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/Rupsojja-Cosmetics'>Github Code</Link></div>
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://rupsojja-cosmatic.web.app/' >View Live Site</Link></div>
            </div>
          </div>
        </div>
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
            SPICE GARDEN
            </h2>
            <p>This Is A Chef Related Site</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/The-Spice-Garden'>Github Code</Link></div>
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://spice-garden-7fa4a.web.app/'>View Live Site</Link></div>
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
            Global Language Hub
              
            </h2>
            <p>This Is A Language Chorse Site</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/Global-Language-Hub'>Github Code</Link></div>
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://global-language-hub.web.app/'>View Live Site</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
