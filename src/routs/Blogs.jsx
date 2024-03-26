import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Img from '../components/img'

function Blogs() {
  // const [apis, setAPIs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchAPIs();
  // }, []);

  // const fetchAPIs = async () => {
  //   try {
  //     const response = await fetch('https://api.publicapis.org/entries');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const data = await response.json();
  //     setAPIs(data.entries);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
     <Nav/>
     <div className='sm:h-[80vh] mt-7 w-full pb-7 flex items-center justify-center'>
      <Img/>
        <div className='sm:h-[400px] w-[85vw] border border-zinc-600 overflow-hidden rounded-3xl blogpgcont sm:flex '>
          <div className='sm:w-1/2 bolgpgfrstdv h-full flex flex-col items-center'>
            <p className='w-full sm:px-20 mt-16 text-[0.8rem] font-medium'>March 25, 2024</p>
            <h1 className='text-3xl sm:px-16 font-semibold'>Amazon Advertising Simplified: Maximising Your Marketing Potential</h1>
            <p className='w-full sm:px-16 mb-10 mt-2'>Content Team</p>
            <p className='text-start sm:px-16'>Discover the developments in Amazon advertising services to create impactful campaigns that will distinguish your brand from</p>
            <Link to="../error" className='w-full sm:px-20 text-red-400 font-medium'>Read More...</Link>
          </div>
          <div className='sm:w-1/2 p-3 h-full flex items-center justify-center'>
            <img className='h-[320px] object-cover rounded-2xl' src="https://www.gonukkad.com/wp-content/uploads/2024/03/Amazon-Advertising.webp" />
          </div>
        </div>
     </div>
     {/* <div className='flex gap-8 flex-col'>
      <h1>Public APIs Directory</h1>
      {apis.map(api => (
        <div key={api.API}>
          <h2>{api.API}</h2>
          <p>Description: {api.Description}</p>
          <p>Category: {api.Category}</p>
          <p>Auth: {api.Auth}</p>
          <p>HTTPS: {api.HTTPS ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div> */}
     <Footer/>
     </div>
  )
}

export default Blogs