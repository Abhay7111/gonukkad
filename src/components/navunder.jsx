import React from 'react'
import { Link } from 'react-router-dom'

function Navunder() {
  return (
    <div className='w-80 p-5 h-fit flex items-center flex-col bg-[#67DA85] rounded-xl mt-2'>
          <ul className='flex flex-col items-center w-full font-medium tracking-wide'>
               <Link className='w-full transition-all mt-1'><li className='hover:bg-[#6F5CE3] rounded-lg hover:text-zinc-100 py-1 px-3 w-full text-center'>Ecommerce Seller Support</li></Link>
               <Link className='w-full transition-all mt-1'><li className='hover:bg-[#6F5CE3] rounded-lg hover:text-zinc-100 py-1 px-3 w-full text-center'>Full Acount Management</li></Link>
               <Link className='w-full transition-all mt-1'><li className='hover:bg-[#6F5CE3] rounded-lg hover:text-zinc-100 py-1 px-3 w-full text-center'>Listing & Cataloging</li></Link>
               <Link className='w-full transition-all mt-1'><li className='hover:bg-[#6F5CE3] rounded-lg hover:text-zinc-100 py-1 px-3 w-full text-center'>Amazon - A+ Listing</li></Link>
               <Link className='w-full transition-all mt-1'><li className='hover:bg-[#6F5CE3] rounded-lg hover:text-zinc-100 py-1 px-3 w-full text-center'>Advertising</li></Link>
               <Link className='w-full transition-all mt-1'><li className='hover:bg-[#6F5CE3] rounded-lg hover:text-zinc-100 py-1 px-3 w-full text-center'>Calculators</li></Link>
          </ul>
    </div>
  )
}

export default Navunder