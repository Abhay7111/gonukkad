import React from 'react'
import { Link } from 'react-router-dom'

function Nomatch() {
  return (
    <div>
     <section className="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center text-[#195180]">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2 text-xl font-medium">
		Look like you're lost
		</h3>
		
		<p className='text-lg'>the page you are looking for not avaible!</p>
		
		<Link to="../" className="link_404 font-semibold rounded-lg hover:bg-green-600">Go Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Nomatch