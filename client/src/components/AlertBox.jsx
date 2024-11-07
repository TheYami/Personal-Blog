import React from 'react'
import { X } from 'lucide-react';

function AlertBox({setLoginAlert}) {
  return (
    <div className='fixed inset-0 min-h-screen flex items-center justify-center bg-black bg-opacity-50 font-[Poppins] px-4 lg:px-0'>
        <div className='pt-4 px-4 lg:px-6 lg:pt-6 pb-10 rounded-2xl bg-[#F9F8F6] flex flex-col gap-6'>
            <div className='flex justify-end'>
                <X 
                    onClick={()=>{setLoginAlert(false)}}
                    className='cursor-pointer transition-transform duration-300 hover:rotate-90 ease-in-out'
                />
            </div>

            <div className='flex flex-col gap-4 lg:gap-10 items-center text-center lg:px-10'>
                <h2 className='text-[#26231E] font-semibold text-2xl lg:text-4xl'>Create an account to<br className=' hidden lg:block'/> continue</h2>

                <button 
                    className='bg-[#26231E] text-white py-3 px-10 rounded-full hover:scale-105 transition-all duration-300 ease-out'>
                        Create account
                </button>

                <p 
                    className='text-[#75716B]'
                        >Already have an account? 

                        <span className='text-[#26231E] underline pl-3'>
                            <a href="#">Log in</a>
                        </span>
                </p>
            </div>

        </div>

    </div>
  )
}

export default AlertBox