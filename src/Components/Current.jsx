import React from 'react'
import Pic from '../assets/Pic2.svg'

function Current() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#121212] pt-24'>
        <div className='text-center'>
        <h1 className='text-[64px] font-bold font-[Montserrat] text-white'>Current lets you <br />
        see it all in one feed</h1>
        <p className='text-[18px] text-[#8F8F8F] mt-8'> Current integrates with the tools your team uses to get <br />
work done, and gives you a unified feed to share and view <br />
updates. All work in Current is organized into specific work <br />
streams, and easily searchable.</p>
      </div>
      <img src={Pic} alt=""  className='mt-14'/>
    </div>
  )
}

export default Current
