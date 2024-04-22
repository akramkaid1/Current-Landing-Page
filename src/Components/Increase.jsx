import React from 'react'
import Icon from '../assets/Icon5.svg'
import Email from '../assets/Email.svg'
import Click from '../assets/Click.svg'

function Increase() {
  return (
    <div className='bg-[#121212] w-[80%]mx-auto pt-24'>
      <div className=' flex flex-col items-center'>
        <img src={Icon} alt=""  className='size-20'/>
        <h1 className=' mt-8 font-[Montserrat] text-[40px] font-semibold text-white text-center'>Increase your team’s  <br />
        visibility and alignment</h1>
        <button className='bg-[#E5FF76] font-[Montserrat] rounded-[50px] px-52 py-4 text-[30px] text-center mt-12'>Start for free</button>
        <div className='flex '>
            <button  className='flex gap-2 text-[18px] font-[Montserrat] text-white items-center  border-solid border-[0.2px] border-[#8F8F8F] rounded-[50px] px-20 py-6'> <img src={Email} alt="" className='size-5' />Contact us</button>
            <button className='flex gap-2 text-[18px] font-[Montserrat] text-white items-center border-solid border-[0.2px] border-[#8F8F8F] rounded-[50px] px-20 py-6 '> <img src={Click} alt="" className='size-5' />Book a demo</button>
            
        </div>
      </div>
    
    </div>
  )
}

export default Increase
