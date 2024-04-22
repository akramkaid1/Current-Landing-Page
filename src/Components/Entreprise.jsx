import React from 'react'
import Pic from '../assets/Pic5.svg'
import True from '../assets/True.svg'

function Entreprise() {
  return ( 
    <div className='bg-[#121212] pt-24 font-[Montserrat] pb-16'>
        <div className='w-[80%] mx-auto flex flex-col justify-center'>
      <img src={Pic} alt=""  className='mx-auto '/>
      <h1 className='font-bold text-white text-[64px]  text-center mx-auto mt-12'>Enterprise-ready <br />
        data protection</h1>
        <div className='flex flex-col-2 items-center justify-center gap-16 text-[#8F8F8F] '>
            <ul className='  flex flex-col gap-y-1'>
                <li className='flex gap-2'> <img src={True} alt="" /> SOC 2 Type 2 compliant</li>
                <li className='flex gap-2'> <img src={True} alt="" /> Enforce sign-in with SAML SSO</li>
                <li className='flex gap-2'> <img src={True} alt="" /> Encryption Key Management  <span className='rounded-3xl bg-[#333333] px-2 py-[2px] text-center'>soon</span></li>
            </ul>
            <ul className='  flex flex-col gap-y-1'>
            <li className='flex gap-2'> <img src={True} alt="" /> Industry standard data encryption</li>
            <li className='flex gap-2'> <img src={True} alt="" /> 100% AWS infrastructure</li>
            <li className='flex gap-2'> <img src={True} alt="" /> Self-hosted buckets   <span className='rounded-3xl bg-[#333333] px-2 py-[2px] text-center'>soon</span></li>
            </ul>
        </div>
        <button className='rounded-3xl bg-[#E5FF76] text-[#242424] text-center py-3 px-12 mx-auto text-[20px] mt-12'>Questions? Contact us →</button>

      </div>
    </div>
  )
}

export default Entreprise
