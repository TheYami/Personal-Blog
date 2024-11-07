import React from 'react'
import profile from '.././assets/img/profile.jpg'

function HeroSection() {
  return (
    <div className='bg-[#F9F8F6] text-center lg:px-24 xl:px-32 py-10 lg:py-16 px-4 flex flex-col gap-10 lg:flex-row lg:gap-16 lg:items-center'>

        <div className='flex flex-col gap-6 lg:text-right'>
            <h1 
                className='font-semibold text-[40px] leading-[48px] font-[Poppins] text-[#26231E]'
                >
                    Stay <br className='hidden lg:block'/>
                    Informed, <br className='hidden lg:block'/>
                    Stay Inspired
            </h1>

            <h2
                className='font-medium text-base leading-6 font-[Poppins] text-[#75716B] '
                >
                    Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
            </h2>
        </div>

        <div>
            <img src={profile} alt="profile image" className='h-[470px] object-cover rounded-xl'/>
        </div>

        <div className='text-left'>
            <h4 
                className='font-medium text-xs leading-5 font-[Poppins] text-[#75716B]'
                >
                    -Author
            </h4>

            <h2 
                className='font-semibold text-2xl leading-8 font-[Poppins] text-[#43403B] mb-3'
                >
                    Thompson P.
            </h2>

            <h3
                className='font-medium text-base leading-6 font-[Poppins] text-[#75716B] xl:w-[60%]'
                >
                    I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.<br/><br/> 
                    When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
            </h3>
        </div>
    </div>
  )
}

export default HeroSection