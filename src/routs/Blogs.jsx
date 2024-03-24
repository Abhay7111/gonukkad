import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Img from '../components/img'

function Blogs() {
  return (
    <div>
     <Nav/>
     <div className='h-[80vh] w-full flex items-center justify-center'>
      <Img/>
        <div className='h-[400px] w-[85vw] border border-zinc-600 overflow-hidden rounded-3xl flex '>
          <div className='w-1/2 h-full flex flex-col items-center'>
            <p className='w-full px-20 mt-16 text-[0.8rem] font-medium'>March 25, 2024</p>
            <h1 className='text-3xl px-16 font-semibold'>Amazon Advertising Simplified: Maximising Your Marketing Potential</h1>
            <p className='w-full px-16 mb-10 mt-2'>Content Team</p>
            <p className='text-start px-16'>Discover the developments in Amazon advertising services to create impactful campaigns that will distinguish your brand from</p>
            <Link to="../error" className='w-full px-20 text-red-400 font-medium'>Read More...</Link>
          </div>
          <div className='w-1/2 h-full flex items-center justify-center'>
            <img className='h-[320px] rounded-2xl' src="https://www.gonukkad.com/wp-content/uploads/2024/03/Amazon-Advertising.webp" />
          </div>
        </div>
     </div>
     <Footer/>
     </div>
  )
}

export default Blogs