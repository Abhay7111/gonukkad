import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import Img from '../components/img'

function Contact() {
  return (
    <div>
     <Nav/>
     <div className='h-auto sm:py-20 sm:flex justify-center items-center'>
      <Img/>
        <div className='flex items-center contform justify-center'>
          <form action="userdata" method="get" className='w-[85%] flex flex-col sm:px-20 items-center bg-[#d6d3eb] h-fit py-16 rounded-3xl'>
          <h1 className='text-2xl font-medium'>Contact Us Now</h1>
          <div className='border-b w-full mt-3 border-zinc-600'></div>
          <input type="text" name="name" id="name" required className=' mt-5 w-full px-2 py-1 rounded-lg outline-dotted outline-1' placeholder='Name' />
          <input type="email" name="email" id="email" required className=' mt-5 w-full px-2 py-1 rounded-lg outline-dotted outline-1' placeholder='Email' />
          <textarea name="text" id="massage" cols="70" rows="3" required className=' mt-5 w-full px-2 py-1 rounded-sm outline-dotted outline-1' placeholder='Write your massage . . .'></textarea>
          <button type="submit" className='bg-[#8879E9] mt-6 px-9 py-2 text-xl rounded-lg'>Send</button>
          </form>
        </div>
        <div className='sm:w-1/3 contdetails h-fit'>
          <h1 className='text-3xl contformheading sm:font-medium text-[#705ee7]'>Let's Get in Touch</h1>
          <p>We are open for any suggestion or just to have a chat!</p>
          <div className='flex flex-col mt-3'>
            <p className='flex gap-3 items-center'><img src="https://gonukkad.com/seller-support/images2/address.svg"/>Fluid3 Infotech Pvt.Ltd.</p>
            <p>Unit- 521, Tower B4, Spaze I Tech Park, Sector 49, Sohna Road, Gurugram, Haryana - 122018</p>
          </div>
          <div className='mt-5 flex flex-col gap-4 font-medium'>
            <p className='flex contformp items-center gap-2'><img src="https://gonukkad.com/seller-support/images2/phone.svg"/>Phone: <a className=' font-normal text-blue-600 underline underline-offset-2' href="tel:080-692-28600">080-692-28600</a> , <a className=' font-normal text-blue-600 underline underline-offset-2' href="tel:040-681-52890">040-681-52890</a></p>
            <p className='flex contformp items-center gap-2'><img src="https://gonukkad.com/seller-support/images2/whatsapp.svg"/>Whatsapp: <a className=' font-normal text-blue-600 underline underline-offset-2' href="https://api.whatsapp.com/send/?phone=9289112850&amp;text&amp;app_absent=0">928-911-2850</a></p>
            <p className='flex contformp items-center gap-2 text-nowrap'><img src="https://gonukkad.com/seller-support/images2/mail.svg"/>Mail ID: <span className='contformspan'><a className=' font-normal text-blue-600 leading-none underline underline-offset-2' href="mailto:connect@gonukkad.com">connect@gonukkad.com</a> , <a className='font-normal text-blue-600 leading-none underline underline-offset-2' href="mailto:partnerships@gonukkad.com">partnerships@gonukkad.com</a></span></p>
          </div>
        </div>
     </div>
     <div className='flex flex-col items-center py-20'>
      <p className=' font-medium underline underline-offset-2'>Platform</p>
      <h1 className='text-5xl text-center px-5 mt-3 contsellsec sm:font-semibold mb-5'>We Help You Sell on</h1>
        <Img/>
      <div className='w-[75vw] h-60 overflow-x-auto rounded-xl p-3'>
          <div className='h-full w-fit  flex gap-4 items-center'>
              <div className='w-52 h-52 border border-zinc-500 flex flex-col items-center overflow-hidden bg-white cursor-pointer rounded-xl'>
                <img className='w-full' src="https://www.gonukkad.com/seller-support/images2/New%20folder/Esty_Logo.webp" />
                <a className=' underline px-3 text-center text-[0.9rem] mt-3 font-medium' href="#">How to sell on Etsy</a>
              </div>
              <div className='w-52 h-52 border border-zinc-500 flex flex-col items-center overflow-hidden bg-white cursor-pointer rounded-xl'>
                <img className='w-full' src="https://www.gonukkad.com/seller-support/images2/New%20folder/Myntra_Logo1.webp" />
                <a className=' underline px-3 text-center text-[0.9rem] mt-3 font-medium' href="#">How to sell on Myntra</a>
              </div>
              <div className='w-52 h-52 border border-zinc-500 flex flex-col items-center overflow-hidden bg-white cursor-pointer rounded-xl'>
                <img className='w-full' src="https://www.gonukkad.com/seller-support/images2/New%20folder/Nykaa_Logo.webp" />
                <a className=' underline px-3 text-center text-[0.9rem] mt-3 font-medium' href="#">How to sell on Nykaa</a>
              </div>
              <div className='w-52 h-52 border border-zinc-500 flex flex-col items-center overflow-hidden bg-white cursor-pointer rounded-xl'>
                <img className='w-full' src="https://www.gonukkad.com/seller-support/images2/New%20folder/Amazon_Logo.webp" />
                <a className=' underline px-3 text-center text-[0.9rem] mt-3 font-medium' href="#">Amazon Advertising</a>
              </div>
              <div className='w-52 h-52 border border-zinc-500 flex flex-col items-center overflow-hidden bg-white cursor-pointer rounded-xl'>
                <img className='w-full' src="https://www.gonukkad.com/seller-support/images2/New%20folder/Flipkart_Logo.webp" />
                <a className=' underline px-3 text-center text-[0.9rem] mt-3 font-medium' href="#">Flipkart Advertising</a>
              </div>
              <div className='w-52 h-52 border border-zinc-500 flex flex-col items-center overflow-hidden bg-white cursor-pointer rounded-xl'>
                <img className='w-full' src="https://www.gonukkad.com/seller-support/images2/New%20folder/Meesho_Logo.webp" />
                <a className=' underline px-3 text-center text-[0.9rem] mt-3 font-medium' href="#">Meesho Advertising</a>
              </div>
              <div className='w-52 h-52 border border-zinc-500 flex flex-col items-center overflow-hidden bg-white cursor-pointer rounded-xl'>
                <img className='w-full' src="https://www.gonukkad.com/seller-support/images2/New%20folder/Jiomart_Logo.webp" />
                <a className=' underline px-3 text-center text-[0.9rem] mt-3 font-medium' href="#">Jiomart Advertising</a>
              </div>
              <div className='w-52 h-52 border border-zinc-500 flex flex-col items-center overflow-hidden bg-white cursor-pointer rounded-xl'>
                <img className='w-full' src="https://www.gonukkad.com/seller-support/images2/New%20folder/Ebay_Logo.webp" />
                <a className=' underline px-3 text-center text-[0.9rem] mt-3 font-medium' href="#">Ebay Advertising</a>
              </div>
          </div>
      </div>
     </div>
     <div className='py-20 bg-[#c0e6ff52] flex items-center flex-col'>
      <h1 className='w-full text-center conttalknumber sm:text-8xl sm:font-semibold'>Let's Talk Numbers</h1>
      <p className='text-lg mt-1'>Experience and Mindset in Building Success</p>
      <div className='w-20 h-1 mt-3 bg-red-400'></div>
      <p className='w-[70%] mt-5 text-[1.2rem] text-center'>To derive the expected results, it is vital to have a clear path and stay focused that will assist you in achieving your goals. Our vision is to leverage the full potential of the Internet to deliver measurable outcomes to our clients.</p>
      <div className='sm:w-[75%] contcard min-h-40 sm:mt-8 flex relative justify-center'>
        <div className='sm:w-1/4 contcardtext contcardtext1 gap-3 flex items-center justify-center sm:h-40 border border-[#8878E8] absolute sm:top-0 bg-white sm:left-5 rounded-2xl'>
          <div>
            <img className='sm:h-10 contcardimg' src="https://www.gonukkad.com/seller-support/images2/order.svg"/>
          </div>
          <div>
            <p className='sm:text-4xl font-semibold'>8K +</p>
            <p>Client</p>
          </div>
        </div>
        <div className='sm:w-1/4 contcardtext contcardtext2 gap-3 flex items-center justify-center sm:h-40 border border-[#8878E8] rounded-2xl absolute sm:top-0 sm:left-[23%] bg-white'>
          <div>
            <img className='sm:h-10 contcardimg' src="https://www.gonukkad.com/seller-support/images2/experience.svg"/>
          </div>
          <div>
            <p className='sm:text-4xl font-semibold'>8 +</p>
            <p>Years Experience</p>
          </div>
        </div>
        <div className='sm:w-1/4 contcardtext contcardtext3 gap-3 flex items-center justify-center sm:h-40 border border-[#8878E8] rounded-2xl absolute sm:top-0 sm:left-[43%] bg-white'>
          <div>
            <img className='sm:h-10 contcardimg' src="https://www.gonukkad.com/seller-support/images2/client.svg"/>
          </div>
          <div>
            <p className='sm:text-4xl font-semibold'>8L +</p>
            <p>Daily Order</p>
          </div>
        </div>
        <div className='sm:w-1/4 contcardtext contcardtext4 gap-3 flex items-center justify-center sm:h-40 border border-[#8878E8] rounded-2xl absolute sm:top-0 sm:left-[66%] bg-white'>
          <div>
            <img className='sm:h-10 contcardimg' src="https://www.gonukkad.com/seller-support/images2/revenue.svg"/>
          </div>
          <div>
            <p className='sm:text-4xl font-semibold'>9Cr +</p>
            <p>Revenue</p>
          </div>
        </div>
      </div>
     </div>
     <Footer/>
     </div>
  )
}

export default Contact