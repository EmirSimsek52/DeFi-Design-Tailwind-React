import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './animation/Navbar.css';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className=' w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-5 flex justify-between items-center h-full'>
     
        <div className='flex justify-start'>
          <img className='icon' width={35} src='https://cdn-icons-png.flaticon.com/512/2214/2214046.png'/>
          <h1 className='text-[#00d8ff]'>Flash</h1>
        </div>
       
        <div className='hidden md:flex'>
            <ul className=' flex text-white items-center'>
            <li className='hover:text-[#00d8ff]'><a href=' https://EmirSimsek52.github.io/CryptoWeb'>CryptoPrices</a></li>
            <li className='hover:text-[#00d8ff]'>Developers</li>
            <li className='hover:text-[#00d8ff]'>Community</li>
            <li className='hover:text-[#00d8ff]'>About</li>
            
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] py-1 px-2 rounded-3x2 w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
          <li className='text-2xl'><a href=' https://EmirSimsek52.github.io/CryptoWeb'>CryptoPrices</a></li>
            <li className='text-2xl'>Developers</li>
            <li className='text-2xl'>Community</li>
            <li className='text-2xl'>About</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;