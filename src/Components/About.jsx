import React from 'react'

function About() {
  return (
<div className='bg-[#121212] text-white'>
    <div className='flex justify-between items-center font-[Montserrat] text-[15px]   pt-24 px-8'>
      <div className='flex flex-col-3 gap-x-40 '>
        <ul><li className='text-[#8F8F8F]'>Product</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Figma Plugin</li>
        <li>Changelog</li>
        <li>Support</li></ul>
        <ul>
            <li className='text-[#8F8F8F]'>Legal</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>DPA</li>
            <li>SOC-2</li>
            <li>Security</li>
        </ul>
        <ul>
            <li className='text-[#8F8F8F]'>Guides</li>
            <li>Current for Startups</li>
            <li>Current for Enterprise</li>
            <li>Current for Agencies</li>
        </ul>
      </div>
      <div><ul>
        <li className='text-[#8F8F8F]'>Social</li>
        <li>Twitter</li>
        <li>Youtube</li>
        <li>Discord</li></ul></div>
       
    </div>
     <hr className='class-[#8F8F8F] w-[95%] mx-auto mt-12'/>
     <div className='flex justify-between items-center text-[14px] px-8 mt-4'>
     <p><span className='text-[#8F8F8F]'>Designed and built by</span> Logic + Rhythm</p>
<p className='text-[#8F8F8F]'>© 2024 Current</p></div>
     </div>
  )
}

export default About
