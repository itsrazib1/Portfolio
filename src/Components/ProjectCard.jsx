import React from "react"

export default function ProjectCard({ project }) {
  console.log(project)
  const { imageSrc, title, description, live_link, client, server } = project
  return (
    <>
      <div className="overflow-hidden rounded text-slate-500 shadow-lg shadow-slate-200 group relative">
        {/*  <!-- Image --> */}
        <img
          src={imageSrc}
          alt="card image"
          className=" h-full"
        />
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-accent">
              {title}
            </h3>
          </header>
          <p className="text-slate-200">
            {description}
          </p>
        </div>
        {/* Text overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 duration-500 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="text-white text-left px-4">
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
            <p className="my-3 text-base text-white font-thin">
              {description}
            </p>
            <div className="flex justify-between py-4 gap-2">
              
              <a href={client} className='w-1/2 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 btn border-0 '>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Client</span>
                            </a>
              
              <a href={server} className='w-1/2 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 btn border-0 '>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Server</span>
                            </a>
            </div>
            
              <a href={live_link} target="_blank" rel="noreferrer" className=' w-full relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 btn border-0 '>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">View Live</span>
                            </a>
            
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        {/* <div className="flex justify-end p-6 pt-0">
          <a href={live_link} target="_blank" className="inline-flex btn h-10 w-full items-center justify-center gap-2 text-white disabled:shadow-none rounded-none">
            <span>View Details</span>
          </a>
        </div> */}
      </div>


    </>
  )
}
