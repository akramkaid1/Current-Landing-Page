import React from 'react'
import Man from '../assets/Man.svg'
import Merc from '../assets/Mercury.svg'
import Droite from '../assets/droite.svg'
import Gauche from '../assets/gauche.svg'

function Carousel() {
  return (
    <div className='w-[80%]   pb-24  mx-auto  font-[Montserrat] pt-24'>
        <div className='flex '>
        <div> 
      <h3 className='text-[#1F19E1] text-[16px] font-[Montserrat] font-semibold  '>Customer Stories</h3>
      <h1 className='text-[40px] font-[Montserrat] text-[#242424]'>Teams with alignment <br /> on the latest work</h1>
      <div className='border-solid border-[0.2px] border-[#8F8F8F] rounded-lg mt-20  flex flex-col p-8 pb-3 items-start'>
        <p className='text-[16px] text-[#1E1E1E] '>“Current enables our entire team to align, share work, and support each other using <br />
the tools we use every day. Weekly Drops help build momentum and Streams <br />
enable anyone to see what is happening elsewhere as our team and product scales.”</p>
 <div className='flex items-center gap-x-2 justify-start mt-24'>
    <img src={Man} alt="" className='' />
    <div className='flex flex-col '>
        <p className='text-[#1E1E1E] text-[18px]'>Jonathan Simcoe</p>
        <p className='text-[#8F8F8F] text-[18px]'>Senior Product Designer</p>
    </div>
 </div>
      </div>
      </div>
      <div className='flex flex-col '>
        <div className='flex  items-center justify-center mt-20 '><button className='border-solid border-[0.2px] border-[#8F8F8F] rounded-lg  p-8'><img src={Gauche} alt="" /></button>
          <button className='border-solid border-[0.2px] border-[#8F8F8F] rounded-lg p-8'><img src={Droite} alt="" /></button></div>
          <img src={Merc} alt=""  className=' border-solid border-[0.2px] border-[#8F8F8F] rounded-lg  py-[123px] px-16 '/>
      </div>
</div></div>
  )
}

export default Carousel
