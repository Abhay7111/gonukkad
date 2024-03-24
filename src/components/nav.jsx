import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className=' z-50 relative w-[100vw] min-h-[10vh] py-3 border-b bg-white overflow-hidden border-zinc-600 flex items-center justify-between px-8'>
     <div><img src="https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/logo-DLkhn1q1.webp" className='h-16' /></div>
     <div className='flex gap-10 items-center'>
          <ul className='flex gap-8 font-medium'>
               <li><Link to="/">Home</Link></li>
               <li><Link to="../About">About</Link></li>
               <li><Link to="../Our-Services">Our Services</Link></li>
               <li><Link to="../Verification">Business Verification</Link></li>
               <li><Link to="../Blogs">Blogs</Link></li>
          </ul>
          <p className='px-4 py-2 hover:bg-[#01335E] font-semibold bg-[#195180] hover:text-zinc-200 rounded-lg'><Link to="../contact">Contact</Link></p>
     </div>
    </div>
  )
}

export default Nav