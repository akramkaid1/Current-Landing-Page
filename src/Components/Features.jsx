import React from 'react'
import Arrow from '../assets/Arrow.svg'
import icon1 from '../assets/Test1.svg'
import icon2 from '../assets/Test2.svg'
import icon3 from '../assets/Test3.svg'
import icon4 from '../assets/Test4.svg'
import icon5 from '../assets/Test5.svg'
import icon6 from '../assets/Test6.svg'

function Features() {
  return (
    <div className='bg-white w-[80%] mx-auto py-24 '>
        <h3 className='text-[#1F19E1] text-[16px] font-[Montserrat] font-semibold '>FEAUTURES</h3>
        <div className='flex justify-between items-center mt-4'>
            <h1 className='text-[40px] font-[Montserrat] text-[#242424]'>Everything to collaborate <br />
on work-in-progress</h1>
            <button className='flex items-center justify-between bg-[#242424] text-[white] rounded-3xl px-4 py-3  gap-x-2'> Explore features  <img src={Arrow} alt="" /></button>
        </div>
        <div className='flex flex-col-3 justify-between mt-14 font-[Montserrat] pb-12'>
            <div>
                <div>
                    <h3 className='text-[#242424] text-[18px]  font-semibold flex gap-x-2'> <img src={icon1} alt="" />  Weekly Reminders</h3>
                <p className='mt-2  text-[#686868]'>Establish team rituals around sharing with <br />
automated Slack reminders.</p>
                        </div>
                <div className='mt-8'>
                    <h3 className='text-[#242424] text-[18px]  font-semibold flex gap-x-2'> <img src={icon4} alt="" />  Comments, mentions, reactions</h3>
                <p className='mt-2 text-[#686868]'>All the functionalities to loop in the right <br />
people and provide constructive feedback.</p>
                        </div>
            </div>
            <div>
                <div>
                    <h3 className='text-[#242424] text-[18px] font-semibold flex gap-x-2'> <img src={icon2} alt="" />  Broadcast to Slack</h3>
                    <p className='mt-2 text-[#686868] '>Broadcast updates to Slack for your cross- <br />
functional partners to see.</p>
                </div>
                <div className='mt-8'>
                    <h3 className='text-[#242424] text-[18px] font-semibold flex gap-x-2 '  > <img src={icon5} alt="" /> Add Collaborators</h3>
                    <p className='mt-2 text-[#686868]'>Help others get visibility on their work by <br />
marking them as collaborators.</p>
                </div>
            </div>
            <div>
            <div>
                <h3 className='text-[#242424] text-[18px]  font-semibold flex gap-x-2'> <img src={icon3} alt="" />  Private Streams</h3>
                <p className='mt-2 text-[#686868]'>Create a private space to collaborate on <br />
before opening it up to the entire team.</p>
            </div>
            <div className='mt-8'> 
                <h3  className='text-[#242424] text-[18px]  font-semibold flex gap-x-2'> <img src={icon6} alt="" />Notifications</h3>
                <p className='mt-2 text-[#686868]'>Get notified about important activity <br />
directly in Slack, via email, or in app.</p>
            </div>
            </div>
        </div>
        </div>
  )
}


export default Features
