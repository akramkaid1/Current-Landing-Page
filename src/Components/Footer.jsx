import React from 'react'
import Pic1 from '../assets/1.svg'
import Pic2 from '../assets/2.svg'
import Pic3 from '../assets/3.svg'
import Pic4 from '../assets/4.svg'
import Pic5 from '../assets/5.svg'
import Pic6 from '../assets/6.svg'

function Footer() {
  return (
    <div>
      <ul className='flex justify-around items-center mt-8 pb-8'>
        <li className='border-solid border-3 border-[#5B6436]'><img src={Pic1} alt="" /></li>
        <li className='border-solid border-3 border-[#5B6436]'><img src={Pic2} alt="" /></li>
        <li className='border-solid border-3 border-[#5B6436]'><img src={Pic3} alt="" /></li>
        <li className='border-solid border-3 border-[#5B6436]'><img src={Pic4} alt="" /></li>
        <li className='border-solid border-3 border-[#5B6436]'><img src={Pic5} alt="" /></li>
        <li className='border-solid border-3 border-[#5B6436]'><img src={Pic6} alt="" /></li>
      </ul>
    </div>
  )
}

export default Footer
