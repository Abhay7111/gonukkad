import React from 'react'

function Profiles({profiledata}) {
  return (
    <div className={` mt-10 items-center flex justify-center gap-10 ${profiledata.style}`}>
          <div className={`w-1/3 flex flex-col ${profiledata.textstyle} `}>
               <p className='flex items-center text-[0.9rem] gap-2 font-medium'><img className='h-7' src={profiledata.icon} /> {profiledata.title}</p>
               <h1 className={`text-4xl mt-2 font-semibold ${profiledata.headingstyle}`}>{profiledata.heading}</h1>
               <p className={`mt-4 ${profiledata.headingstyle}`}>{profiledata.dis}</p>
          </div>
          <div className='w-1/2 '><img src={profiledata.img} /></div>
    </div>
  )
}

export default Profiles