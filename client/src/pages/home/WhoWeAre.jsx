import React from 'react'

export default function WhoWeAre() {
  return (
    <>
    <div className='text-white bg-(--landingPgBg) p-2 py-10 md:p-10'>
    <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row md:wrap items-center justify-between gap-5'>
        <div className='md:w-[45%]'>
          <button className='bg-(--signupBtnBg) text-2xl rounded-full px-10 py-2 md:text-xl cursor-pointer'>
            Who Are we
          </button>
          <span>
            <h1 className='text-3xl py-6'>Reclaiming Your Time with <br/> Professional Laundry<br/> Solutions</h1>
            <p className='text-xs md:text-sm'>We started Obiwan Laundry with one simple mission: to end the endless chore of <br/> laundry. We understand that your time is valuable, and laundry day shouldn't<br/> consume your evenings and weekends.</p>
          </span>
        </div>
        <div className='md:w-[45%]'>
          <img src="/Rectangle 1.png" alt=""  className='transition-transform duration-300 hover:scale-102'/>
        </div>
      </div>
    </div>
    </div>
    </>
    
  )
}
