import React from 'react'
import Image from 'next/image'

const Header2 = () => {
    return (
        <div className='w-[1280px] bg-[#f4f4f4] h-[72px] mt-4 flex justify-center items-center'>
            <div className='bg-[#f4f4f4] flex gap-32'>

            <div className='w-[130.6px] gap-[8.2px] flex justify-center items-center'>
                <Image src={"/logo.svg"} alt='logo' width={32.58} height={30.3}></Image>
                <h1 className='w-[90px] h-[30px] font-bold text-2xl'>Ddsgnr</h1>
            </div>

            
            <div className='w-[910px] h-[44px] bg-[#ffffff]  flex justify-center items-center'>
                <div className='w-[687px] h-[44px] flex gap-[32px] font-normal size-[16px] justify-center items-center'>
                    <p>Home</p>
                    <p>Courses</p>
                    <p>Serveces</p>
                    <p>Achievement</p>
                    <p>About Us</p>
                    <p>Testimonial</p>
                    </div>
                    <div className='flex justify-center items-center gap-[30px]'>
                        <button className='w-[80px] h-[40px] font-normal size-[16] border border-black rounded-5px py-[8px] px-[20px]'>Login</button>
                        <button className='w-[110px] h-[40px] bg-black text-white rounded-[5px] py-[8px] px-[20px] '>Sign Up</button>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Header2
