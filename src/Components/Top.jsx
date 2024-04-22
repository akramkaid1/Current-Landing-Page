import React from 'react'
import Logo from '../assets/Logo.svg'

function Top() {
  return (
    <div className='px-6 py-8'>
       <div className='flex justify-between items-center'>
     <div className=''><img src={Logo} alt="" /></div>
     <div >
        <ul className='flex items-center gap-x-8 text-[#242424] font-[Montserrat] text-[18px] font-semibold'>
        <li>Guides</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Support</li>
        <li>Changelog</li>
        <li><button>Sign in</button></li>
        <li><button className='text-[#F0F0F0] rounded-3xl px-3 py-2 bg-[#242424]'>Sign up</button></li>
        </ul></div>
    </div>
    </div>
  )
}

export default Top
