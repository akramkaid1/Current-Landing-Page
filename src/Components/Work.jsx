import React from 'react'
import icons1 from '../assets/icons1.svg'
import icons2 from '../assets/icons2.svg'

function Work() {
  return (

    <div className='bg-[#121212] pt-24 flex justify-between items-center '>
      <img src={icons1} alt="" />
        <div className='flex flex-col items-center '>
      <h1 className='text-center text-white text-[64px] font-bold font-[Montserrat]'>Work happens all <br />
over the place</h1>
<p className='mt-8 text-[#8F8F8F]  font-[Montserrat] text-[18px] text-center '>Getting an overview of what’s happening is next to <br />
impossible. With Current, you no longer have to dig through <br />
Slack messages, get lost in Figma files, or hunt through <br />
emails to see what your team is working on.</p>
</div>
<img src={icons2} alt="" className='mt-[-100px]' />
    </div>
  )
}

export default Work
