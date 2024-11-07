import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';

import { Info } from 'lucide-react';

function NotFoundPage() {
  return (
    <div className='min-h-screen flex flex-col font-[Poppins]'>
        <Navbar/>
        <div className='flex flex-grow items-center justify-center'>
            <div className='flex flex-col items-center gap-6'>
                <Info className='size-12'/>
                <h2 className='font-bold text-2xl'>Page Not Found</h2>
                <Link to={'/'}
                     className='py-3 px-10 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 ease-in-out'>
                        Go to Homepage
                </Link>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default NotFoundPage