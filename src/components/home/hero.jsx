import React from 'react'
import Nav from '../nav.jsx'
import Footer from '../Footer.jsx'
import { Link } from 'react-router-dom'
import Profiles from '../profiles.jsx'
import Img from '../img.jsx'

function Hero() {
     const profiledata = [
          {
               img:"https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/ecommerce-CG-HmYVz.webp",
               title:"ECOMMERCE",
               icon:"https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/ecommerce-BvxQtBES.svg",
               heading:"Sell Your Products Online",
               dis:"List your products on multiple platforms and make your products stand out by utilizing best-in-class account management services who will optimize your listings and boost product visibility.",
               style:"",
               textstyle:"items-end pl-32",
               headingstyle:"text-end",
          },
          {
               img:"https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/webiste-BG4zoCtq.webp",
               title:"WEBSITES",
               icon:"https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/website-CtaaAkgm.svg",
               heading:"Get a Website or Online Store",
               dis:"Are you a merchant looking to expand your online presence and drive more customers to your business? Look no further! We create an attractive web page for you to revolutionize your digital strategy and help you reach new heights. With our cutting-edge webpage creation service, we specialize in crafting personalized and engaging online experiences that captivate your target audience. Our team of expert designers and developers will work closely with you to understand your unique brand identity and create a stunning webpage that showcases your products and services like never before.",
               style:"flex-row-reverse",
               textstyle:"",
               headingstyle:"",
          },
          {
               img:"https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/marketing-team-BH_27RQc.webp",
               title:"MARKETING TEAM",
               icon:"https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/marketing-DAv7F7T7.svg",
               heading:"Turbocharge Your Marketing",
               dis:"Meet your customers at the right time, at the right place with our marketing expertise. We make the most of every opportunity for you while you focus on creating magic moments for your customers. Our toolkit includes Google ads, attractive webpage with one time Photoshoot and Introductory Video shoot for your Business, Keywords Management, Merchant Services to be added on Google search and maps, QR standee for accepting Reviews for your business and one dedicated business number (IVR) for Lead management",
               style:"",
               textstyle:"items-end pl-32 ",
               headingstyle:"text-end",
          },
          {
               img:"https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/business-listing-CDHIvl3z.webp",
               title:"GOOGLE MY BUSINESS",
               icon:"https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/google-business-DZYsEYzA.svg",
               heading:"Control Your Business Listings",
               dis:"Have you ever wondered how amazing it would be if all the people looking up your business on Google Search ended up as your customers? Well, we can help you realize this dream by managing your Google Business Profile for you. Our team of experts takes care of all the aspects of your listing - store hours, reviews, offers, you name it! You can relax and focus on your business while we manage your business profile at all times.",
               style:"flex-row-reverse",
               textstyle:"",
               headingstyle:"text-start",
          },
     ]
  return (
    <div className='relative'>
     <div className=' absolute w-full h-full'>'
          <img className='h-20 absolute top-[20%]' src="https://www.pracharexpert.com/assets/images/banner/short/04.png"/>
          <img className='h-28 absolute top-[50%] right-10' src="https://www.pracharexpert.com/assets/images/image/Small%20bll.png"/>
          <img className='absolute top-[40%] left-[40%]' src="https://www.pracharexpert.com/assets/images/banner/short/05.png"/>
     </div>
     <Nav/>
     <Img/>
     <div className='relative min-h-screen flex'>
          <div className='w-1/2 pl-7 pt-20 flex flex-col justify-center'>
               <h1 className='w-full text-7xl relative font-semibold'><span className='text-[1rem] absolute bottom-full'>Get Everything</span> You Need to <span className='text-[#01335E]'>Manage & Grow</span> Your <span className=''>Restaurant</span></h1>
               <p className='mt-10 font-medium px-3'>Your digital growth accelerator is the Prachar Expert. For a strong online presence, unleash success with SEO, SMM, and content mastery."</p>
               <p className=' font-medium w-full text-center rounded-lg mt-20 text-2xl'><Link className='bg-[#204e77] hover:text-white hover:bg-[#01335E] uppercase transition-all px-4 py-2 mr-10 rounded-xl' to="Contact">Get started</Link></p>
          </div>
          <div className=' relative'>
               <img className='h-screen object-cover' src="https://www.pracharexpert.com/assets/images/image/homepage.png"/>
               <img src="https://www.pracharexpert.com/assets/images/image/logo-1.png" className=' top-16 h-32 absolute' />
               <img src="https://www.pracharexpert.com/assets/images/image/Group%203%20(2).png" className=' top-[82vh] h-32 absolute' />
          </div>
     </div>
     <div className=' relative flex mt-10 items-center'>
          <p className=' font-bold text-xl ml-9'>Trusted by Top Companies</p>
          <div className='overflow-x-auto w-full'>
               <div className='flex w-full justify-between'>
                    <img className='h-40' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/ly-BVhWexRg.webp"/>
                    <img className='h-40' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/bs-BQmxFSVk.webp"/>
                    <img className='h-40' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/ani-DpFqfSP-.webp" />
                    <img className='h-40' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/print-B03plfQO.webp" />
                    <img src="" />
                    <img src="" />
               </div>
          </div>
     </div>
     <div className='relative flex items-center px-10 mt-20 gap-5 justify-around'>
          <div className=' w-1/2 max-h-[80vh]'>
               <img src="https://www.gonukkad.com/wp-content/themes/myvgolocal/home-page-tailwind/assets/small-business-DK-GUXQY.webp" />
          </div>
          <div className='w-1/3 max-h-[80vh] p-4'>
               <h1 className='text-3xl font-semibold'>Best Platform for Small Businesses</h1>
               <p className='mt-5 text-[0.93rem]'>Gonukkad is an initiative that supports business owners with creating, growing and maintaining their online presence. We manage your marketing campaigns end-to-end to provide both online and offline engagement with your clients, both existing and potential, leading to increased sales. Come and join the Gonukkad family where many merchants have already grown their conversions 1.5 times using our expertise and tools!
               <Link className='underline underline-offset-2 ml-2' to="About"> Now more</Link></p>
               
          </div>
     </div>
     <div className='relative mt-32'>
          <h1 className=' text-4xl mb-20 w-full text-center font-semibold'>Service We O<span className='underline underline-offset-4'>ffe</span>r</h1>
          {profiledata.map((item, index)=>(
               <Profiles profiledata={item}/>
          ))}
     </div>
     <Footer/>
    </div>
  )
}

export default Hero