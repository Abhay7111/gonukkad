import React from 'react'
import { Link } from 'react-router-dom'
import Img from './img'

function Footer() {
  return (
    <div className='bg-white relative overflow-hidden'>
      <Img/>
      <div className=' relative border-b py-10 px-5 border-zinc-600 flex justify-between items-center'>
        <img className='sm:h-20 footerimg navlogo ml-4' src="../../public/BIZ GROWTH LOGO.png" />
        <div className="social flex text-2xl pr-5 gap-2">
          <div className="inst  hover:scale-[1.2] hover:text-blue-500 transition-all cursor-pointer"><a href="https://www.instagram.com/gonukkadcom/?hl=en"><i class="ri-instagram-line"></i></a></div>
          <div className="facebook  hover:scale-[1.2] hover:text-blue-500 transition-all cursor-pointer"><a href="https://www.facebook.com/gonukkadcom"><i class="ri-facebook-fill"></i></a></div>
        </div>
      </div>
      <div className='relative flex flex-wrap footer pb-10'>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 sm:ml-3 flex justify-center'>
        <h2 className='footerheading sm:text-3xl mb-2 sm:text-nowrap'>Important Pages</h2>
        <ul>
          <li><Link to="../about">About Us</Link></li>
          <li><a href="../#">Payment</a></li>
          <li><Link to="../contact">Contact Us</Link></li>
          <li><Link to="../about">Our Story</Link></li>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2 className='footerheading sm:text-3xl mb-2'>Blogs</h2>
        <ul>
          <Link to="../error"><li> How To Sell On Amazon In India</li></Link>
          <Link to="../error"><li> How To Sell On Flipkart In India</li></Link>
          <Link to="../error"><li> How To Sell On Meesho In India</li></Link>
          <Link to="../error"><li> How to Sell On Alibaba In India</li></Link>
          <Link to="../error"><li> How To Sell On JioMart In India</li></Link>
          <Link to="../error"><li> How To Sell On eBay</li></Link>
          <Link to="../error"><li> How To Sell On Myntra In India</li></Link>
          <Link to="../error"><li> How To Sell On Nykaa In India</li></Link>
          <Link to="../error"><li> How To Sell On Etsy</li></Link>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2 className='footerheading sm:text-3xl mb-2'>Advertising Services</h2>
        <ul>
          <Link to="../error"><li>  Amazon Advertising Services</li></Link>
          <Link to="../error"><li>  Flipkart Advertising Services</li></Link>
          <Link to="../error"><li> Meesho Advertising Services</li></Link>
          <Link to="../error"><li> JioMart Advertising Services</li></Link>
          <Link to="../error"><li> eBay Advertising Services</li></Link>
          <Link to="../error"><li> Amazon - Brand Store</li></Link>
          <Link to="../error"><li> Amazon - A+ Listing</li></Link>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2 className='footerheading sm:text-3xl mb-2'>Seller Registrations</h2>
        <ul>
          <Link to="../error"><li> Amazon Seller Registration</li></Link>
          <Link to="../error"><li> Flipkart Seller Registration</li></Link>
          <Link to="../error"><li> Meesho Seller Registration</li></Link>
          <Link to="../error"><li> JioMart Seller Registration</li></Link>
          <Link to="../error"><li> eBay Seller Registration</li></Link>
          <Link to="../error"><li> Myntra Seller Registration</li></Link>
          <Link to="../error"><li> Nykaa Seller Registration</li></Link>
          <Link to="../error"><li> Etsy Seller Registration</li></Link>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2 className='footerheading sm:text-3xl mb-2'>Listing & Cataloging Services</h2>
        <ul>
          <Link to="../error"><li> Amazon Listing & Cataloging Services</li></Link>
          <Link to="../error"><li> Flipkart Listing & Cataloging Services</li></Link>
          <Link to="../error"><li> Meesho Listing & Cataloging Services</li></Link>
          <Link to="../error"><li> JioMart Listing & Cataloging Services</li></Link>
          <Link to="../error"><li> eBay Listing & Cataloging Services</li></Link>
          <Link to="../error"><li> Myntra Listing & Cataloging Services</li></Link>
          <Link to="../error"><li> Nykaa Listing & Cataloging Services</li></Link>
          <Link to="../error"><li> Etsy Listing & Cataloging Services</li></Link>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2 className='footerheading sm:text-3xl mb-2'>Full Account Management Services</h2>
        <ul>
          <Link to="../error"><li> Amazon Account Management Services</li></Link>
          <Link to="../error"><li> Flipkart Account Management Services</li></Link>
          <Link to="../error"><li> Meesho Account Management Services</li></Link>
          <Link to="../error"><li> JioMart Account Management Services</li></Link>
          <Link to="../error"><li> eBay Account Management Services</li></Link>
          <Link to="../error"><li> Myntra Account Management Services</li></Link>
          <Link to="../error"><li> Nykaa Account Management Services</li></Link>
          <Link to="../error"><li> Etsy Account Management Services</li></Link>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer