import React from 'react'
import {SiDiscord,SiTwitter,SiInstagram} from 'react-icons/si';
const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1>Join Our DeFi Community</h1>

        <div className='md:flex justify-center grid sm:grid-cols-2 '>
          <ul className='flex'>
            <li>
            <div className='flex justify-center py-2'>
            <SiDiscord  size={40}/>
            </div>
            <a href='https://discord.gg/g5UWCPFG'><button>Join Discord!</button></a>
            </li>
            <li>
            <div className='flex items-center justify-center py-2'>
            <SiTwitter  size={40}/>
            </div>
            <a href='https://twitter.com/zlatannovicc'><button>Fallow Twitter</button></a>
            </li>
          </ul>
          
        </div>
      
        <div className='flex items-center justify-center py-2 '>
   
        </div>
    </div>
  )
}

export default Subscribe