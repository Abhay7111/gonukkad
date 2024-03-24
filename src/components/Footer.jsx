import React from 'react'
import { Link } from 'react-router-dom'
import Img from './img'

function Footer() {
  return (
    <div className='bg-white relative overflow-hidden'>
      <Img/>
      <div className=' relative border-b py-10 px-5 border-zinc-600 flex justify-between items-center'>
        <img className='h-20' src="https://www.gonukkad.com/seller-support/images/logo.webp" />
        <div className="social flex text-2xl pr-5 gap-2">
          <div className="inst  hover:scale-[1.2] hover:text-blue-500 transition-all cursor-pointer"><a href="https://www.instagram.com/gonukkadcom/?hl=en"><i class="ri-instagram-line"></i></a></div>
          <div className="facebook  hover:scale-[1.2] hover:text-blue-500 transition-all cursor-pointer"><a href="https://www.facebook.com/gonukkadcom"><i class="ri-facebook-fill"></i></a></div>
        </div>
      </div>
      <div className='relative flex flex-wrap footer pb-10'>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3 flex justify-center'>
        <h2>Important Pages</h2>
        <ul>
          <li><Link to="../about">About Us</Link></li>
          <li><a href="../#">Payment</a></li>
          <li><Link to="../contact">Contact Us</Link></li>
          <li><Link to="../about">Our Story</Link></li>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2>Blogs</h2>
        <ul>
          <li> How To Sell On Amazon In India</li>
          <li> How To Sell On Flipkart In India</li>
          <li> How To Sell On Meesho In India</li>
          <li> How to Sell On Alibaba In India</li>
          <li> How To Sell On JioMart In India</li>
          <li> How To Sell On eBay</li>
          <li> How To Sell On Myntra In India</li>
          <li> How To Sell On Nykaa In India</li>
          <li> How To Sell On Etsy</li>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2>Advertising Services</h2>
        <ul>
          <li>  Amazon Advertising Services</li>
          <li>  Flipkart Advertising Services</li>
          <li> Meesho Advertising Services</li>
          <li> JioMart Advertising Services</li>
          <li> eBay Advertising Services</li>
          <li> Amazon - Brand Store</li>
          <li> Amazon - A+ Listing</li>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2>Seller Registrations</h2>
        <ul>
          <li> Amazon Seller Registration</li>
          <li> Flipkart Seller Registration</li>
          <li> Meesho Seller Registration</li>
          <li> JioMart Seller Registration</li>
          <li> eBay Seller Registration</li>
          <li> Myntra Seller Registration</li>
          <li> Nykaa Seller Registration</li>
          <li> Etsy Seller Registration</li>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2>Listing & Cataloging Services</h2>
        <ul>
          <li> Amazon Listing & Cataloging Services</li>
          <li> Flipkart Listing & Cataloging Services</li>
          <li> Meesho Listing & Cataloging Services</li>
          <li> JioMart Listing & Cataloging Services</li>
          <li> eBay Listing & Cataloging Services</li>
          <li> Myntra Listing & Cataloging Services</li>
          <li> Nykaa Listing & Cataloging Services</li>
          <li> Etsy Listing & Cataloging Services</li>
        </ul>
      </div>
      <div className='min-w-1/4 flex-col items-center min-h-10 px-7 mt-10 ml-3'>
      <h2>Full Account Management Services</h2>
        <ul>
          <li> Amazon Account Management Services</li>
          <li> Flipkart Account Management Services</li>
          <li> Meesho Account Management Services</li>
          <li> JioMart Account Management Services</li>
          <li> eBay Account Management Services</li>
          <li> Myntra Account Management Services</li>
          <li> Nykaa Account Management Services</li>
          <li> Etsy Account Management Services</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer