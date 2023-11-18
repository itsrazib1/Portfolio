import { Link } from 'react-router-dom';
import img1 from '../../../../public/img/project1.jpg'
import img2 from '../../../../public/img/infonexuss.jpg'
import img3 from '../../../../public/img/bdcollege.jpg'
const Project = () => {
  return (
    <div id='project'>
      <h2 className="text-5xl text-center font-bold bg-white text-black bg-opacity-50 sm:mx-0 md:mx-96 py-10">My Project</h2>
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
            INFO NEXUS
            </h2>
            <p>This Is Research and analytics platform with communication Site</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/infonexus'>Github Code</Link></div>
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://infonexus.netlify.app/'>View Live Site</Link></div>
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
            <div className="card-actions justify-end">
            <div className="badge badge-outline hover:text-green-500 "><Link to='https://github.com/itsrazib1/BdCollege'>Github Code</Link></div>
              <div className="badge badge-outline hover:text-green-500 "><Link to='https://bd-college-book.web.app/'>View Live Site</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
