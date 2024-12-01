import React from 'react'
import Image from 'next/image'
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { TbWorld } from "react-icons/tb";



const Section6 = () => {
  return (
    <section id='footer-5' className='w-[1280px] h-[895px] bg-[#F7F7F7]'>
    

      <div className='w-[768px] h-[109px] ml-[450px]'>
        <h1 className='text-4xl font-bold ml-[110px] mb-4'>Our team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>

      {/* pic section */}

      <div className='w-[1280px] h-[300px]'>
        <div className='w-[1280px] h-[209px] flex gap-[48px]'>

          <div className='w-[394.67px] h-[273px]'>
            <Image className='ml-36' src={"/Image01.svg"} alt='image01' width={80} height={80} ></Image>
            <h1 className='font-semibold ml-32 mt-6'>James Nduku</h1>
            <p className='ml-28'>Marketing Coordinator</p>
            
            <ul className='flex items-center gap-[14px] mt-6'>
              <li className='ml-36'><IoLogoLinkedin /></li>
              <li><IoLogoTwitter /></li>
              <li><TbWorld /></li>
            </ul>
          </div>


          <div className='w-[394.67px] h-[273px]'>
            <Image className='ml-36 ' src={"/lady02.svg"} alt='image01' width={80} height={80} ></Image>
            <h1 className='font-semibold ml-32 pt-7'>Joseph Munyambu</h1>
            <p className='ml-28'>Nursing Assistant</p>
            
            <ul className='flex items-center gap-[14px] mt-6'>
              <li className='ml-36'><IoLogoLinkedin /></li>
              <li><IoLogoTwitter /></li>
              <li><TbWorld /></li>
            </ul>
          </div>


          <div className='w-[394.67px] h-[273px]'>
            <Image className='ml-36' src={"/Image03.svg"} alt='image01' width={80} height={80} ></Image>
            <h1 className='font-semibold ml-32 mt-6 '>Joseph Ngumbau</h1>
            <p className='ml-32'>Medical Assistant</p>
            
            <ul className='flex items-center gap-[14px] mt-6'>
              <li className='ml-36'><IoLogoLinkedin /></li>
              <li><IoLogoTwitter /></li>
              <li><TbWorld /></li>
            </ul>
          </div>


        </div>
      </div>


                  {/* next section */}
          
      <div className='w-[1280px] h-[482px]'>
        <div className='w-[1280px] h-[209px] flex gap-[48px]'>

          <div className='w-[394.67px] h-[273px]'>
            <Image className='ml-36' src={"/Image-footer-05.svg"} alt='image01' width={80} height={80} ></Image>
            <h1 className='font-semibold ml-32 mt-6'>Erick Kipkemboi</h1>
            <p className='ml-36'>Web Designer</p>
            
            <ul className='flex items-center gap-[14px] mt-6'>
              <li className='ml-36'><IoLogoLinkedin /></li>
              <li><IoLogoTwitter /></li>
              <li><TbWorld /></li>
            </ul>
          </div>


          <div className='w-[394.67px] h-[273px]'>
            <Image className='ml-36 ' src={"/Image-footer-06.svg"} alt='image01' width={80} height={80} ></Image>
            <h1 className='font-semibold ml-32 pt-7'>Stephen Kerubo</h1>
            <p className='ml-32'>President of Sales</p>
            
            <ul className='flex items-center gap-[14px] mt-6'>
              <li className='ml-36'><IoLogoLinkedin /></li>
              <li><IoLogoTwitter /></li>
              <li><TbWorld /></li>
            </ul>
          </div>


          <div className='w-[394.67px] h-[273px]'>
            <Image className='ml-36' src={"/Image-footer-07.svg"} alt='image01' width={80} height={80} ></Image>
            <h1 className='font-semibold ml-36 mt-6 '>John Leboo</h1>
            <p className='ml-36'>Dog Trainer</p>
            
            <ul className='flex items-center gap-[14px] mt-6'>
              <li className='ml-36'><IoLogoLinkedin /></li>
              <li><IoLogoTwitter /></li>
              <li><TbWorld /></li>
            </ul>
          </div>


        </div>
      </div>
      
      
  
    </section>
  )
}

export default Section6
