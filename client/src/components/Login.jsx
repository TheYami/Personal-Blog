import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <Navbar/>

        <div className='px-4 pt-14 bg-[#F9F8F6] lg:flex lg:items-center lg:justify-center'>
            <div className='bg-[#EFEEEB] px-4 lg:px-32 py-10 lg:py-16 text-center flex flex-col gap-6 lg:w-1/2 rounded-2xl'>
                <h2 className='text-[#26231E] text-4xl font-semibold font-[Poppins]'>Log in</h2>

                <form>
                    <div className='flex flex-col text-left gap-6'>
                        <div className='flex flex-col font-[Poppins]'>
                            <label 
                                htmlFor="email"
                                className='text-[#75716B] '>
                                    Email
                            </label>

                            <input 
                                type="email" 
                                placeholder='Email'
                                className = "px-4 py-3 rounded-lg border border-[#DAD6D1] placeholder:text-[#75716B] outline-none " 
                            />
                        </div>
                        
                        <div className='flex flex-col font-[Poppins]'>
                            <label 
                                htmlFor="passwaord"
                                className='text-[#75716B] '>
                                    Password
                            </label>

                            <input 
                                type="password" 
                                placeholder='Password'
                                className = "px-4 py-3 rounded-lg border border-[#DAD6D1] placeholder:text-[#75716B] outline-none " 
                            />
                        </div>

                        <div className='flex items-center justify-center'>
                            <button 
                                type='submit'
                                className='bg-[#26231E] text-white px-10 py-3 rounded-full 
                                            hover:scale-105 transition-all duration-300 ease-in-out'>
                                    Log in
                            </button>
                        </div>
                    </div>
                </form>

                <p className='text-[#75716B]'>Don’t have any account?
                            <span className='underline pl-3 text-[#26231E] cursor-pointer'>
                                <Link to={'/sign-up'}>Sign up</Link>
                            </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login