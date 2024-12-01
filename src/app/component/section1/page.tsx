import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';



const Section1 = () => {
  return (
      <section className='w-[1280px] h-[800px] flex'>


        <div className='w-[640px] h-[300px] pr-[60px] pl-[80px] gap-[24px] mt-[300px]'>

          <h1 className='w-[500px] h-[134px] font-bold size-[56px] text-6xl'>Learn new skills online with ease</h1>
          <p className='w-[500px] h-[154px] font-normal size-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

          <Button className='bg-black'>Start learning now</Button>
          <Button className='ml-6 bg-white text-black border border-black hover:text-white'>Explore Courses</Button>

        </div>


    


{/* image section */}



<div>
  <Image src={"/pic.svg"} alt='wait' width={640} height={900}>

  </Image>
</div>

      </section>
  )
}

export default Section1
