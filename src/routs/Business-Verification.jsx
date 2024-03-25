import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import Img from '../components/img'
import Featurs from '../featurs'

function BusinessVerification() {
  return (
    <div>
     <Nav/>
     <div className='w-full flex flex-col items-center h-fit bggradiyant'>
      <Img/>
        <h1 className='w-full text-center text-5xl pt-20 font-semibold '>Know our verification process</h1>
        <p className='w-[80%] mt-10 font-medium tracking-wide'>At Gonukkad, we take utmost care to ensure that all information is thoroughly checked and kept up-to-date before proceeding with the verification process. Our commitment to accuracy and precision guarantees that only reliable and current data is used during the verification process. Rest assured, your information is in safe hands, and we prioritize maintaining the highest standards of quality and security throughout the verification procedure.</p>
        <div className='flex w-[95%] h-60 overflow-hidden mt-10 rounded-xl'>
          <div className='w-[70%] h-full flex items-center justify-center flex-col'>
              <div className=' w-[70%] rounded-2xl h-2 flex items-center justify-between bg-[#AA9FEF]'>
                <div className='w-14 h-14 btn_1 hover:bg-[#195180] relative z-30 cursor-pointer text-xl font-medium bg-white transition-all flex items-center justify-center rounded-full hover:shadow-xl'> <span className='hover:text-zinc-100 w-full h-full flex items-center justify-center rounded-full span1'>1</span> <span className='absolute text-[0.9rem] leading-none top-[115%] hover:text-zinc-700'>Discussin</span></div>
                <div className='w-14 h-14 btn_2 hover:bg-[#195180] relative z-30 cursor-pointer text-xl font-medium bg-white transition-all flex items-center justify-center rounded-full hover:shadow-xl '> <span className='hover:text-zinc-100 w-full h-full flex items-center justify-center rounded-full span2'>2</span> <span className='absolute text-[0.9rem] leading-none top-[115%] hover:text-zinc-700'>KYC</span></div>
                <div className='w-14 h-14 btn_3 hover:bg-[#195180] relative z-30 cursor-pointer text-xl font-medium bg-white transition-all flex items-center justify-center rounded-full hover:shadow-xl '> <span className='hover:text-zinc-100 w-full h-full flex items-center justify-center rounded-full span3'>3</span> <span className='absolute text-[0.9rem] leading-none top-[115%] hover:text-zinc-700'>Physical <br /> Verification</span></div>
                <div className='w-14 h-14 btn_4 hover:bg-[#195180] relative z-30 cursor-pointer text-xl font-medium bg-white transition-all flex items-center justify-center rounded-full hover:shadow-xl '> <span className='hover:text-zinc-100 w-full h-full flex items-center justify-center rounded-full span4'>4</span> <span className='absolute text-[0.9rem] leading-none top-[115%] hover:text-zinc-700'>Contract <br />Execution</span></div>
                <div className='w-14 h-14 btn_5 hover:bg-[#195180] relative z-30 cursor-pointer text-xl font-medium bg-white transition-all flex items-center justify-center rounded-full hover:shadow-xl '> <span className='hover:text-zinc-100 w-full h-full flex items-center justify-center rounded-full span5'>5</span> <span className='absolute text-[0.9rem] leading-none top-[115%] hover:text-zinc-700'>Merchant <br />Launch</span></div>
                <div className=' absolute progress_bar bg-[#195180] h-full z-0 w-[10%]'></div>
              </div>
          </div>
          <div className='w-[50%] h-full mt-12'>
            <div className=' cont_1'>
              <div className='w-full h-full flex items-center justify-center flex-col'>
                <h1 className='text-5xl text-center font-semibold mb-3'>Dicsussion</h1>
                <p className='text-center px-3 text-[0.9rem] font-medium tracking-wide'>Merchant launch gives access to the merchant to showcase product or service to the market, enabling merchants to offer it to customers for purchase or use</p>
            </div>
            </div>
            <div className=' hidden cont_2'>
            <div className='w-full h-full flex items-center justify-center flex-col'>
                <h1 className='text-5xl text-center font-semibold mb-3'>KYC</h1>
                <p className='text-center px-3 text-[0.9rem] font-medium tracking-wide'>KYC (Know Your Customer) is a crucial process for businesses to verify the identities of their customers, ensuring compliance with regulations and preventing financial crimes</p>
            </div>
            </div>
            <div className=' hidden cont_3'>
            <div className='w-full h-full flex items-center justify-center flex-col'>
                <h1 className='text-5xl text-center font-semibold mb-3'>Physical Verification</h1>
                <p className='text-center px-3 text-[0.9rem] font-medium tracking-wide'> Physical verification involves on-site inspections and assessments to validate the physical existence of the business</p>
            </div>
            </div>
            <div className=' hidden cont_4'>
            <div className='w-full h-full flex items-center justify-center flex-col'>
                <h1 className='text-5xl text-center font-semibold mb-3'>Contract Execution</h1>
                <p className='text-center px-3 text-[0.9rem] font-medium tracking-wide'> Contract execution is the final stage of the contracting process, where parties sign the agreement, legally binding them to fulfill their obligations as outlined in the contract</p>
            </div>
            </div>
            <div className=' hidden cont_5'>
            <div className='w-full h-full flex items-center justify-center flex-col'>
                <h1 className='text-5xl text-center font-semibold mb-3'>Merchant Launch</h1>
                <p className='text-center px-3 text-[0.9rem] font-medium tracking-wide'> Merchant launch gives access to the merchant to showcase product or service to the market, enabling merchants to offer it to customers for purchase or use</p>
            </div>
            </div>
          </div>
        </div>
     </div>
     <div data-aos="fade-in" className='flex py-20'>
        <div className='w-[60%] pl-10'>
          <h1 className='font-semibold mb-2 text-3xl ml-11'>FAQs</h1>
          <div className='flex flex-col gap-5 pl-10 h-[100%]'>
          <div>
          <h2 className='font-medium'>Q. I am not available at the Store, can I still verify?</h2>
          <p><span className='font-medium'>A.</span> No. You should be physically present at your store in order to complete the verification process. This is done to ensure that only genuine businesses are verified. You can reschedule the verification visit at a convenient time.</p>
          </div>
          <div>
          <h2 className='font-medium'>Q.Can I verify through Video Verification?</h2>
          <p><span className='font-medium'>A.</span> No. Unfortunately Video Verification is not an accurate way to verify a physical business. To ensure the verification of authentic businesses, it is essential for you to be physically present at your store during the verification process, and if needed, you can arrange a more suitable time for the verification visit.</p>
          </div>
          <div>
          <h2 className='font-medium'>Q.Can I verify through Whatsapp Video Call?</h2>
          <p><span className='font-medium'>A.</span>No. This is again not an accurate method to verify a physical business. To complete the verification process successfully, it is essential to be physically present at your store. This measure is in place to guarantee the verification of genuine businesses. If the initial visit is inconvenient, you can reschedule it to a more suitable time.</p>
          </div>
          <div>
          <h2 className='font-medium'>Q. I am from Agra, is verification possible at my location?</h2>
          <p><span className='font-medium'>A.</span>Yes. We are located in more than 200 cities across India, so be rest assured, we will be able to complete the physical verification of your business.</p>
          </div>
          </div>
        </div>
        <div className='w-[40%] flex items-center justify-center px-6'>
          <img className='rounded-xl mt-10' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/verification/images/1.jpg" />
        </div>
     </div>
     <Footer/>
     <Featurs/>
     </div>
  )
}

export default BusinessVerification