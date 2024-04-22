import React from 'react'
import Vector from '../assets/Vector.svg'
function Watch() {
  return (
    <div className='flex flex-col items-center bg-[#121212]  font-[Montserrat] text-center gap-y-8 pt-28 pb-20'>
        <h1 className='text-[64px] text-white font-bold '>Each week gets summarized <br />
and shared, automatically</h1>
<p className='text-[18px] text-[#8F8F8F] '>At the end of each week, our <span className='text-white'>AI-powered </span>newsletter—“The <br />
Weekly Drop”—creates a summary of all the updates your <br />
team shared in a format that’s concise and easy to consume.</p>
      <button className='flex gap-2 text-white text-[18px] border-solid rounded-3xl border-[2px] px-4 py-3 border-[#333333] items-center'><img src={Vector} alt="" className='mt-[-5px]' /> Watch video</button>
    </div>
  )
}

export default Watch
