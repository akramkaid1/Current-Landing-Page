import React from 'react'
import Pic from '../assets/Pic3.svg'
function Drop() {
  return (
    <div className='bg-[#121212]'>
    <div className='bg-[#414141] flex flex-col items-center pt-24 w-[70%] mx-auto'>
        <h3 className='text-[24px] text-white font-[Montserrat]'>Weekly Drop · May 15, 2023</h3>
        <p className='text-[18px] text-[white] font-[Montserrat] mt-14'>This week, Brent shared two mobile app explorations <br />
which address feedback on the UI, adds polish, and <br />
addresses several issues. Lea has been working on a new <br />
information architecture for the Dashboard. Lastly, Rachel <br />
has shared the Consumer Squad's Q2 roadmap.</p>
    <img src={Pic} alt="" className='mt-[-200px]' />
    </div>
    </div>
  )
}

export default Drop