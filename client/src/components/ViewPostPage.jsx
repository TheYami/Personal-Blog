import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import Footer from './Footer';

import { Facebook, Smile,Linkedin, Copy,Twitter } from "lucide-react";
import AlertBox from './AlertBox';
import AlertCopy from './AlertCopy';

function ViewPostPage() {

    const [textInput, setTextInput] = useState('')

    const [alertCopy, setAlertCopy] = useState(false)

    const [loginAlert, setLoginAlert] = useState(false)

    const {id} = useParams();

    const [post, setPost] = useState([])

    const fetchingData = async () => {
        try{
            const response = await axios.get(`https://blog-post-project-api.vercel.app/posts/${id}`)
            setPost(response.data)
            console.log(post);
        }catch(error){
            console.log("Fail to fetch Post" , error);
        }
    }

    useEffect(()=>{
        fetchingData();
    },[id])

    const handleCopy = () => {
        navigator.clipboard.writeText(textInput)
            .then(() => {
                setAlertCopy(true);
                setVisible(true)
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

  return (
    <>
        <Navbar/>

        <div className='lg:pt-16 lg:px-32 bg-[#f9f8f6]'>

            <img src={post.image} alt={post.title} 
                className='h-48 lg:h-[585px] w-full object-cover rounded-2xl'
            />

            <div className='px-4 pt-6 pb-10 flex flex-col lg:flex-row gap-6 lg:gap-20 font-[Poppins] bg-[#f9f8f6]'>
                <div className='lg:w-3/4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4 items-center'>

                            <div className='bg-[#D7F2E9] rounded-full px-3 py-1 text-sm text-[#12B279]'>
                                {post.category}
                            </div>

                            <h3 className='text-[#75716B]'>
                                {(new Date(post.date)).toLocaleDateString("en-GB", {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </h3>
                        </div>

                        <h2 className='text-[#26231E] font-semibold text-2xl'>
                            {post.title}
                        </h2>
                    </div>

                    <div className="markdown">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </div>

                <div className='bg-[#EFEEEB] p-6 rounded-2xl font-[Poppins] gap-5 flex flex-col lg:w-1/4 lg:h-1/2'>
                    <div className='flex gap-3  border-b border-[#DAD6D1] pb-6'>
                        <img 
                            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                            alt={post.author} 
                            className='size-11 rounded-full'
                        />

                        <div>
                            <p className='text-xs text-[#75716B]'>
                                Author
                            </p>
                            
                            <h2 className='text-[#43403B] text-xl font-semibold'>
                                {post.author}
                            </h2>
                        </div>
                    </div>

                    <p className='text-[#75716B]'>
                        {post.description}
                    </p>
                </div>
            </div>

            <div className='bg-[#EFEEEB] p-4 lg:px-6 flex flex-col lg:flex-row lg:justify-between gap-6 lg:w-2/3 lg:rounded-2xl'>
                    <button 
                        className='py-3 px-10 flex items-center justify-center gap-1.5
                                bg-[#FFFFFF] rounded-full border border-[#75716B] font-[Poppins] text-[#26231E]
                                hover:scale-105 transition-all duration-300 ease-in-out'
                                onClick={()=>{setLoginAlert(true)}}
                                >

                            <Smile className='text-[#43403B]' strokeWidth={1}/>
                            <span>{post.likes}</span>
                    </button>

                    <div className='flex gap-2 items-center'>
                        <button 
                            onClick={handleCopy}
                            className='flex gap-2 py-3 px-7 items-center justify-center
                                bg-[#FFFFFF] rounded-full border border-[#75716B] font-[Poppins] text-[#26231E]
                                hover:scale-105 transition-all duration-300 ease-in-out'>

                            <Copy className='text-[#43403B]' strokeWidth={1} />
                            <span className='text-[#26231E]' >
                                Copy link
                            </span>
                        </button>
                        
                        <a href="https://www.facebook.com/" className='size-12 rounded-full bg-[#1877F2] flex items-center justify-center'>
                            <Facebook className='text-white'/>
                        </a>

                        <a href="https://www.linkedin.com" className='size-12 rounded-full bg-[#0077B5] flex items-center justify-center'>
                            <Linkedin  className='text-white'/>
                        </a>

                        <a href="https://www.twitter.com/" className='size-12 rounded-full bg-[#55ACEE] flex items-center justify-center'>
                            <Twitter  className='text-white'/>
                        </a>
                    </div>
                </div>
                
                <div className='py-6 px-4 lg:px-0 flex flex-col gap-3 font-[Poppins] bg-[#f9f8f6] lg:w-2/3 relative'>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="Comment" className='text-[#75716B]'>
                            Comment
                        </label>

                        <textarea name="Comment" id="Comment"
                            onChange={(e)=>{setTextInput(e.target.value)}}
                            value={textInput}
                            placeholder='What are your thoughts?'
                            className='w-full pt-3 pb-1 pr-1 pl-4 bg-[#FFFFFF] border border-[#DAD6D1] rounded-md text-[#75716B] resize-none'
                        ></textarea>
                    </div>


                    <div className='flex lg:justify-end'>
                        <button 
                            className='py-3 px-10 bg-[#26231E] text-[#FFFFFF] rounded-full 
                            hover:scale-105 transition-all duration-300 ease-in-out'>
                                Send
                            </button>
                    </div>

                    {alertCopy &&(
                        <AlertCopy setAlertCopy={setAlertCopy}/>
                    )}

                </div>
        </div>

        {loginAlert && (
            <AlertBox setLoginAlert={setLoginAlert}/>
        )}

       



        <Footer/>
    </>
  )
}

export default ViewPostPage