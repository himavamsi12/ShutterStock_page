// components/Navbar.js

import Link from 'next/link';
import logo from "../../assests/logo.png"
import Image from 'next/image'
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";


const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center p-0.5">
        <div className='flex justify-start items-center'>
        {/* Logo or Brand */}
        <div className="flex">
          <Link href="/">
          <Image src={logo} width={200} height={200} alt="Picture of the author"/>
          </Link>
        </div>

        
        <div className="hidden md:flex space-x-4 p-2">
          <Link href="/images">
            <p className="text-gray-500 hover:text-slate-200">Images</p>
          </Link>
          <Link href="/videos">
            <p className="text-gray-500 hover:text-slate-200">Videos</p>
          </Link>
          <Link href="/browse">
            <p className="text-gray-500 hover:text-slate-200">Browse Content</p>
          </Link>
          <Link href="/design">
            <p className="text-gray-500 hover:text-slate-200">Design</p>
          </Link>
          <Link href="/enterprises">
            <p className="text-gray-500 hover:text-slate-200"><span className='pr-2'>|</span>Enterprises</p>
          </Link>
        </div>

        {/* Mobile Menu - Responsive */}
        <div className=" flex justify-evenly pl-16 md:hidden">
          {/* You can implement a responsive menu here */}
          <MdFavoriteBorder size={24} color='grey' className='ml-2'/>
        <BsCart3  size={24} color='grey' className='ml-2'/>
        
          <Link href="/login">
            <p className="text-gray-500 hover:text-slate-200 pl-4">Menu</p>
          </Link>
        </div>
      </div>
        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4 p-2">
        <Link href="/login">
            <p className="text-gray-500 hover:text-slate-200">Credits Available</p>
          </Link>
        <Link href="/login">
            <p className="text-gray-500 hover:text-slate-200"><span className='pr-2'>|</span>Pricing</p>
          </Link>
          
          <MdFavoriteBorder size={24} color='grey'/>
          <BsCart3  size={24} color='grey'/>
          

          <Link href="/login">
            <p className="text-gray-500 hover:text-slate-200">Login</p>
          </Link>
          <Link href="/signup">
            <p className="text-gray-500 hover:text-slate-200">Sign Up</p>
          </Link>
        </div>

       </div> 
      
    </nav>
  );
};

export default Navbar;
