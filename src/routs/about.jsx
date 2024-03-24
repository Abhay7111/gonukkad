import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import Img from '../components/img'

function About() {
  return (
    <div>
     <div className='relative z-50 bg-white'><Nav/></div>
     <div className='flex relative z-20 bg-white items-center justify-around py-10 gap-10'>
      <h1 className='text-7xl font-semibold'>This is <br />Our Story</h1>
      <p className='w-1/2 font-medium px-10'>Gonukkad, founded in Gurgaon, has emerged as the city's premier account management agency, specializing in eCommerce intelligence, sales optimization, and marketplace management. <br /> <br /> Through our experience of selling in numerous categories on Marketplaces such as Amazon, Flipkart and Meesho we have encountered a multitude of challenges and obstacles. Consequently, we have gained knowledge on how to rank quickly and inexpensively, obtain positive reviews that comply with Marketplace's TOS, reactivate listings that have been taken down due to competitor tactics, create optimized listings and images, and restore suspended accounts.</p>
     </div>
     <div className='w-full flex items-center justify-center h-[70vh] relative overflow-hidden'>
      <img src="https://www.gonukkad.com/wp-content/uploads/2023/05/business-team-gives-presentation-new-financial-project-business-partners-company.jpg" className=' fixed top-0 left-0 w-full object-cover h-full object-top z-0' />
      <div className=' w-16 h-16 bg-white relative rounded-full flex items-center justify-center'><i class=" scale-[1.8] text-blue-700 ri-play-large-fill"></i></div>
     </div>
     <div className='flex gap-5 justify-center relative bg-white py-20'>
      <div className='w-1/4 flex items-center flex-col '>
        <h1 className='pb-4 text-2xl font-medium'>Strategies by Experts</h1>
          <div className='h-1 w-20 bg-red-400 mb-5'></div>
          <img className='w-80 rounded-2xl border border-red-400' src="https://www.gonukkad.com/wp-content/uploads/2023/05/Strategies_by_Experts.jpg" />
          <p className=' px-6 mt-6 font-medium'>Unleash the power of proven strategies crafted by industry e-commerce experts to propel your business towards unrivaled success.</p>
      </div>
      <div className='w-1/4 flex items-center flex-col '>
        <h1 className='pb-4 text-2xl font-medium'>Reduce fixed Costs</h1>
          <div className='h-1 w-20 bg-red-400 mb-5'></div>
          <img className='w-80 rounded-2xl border border-red-400' src="https://www.gonukkad.com/wp-content/uploads/2023/05/Reduce_fixed_Costs.jpg" />
          <p className=' px-6 mt-6 font-medium'>Slash your fixed costs and boost your profitability with our innovative solutions designed to optimize your expenses and drive maximum efficiency.</p>
      </div>
     <Img/>
     </div>
     <div className=' flex items-center flex-col relative bg-[#e6f4ff] pt-16 pb-20'>
        <h1 className='text-4xl font-semibold mb-4'>Why should you choose Gonukkad?</h1>
        <div className='w-20 h-1 bg-red-400'></div>
        <div className='w-[70vw] rounded-3xl h-72 bg-violet-200 py-8 px-4 mt-10 flex items-start justify-center'>
          <div className='w-1/3 px-2 py-3'>
            <div className='flex items-center gap-3 font-medium'>
            <img src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/scale.png" />
            <h1>Consultation</h1>
            </div>
            <p>After we gather information about your specific situation, requirements, and preferences, we will present you with a proposal detailing the services we can offer and the associated costs. We will only collaborate with you if we are confident that we can genuinely enhance your profits.</p>
          </div>
          <div className='w-1/3 px-2 border-l border-zinc-600 py-2'>
            <div className='flex items-center gap-3 font-medium'>
            <img src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/potential.png" />
            <h1>Optimization</h1>
            </div>
            <p>Partnering with us to benefit from our extensive expertise and experience is the optimal choice for enabling you to concentrate on developing your brand and business, we will provide you with the greatest opportunity to succeed from the outset.</p>
          </div>
          <div className='w-1/3 px-2 border-l border-zinc-600 py-2'>
            <div className='flex items-center gap-3 font-medium'>
            <img src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/comprehensive.png" />
            <h1>Evolution</h1>
            </div>
            <p>Merely advancing is insufficient. Sustaining one's lead is crucial. Change is constant and brings forth fresh obstacles and prospects. Collaborating with a team of Amazon specialists may determine the distinction between triumph and defeat.</p>
          </div>
        </div>
     </div>
     <div className='flex relative bg-white py-20'>
      <Img/>
        <div className='w-1/2 min-h-20 flex items-center justify-center'>
          <img className='w-[83%]' src="https://www.gonukkad.com/wp-content/uploads/2023/05/Premium-account-management.jpg" />
        </div>
        <div className='w-1/2 min-h-20 font-medium'>
          <h1 className='text-4xl mb-10'>Our Journey</h1>
          <p className=' pr-20'>In 2019, we began our journey on Amazon and learned from our mistakes, including dealing with accounts and listing suspensions and shipping issues. After many ups and downs, we emerged victorious.
            <br />
            <br />
            People often ask us why we want to help others succeed on Marketplaces like Amazon, Flipkart and Meesho. Our response is simple: why not?
            <br />
            <br />
            There are countless great products out there that can positively impact people's lives, but they need effective management and marketing on Marketplaces to reach their full potential. We have gained extensive experience and expertise over the years, allowing us to offer great value to other brands looking to succeed on Amazon, Flipkart or Meesho.
            <br />
            <br />
            Partnering with us means tapping into our knowledge and proven systems for selling well on all marketplaces. We work with physical product brands that may not have experience or proficiency in selling on different marketplaces, but have great products that can succeed with our help.
            <br />
            <br />
            Think of it like hiring the best Dal Bati Churma chef in town to prepare your meal instead of spending 10,000 hours learning to prepare yourself. Every marketplace is a complex platform with its own rules and secrets, and navigating it successfully takes significant time, effort, and resources. Our team has successfully achieved what you are trying to do, and we are here to guide you.
          </p>
        </div>
     </div>
     <div className='flex flex-col relative items-center pt-10 pb-20 bg-white'>
      <div className='w-[95%] min-h-32 rounded-3xl bg-[#1a1a1f] py-10'>
      <Img/> 
        <div className='mt-20 '>
          <h1 className='text-zinc-100 text-5xl font-semibold w-full text-center'>Why you should Gonukkad for seller support services?</h1>
        </div>
        <div className='flex flex-wrap text-zinc-300 px-7 gap-8 mt-10 justify-around'>
          <div className='w-[43%] p-5 min-h-20 rounded-xl'>
            <div className='flex gap-3 font-medium'>
            <img className='h-7 bg-white p-[2px] rounded-full' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/central-account.webp" />
            <h1 className='text-[1.1rem]'>Knowledge and Experience</h1>
            </div>
            <p className='mt-3 leading-5 pr-12'>Choose Gonukkad for seller support services and benefit from our team's extensive knowledge and experience in the e-commerce industry. Our experts understand the intricacies of online selling platforms and can provide tailored solutions to meet your specific needs.</p>
          </div>
          <div className='w-[43%] p-5 min-h-20 rounded-xl'>
            <div className='flex gap-3 font-medium'>
            <img className='h-7 bg-white p-[2px] rounded-full' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/listing-optimization.webp" />
            <h1 className='text-[1.1rem]'>Multichannel Support</h1>
            </div>
            <p className='mt-3 leading-5 pr-12'>Gonukkad offers comprehensive multichannel support to ensure your success across various platforms. Whether you're selling on Amazon, eBay, Flipkart, or other major marketplaces, our services cover a wide range of platforms to help you maximize your sales potential.</p>
          </div>
          <div className='w-[43%] p-5 min-h-20 rounded-xl'>
            <div className='flex gap-3 font-medium'>
            <img className='h-7 bg-white p-[2px] rounded-full' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/seo.webp" />
            <h1 className='text-[1.1rem]'>Account Management</h1>
            </div>
            <p className='mt-3 leading-5 pr-12'>Our seller support services include dedicated account management, where our experts work closely with you to understand your business goals and provide personalized assistance. From product listing optimization to inventory management, we offer end-to-end support to streamline your operations.</p>
          </div>
          <div className='w-[43%] p-5 min-h-20 rounded-xl'>
            <div className='flex gap-3 font-medium'>
            <img className='h-7 bg-white p-[2px] rounded-full' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/brand-content.webp" />
            <h1 className='text-[1.1rem]'>Sales Optimization</h1>
            </div>
            <p className='mt-3 leading-5 pr-12'>With Gonukkad's seller support services, you can tap into our expertise in sales optimization strategies. We can help you identify opportunities to boost your sales, optimize your pricing strategy, and implement effective marketing campaigns to drive traffic and conversions.</p>
          </div>
          <div className='w-[43%] p-5 min-h-20 rounded-xl'>
            <div className='flex gap-3 font-medium'>
            <img className='h-7 bg-white p-[2px] rounded-full' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/product-listing.webp" />
            <h1 className='text-[1.1rem]'>Competitive Analysis:</h1>
            </div>
            <p className='mt-3 leading-5 pr-12'>Stay ahead of the competition with our in-depth competitive analysis. We analyze market trends, competitor strategies, and customer preferences to provide you with valuable insights that can inform your business decisions and help you outperform your competitors.</p>
          </div>
          <div className='w-[43%] p-5 min-h-20 rounded-xl'>
            <div className='flex gap-3 font-medium'>
            <img className='h-7 bg-white p-[2px] rounded-full' src="https://www.gonukkad.com/wp-content/themes/myvgolocal/all-pages/images/brand-reg.webp" />
            <h1 className='text-[1.1rem]'>Excellent Seller Support</h1>
            </div>
            <p className='mt-3 leading-5 pr-12'>At Gonukkad, we prioritize excellent Seller Support. Our seller support team is readily available to address your queries, resolve issues, and provide guidance throughout your selling journey. We are committed to ensuring your satisfaction and success as a seller.</p>
          </div>
        </div>
      </div>
     </div>
     <Footer/>
     </div>
  )
}

export default About