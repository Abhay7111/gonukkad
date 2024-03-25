import React from 'react'

function Profiles({profiledata}) {
  return (
    <div data-aos="fade-in" data-aos-id="super-duper" className={` mt-10 items-center sm:flex servicecomponent justify-center gap-10 ${profiledata.style}`}>
          <div className={`sm:w-1/3 flex flex-col ${profiledata.textstyle} `}>
               <p className='flex servicecomponentimg items-center text-[0.9rem] gap-2 font-medium'><img className='h-7' src={profiledata.icon} /> {profiledata.title}</p>
               <h1 className={`text-4xl mt-2 servicecomponentimg font-semibold ${profiledata.headingstyle}`}>{profiledata.heading}</h1>
               <p className={`mt-4 servicecomponentimg ${profiledata.headingstyle}`}>{profiledata.dis}</p>
          </div>
          <div className='sm:w-1/2 servicecomponentimg'><img src={profiledata.img} /></div>
    </div>
  )
}

export default Profiles