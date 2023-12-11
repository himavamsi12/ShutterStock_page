// components/Navbar.js

import Link from 'next/link';
import Navbar from "../components/Navbar/index"
import back from "../assests/back.jpg"
import Image from 'next/image'
import { GrGallery } from "react-icons/gr";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import AI from "../assests/AI.webp";
import illu from "../assests/illu.webp";
import photos from "../assests/photos.webp"
import vectors from "../assests/vectors.webp"
import n1 from "../assests/n1.jpeg"
import n2 from "../assests/n2.jpeg"
import n3 from "../assests/n3.jpeg"

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='md: min-h-screen bg-cover bg-center flex items-center justify-center' style={{
        backgroundImage: `url('${back.src}')`,
        width:"100%",
        height:"50%",
      }}>
      <div className='hidden md:flex justify-center'>
        
        <div className='flex flex-col text-center  md:flex flex-col'>
    
          <p className=' text-lg  md:text-5xl font-bold text-white pb-3'>Unleash your creativity with unrivaled images</p>
          <p className='text-sm md:text-2xl text-white pb-6'>Add wonder to your stories with 425M+ photos, vectors, illustrations, and editorial images.</p>
          
          <div className='flex flex-row justify-between rounded-lg bg-gray-700/75 p-3'>
            <div className=' flex flex-row bg-slate-50 rounded-md p-4'>
              <GrGallery size={20} className='mr-3'/>
              <p className='text-black'>All images</p>
              <MdOutlineArrowDropDown  size={20} className='ml-2 mt-1'/>
            </div>
            <div className='flex flex-row'>
            <div className='flex flex-row bg-slate-50 rounded-l-lg p-2'>
            <input type="text" placeholder="Search for images" width={60} minlength="4" maxlength="8" size="50" className='p-3' />
            
            </div>
            <div className='rounded-r-lg bg-red-600 pl-2 p-2'>
            <IoSearch size={24} color='White' className='m-3'/>
            </div>
            </div>
            <div className=' flex flex-row bg-slate-50 rounded-md p-4'>
            <IoCameraOutline size={24} className='mr-3'/>
              <p className='text-black'>Search by images</p>
              
            </div>

          </div>
          <div className='flex flex-row mt-4 justify-center'>
            <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='White' className='mb-2 mr-2'/>
            <p className='text-l  text-slate-100 '>Winter</p>
            </div>
            <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='White' className='mb-2 mr-2'/>
            <p className='text-l  text-slate-100 '>Thank you</p>
            </div>
            <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='White' className='mb-2 mr-2'/>
            <p className='text-l  text-slate-100 '>Happy Birthday</p>
            </div>
            <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='White' className='mb-2 mr-2'/>
            <p className='text-l  text-slate-100 '>Christmas</p>
            </div>
            <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='White' className='mb-2 mr-2'/>
            <p className='text-l  text-slate-100 '>Christmas tree</p>
            </div>
          </div>

        </div>

      </div>
        <div className='flex justify-center md:hidden'>
    <div className='flex flex-col max-w-md text-center p-4'>
      <p className='text-3xl md:text-5xl font-bold text-white pb-3'>
        Unleash your creativity with unrivaled images
      </p>
      <p className='text-lg md:text-2xl text-white pb-6'>
        Add wonder to your stories with 425M+ photos, vectors, illustrations, and editorial images.
      </p>

      <div className='flex flex-row p-1 m-0.5 rounded-lg bg-neutral-400/75'>
        <div className='flex items-center  bg-gray-200  rounded-lg p-3 m-2'>
          <GrGallery size={20} className='mr-0.5' />
          <MdOutlineArrowDropDown size={20} className='ml-2 mt-1' />
        </div>
       <div className='flex flex-row'>
        <div className='flex items-center  bg-gray-200  rounded-l-lg p-1 mt-3 ml-2 h-10 '>
          <input
            type='text'
            placeholder='Search for images'
            className=' w-full bg-transparent '
            
          />
          
        </div>
        <div className='bg-red-600 p-2 rounded-r-lg mt-3 h-10'>
            <IoSearch size={20} color='White' className='mt-1' />
          </div>
          </div>

      </div>

      <div className='flex flex-row justify-center mt-3'>
        <div className=' flex flex-row bg-gray-200 bg-transparent  border-solid border-2 rounded-full p-1 pt-2 pr-2 m-1'>
          <IoSearch size={20} color='White' />
          <p className='text-base text-white'>Winter</p>
        </div>
        <div className=' flex flex-row bg-gray-200 bg-transparent  border-solid border-2 rounded-full p-3 pt-2 pr-2 m-1'>
          <IoSearch size={20} color='White' />
          <p className='text-base text-white'>Thank you</p>
        </div>
        <div className=' flex flex-row bg-gray-200 bg-transparent  border-solid border-2 rounded-full p-3 pt-2 pr-2 m-1'>
          <IoSearch size={20} color='White' />
          <p className='text-base text-white'>Happy birthday</p>
        </div>
        
      </div>
    </div>
  </div>
    </div>
    <div className='m-4 p-4'>
        <p className='text-black text-xl font-bold md:text-black md:text-3xl font-bold m-3'>Explore images that ignite your creativity</p>
        <div className='flex flex-wrap md:flex justify-evenly m-2'>
          <div className='flex flex-row p-2 md:none'>
          <div className='flex flew-row items-center mr-6'>
              <Image src={photos}/>
              <p className='text-black text-lg font-bold pl-3'>Photos</p>
            </div>
            <div className='flex flew-row items-center'>
              <Image src={vectors}/>
              <p className='text-black text-lg font-bold pl-3'>Vectors</p>
            </div>
            </div>
            <div className='flex flex-row p-2 md:none'>
            <div className='flex flew-row items-center mr-6'>
              <Image src={illu}/>
              <p className='text-black text-lg font-bold pl-3'>Illustrations</p>
            </div>
            <div className='flex flew-row items-center'>
              <Image src={AI}/>
              <p className='text-black text-lg font-bold pl-3'>AI Image Generator</p>
            </div>
            </div>
        </div>
    </div>
    <div className='m-4 p-4'>
    <p className='text-black text-xl font-bold md:text-black md:text-3xl font-bold m-3'>See what’s trending</p>
    <div className='flex justify-between'>
    <div className='flex flex-row justify-start'>
    <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='Black' className='mb-2 mr-2'/>
            <p className='text-l  text-black '>Winter</p>
    </div>
    <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='Black' className='mb-2 mr-2'/>
            <p className='text-l  text-black '>Seasonal</p>
    </div>
    <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='Black' className='mb-2 mr-2'/>
            <p className='text-l  text-black '>Winter tones</p>
    </div>
    <div className='bg-transparent flex flex-row border-solid border-2 rounded-full pt-2 pr-3 pl-3 mr-2'>
            <IoSearch size={20} color='Black' className='mb-2 mr-2'/>
            <p className='text-l  text-black '>Christmas</p>
    </div>

    </div>
    <div className='hidden md:flex flex-end'>
      <p className='text-black text-xl font-bold pr-4'>Most popular</p>
      <p className='text-gray-300 text-lg font-bold pr-4'>HandPicked Content</p>
    </div>
    </div>
    <div className='flex justify-center md:hidden'>
      <p className='text-black text-xl font-bold pr-4'>Most popular</p>
      <p className='text-gray-300 text-lg font-bold pr-4'>HandPicked Content</p>
    </div>
    <div className='flex flex-wrap'>
      <Image src={n1} className='m-6 h-2/6 w-2/6'/>
      <Image src={n2} className='m-6 h-2/6 w-2/6'/>
      <Image src={n3} className='m-6 h-60 w-60'/>
      <Image src={n1} className='m-6 h-2/6 w-2/6'/>
      <Image src={n2} className='m-6 h-2/6 w-2/6'/>
      <Image src={n3} className='m-6 h-60 w-60'/>
      <Image src={n1} className='m-6 h-2/6 w-2/6'/>
      <Image src={n2} className='m-6 h-2/6 w-2/6'/>
      <Image src={n3} className='m-6 h-60 w-60'/>

    </div>

    </div>

    </>
  );
};

export default page;
