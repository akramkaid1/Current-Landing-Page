import React from 'react'
import emojis from '../assets/emojis.svg'
import Pic from '../assets/Pic.svg'
function Hero() {
  return (
    <div className='flex-col-2 items-center justify-center pb-10 relative'>
       
<h1 className='text-[64px] font-[Montserrat] font-bold pt-24 text-center'>Finally, all your team’s <br/>
    work in one place</h1>
    <p className='text-[16px] max-w-[60%] text-[#5B6436] text-center ml-[20%]'>Increase your team’s <span className='text-black'>speed,collaboration,</span> and <span className='text-black'> alignment</span> by giving everyone <br />an overview of the most important work happening across your company.</p>
<div className='ml-[37%] mt-6'>
    <button className='bg-[#1F19E1] text-white font-[Montserrat] px-8 py-3 rounded-3xl mr-[16px]'>Get started for free</button>
    <button className='bg-[#C6DF5D] border-solid border-[1px] border-[#5B6436] text-[#242424] font-[Montserrat] px-8 py-3 rounded-3xl'>Watch video</button>
</div>
<div className=''>
<p className='text-[16px] text-[#5B6436] text-center mt-4 '>No credit card required</p>
<img src={emojis} alt="" className='absolute mt-[-30px] ' />
</div>
<div className='flex flex-col  items-center'>
<img src={Pic} alt="" className=' mt-28' />
<p className='text-[18px] text-[#5B6436] mt-24 mx-auto font-semibold font-[Montserrat]'>YOU’RE IN GOOD COMPANY</p>
    </div>
    </div>
  )
}

export default Hero
