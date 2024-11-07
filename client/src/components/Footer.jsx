import React from 'react'
import { Linkedin,Github  } from 'lucide-react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center gap-6 py-10 lg:py-16 px-4 lg:px-32 bg-[#EFEEEB] lg:flex-row lg:justify-between'>
        
            <ul className='flex gap-6 justify-center items-center'>
                <li>
                    <h3 className='text-base font-medium text-[#43403B]'>Get in touch</h3>
                </li>

                <li className='p-1 bg-[#43403B] rounded-full'>
                    <a href="#" >
                        <Linkedin className='text-white'/>
                    </a>
                </li>

                <li className='p-1 bg-[#43403B] rounded-full'>
                    <a href='#'>
                        <Github className='text-white'/>
                    </a>
                </li>

                <li className='p-2 bg-[#43403B] rounded-full'>
                    <a href='#'>
                        <FaGoogle className='text-white'/>
                    </a>
                </li>
            </ul>
        

        <Link to={'/'} className='text-base font-medium text-[#43403B] underline'>Home Page</Link>
    </footer>
  )
}

export default Footer