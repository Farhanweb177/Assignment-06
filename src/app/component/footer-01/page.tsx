import React from 'react';
import Image from 'next/image';

export default function Footer1() {
  return (
    <div className='w-[1280px] h-[228px] bg-[#F7F7F7] flex justify-center items-center '>
    

        <h1 className='w-[440px] h-[68px] font-bold size-[24px]  text-2xl '>Trusted by 2000+ companies worldwide.</h1>

        <div className='w-[880px] h-[56px] flex ml-36'>
            <Image src={"/Airbnb Logo-01.svg"} width={123.8} height={38.52} alt='Airbnb Logo'></Image>
            <Image src={"/Airbnb Logo-02.svg"} width={123.8} height={38.52} alt='Airbnb Logo'></Image>
            <Image src={"/Airbnb Logo-03.svg"} width={123.8} height={38.52} alt='Airbnb Logo'></Image>
            <Image src={"/Airbnb Logo-04.svg"} width={123.8} height={38.52} alt='Airbnb Logo'></Image>
            <Image src={"/Airbnb Logo-05.svg"} width={123.8} height={38.52} alt='Airbnb Logo'></Image>
            <Image src={"/Airbnb Logo-06.svg"} width={123.8} height={38.52} alt='Airbnb Logo'></Image>

        </div>
      
    </div>
  )
}
