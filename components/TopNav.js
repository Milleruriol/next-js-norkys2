import React from 'react'
import {BsFillTelephoneFill, BsGeoAltFill} from 'react-icons/bs';

function TopNav() {
  return (
    <div className="lg:hidden columns-3 bg-amber-400 flex justify-between text-lg">
  <div className='p-4 flex align-center'>
  <BsFillTelephoneFill className="fill-red-800" size={'1.6rem'}/>
    <p className='pl-4 text-red-800 font-semibold'>Call Now</p>
    </div>
      <div className='p-4 flex align-center text-red-800' >
      <button class="navbar-burger flex items-center text-blue-600 p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
      </div>
      
      <div className='p-4 flex align-center text-red-800' >
      <p className='pr-4 text-red-800 font-semibold'>Address</p><BsGeoAltFill className="fill-red-800" size={'1.6rem'}/></div>
      

  
</div>
  )
}

export default TopNav