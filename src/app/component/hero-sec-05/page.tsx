import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

function HeroSec() {
  return (
   <section className='w-[1280px] h-[1600px]'>

    <div className='w-[768px] h-[118px] gap-[16px] ml-[170px]'>
        <h1 className='w-[768px] h-[67px] font-bold size-[56px] leading-[67.2px] text-center text-black text-5xl'>Courses</h1>
        <p className='w-[768px] h-[27px] font-normal size-[18px] leading-[27px] text-center text-black'>Your Ultimate Guide to learning</p>
    </div>

    <div className='w-[336px] h-[40px] flex ml-[400px] mt-10'>
      <div className='w-[67px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] '>
        <h4 className='w-[55px] h-[24px] font-normal size-[16px] leading-[24px]  border-b-2'>Popular</h4>
      </div>
      
      <div className='w-[140px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] '>
        <h4 className='w-[108px] h-[24px] font-normal size-[16px] leading-[24px]'>Recommended</h4>
      </div>

      <div className='w-[109px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] '>
        <h4 className='w-[778px] h-[24px] font-normal size-[16px] leading-[24px]'>Best  Price</h4>
      </div>
      </div>
    

          <div className='flex justify-center items-center mt-10'>

                      {/* picture-section-01 */}

    <div className='w-[580px] h-[534px] gap-[32]'>
      

      <div className='w-[416px] h-[534px] rounded-[5px] gap-[5]  bg-[#F7F7F7]'>
        <Image src={"/Image-sec-01.svg"} width={416} height={300} alt='Image'></Image>
        <div className='w-[382px] h-[24px] gap-[8px] flex '>
          <h6 className='w-[326px] h-[21px] font-semibold size-[14px] leading-[21px] text-black'>Design</h6>
          <Image src={"/Star-01.svg"} width={48} height={24} alt='Star' ></Image>
        </div>
        <h1 className='w-[382px] h-[34px] font-bold size-[24px] leading-[33.6px] text-black'>UX/UI Design 201</h1>
        <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
        <div className='w-[382px] h-[40px] gap-[16px]'>
          {/* button */}
          <div className='flex gap-5 mt-16'>
          <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
              <button className='w-[90px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Enroll Now</button>
          </div>
          <div className='w-[117px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
            <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-black'>$400</button>
          </div>
          </div>

        </div>
      </div>
    </div>

                       {/* picture-section-02 */}
     <div className='w-[580px] h-[534px] gap-[32]'>
      <div className='w-[416px] h-[534px] rounded-[5px] gap-[5]  bg-[#F7F7F7]'>
        <Image src={"/Image-sec-02.svg"} width={416} height={300} alt='Image'></Image>
        <div className='w-[382px] h-[24px] gap-[8px] flex '>
          <h6 className='w-[326px] h-[21px] font-semibold size-[14px] leading-[21px] text-black'>Programmimg</h6>
          <Image src={"/Star-01.svg"} width={48} height={24} alt='Star' ></Image>
        </div>
        <h1 className='w-[382px] h-[34px] font-bold size-[24px] leading-[33.6px] text-black'>Introduction to Python</h1>
        <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
        <div className='w-[382px] h-[40px] gap-[16px]'>
          {/* button */}
          <div className='flex gap-5 mt-16'>
          <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
              <button className='w-[90px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Enroll Now</button>
          </div>
          <div className='w-[117px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
            <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-black'>$400</button>
          </div>
          </div>

        </div>
      </div>
    </div>

                        {/* picture-section-03 */}
   <div className='w-[480px] h-[534px] gap-[32]'>
      

      <div className='w-[416px] h-[534px] rounded-[5px] gap-[5]  bg-[#F7F7F7]'>
        <Image src={"/Image-sec-03.svg"} width={416} height={300} alt='Image'></Image>
        <div className='w-[382px] h-[24px] gap-[8px] flex '>
          <h6 className='w-[326px] h-[21px] font-semibold size-[14px] leading-[21px] text-black'>Business</h6>
          <Image src={"/Star-01.svg"} width={48} height={24} alt='Star' ></Image>
        </div>
        <h1 className='w-[382px] h-[34px] font-bold size-[24px] leading-[33.6px] text-black'>Data Analysis for Beginners</h1>
        <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
        <div className='w-[382px] h-[40px] gap-[16px]'>
          {/* button */}
          <div className='flex gap-5 mt-16'>
          <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
              <button className='w-[90px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Enroll Now</button>
          </div>
          <div className='w-[117px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
            <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-black'>$400</button>
          </div>
          </div>

        </div>
      </div>
    </div>
      

</div>

<div className='flex justify-center items-center mt-16'>

{/* picture-section-04 */}

<div className='w-[580px] h-[534px] gap-[32]'>


<div className='w-[416px] h-[534px] rounded-[5px] gap-[5]  bg-[#F7F7F7]'>
<Image src={"/Image-sec-04.svg"} width={416} height={300} alt='Image'></Image>
<div className='w-[382px] h-[24px] gap-[8px] flex '>
<h6 className='w-[326px] h-[21px] font-semibold size-[14px] leading-[21px] text-black'>Art</h6>
<Image src={"/Star-01.svg"} width={48} height={24} alt='Star' ></Image>
</div>
<h1 className='w-[382px] h-[34px] font-bold size-[24px] leading-[33.6px] text-black'>Art Specialization</h1>
<p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
<div className='w-[382px] h-[40px] gap-[16px]'>
{/* button */}
<div className='flex gap-5 mt-16'>
<div className='w-[117px] h-[40px] rounded-[5px] border-[1px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
<button className='w-[90px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Enroll Now</button>
</div>
<div className='w-[117px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
<button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-black'>$400</button>
</div>
</div>

</div>
</div>
</div>

 {/* picture-section-05 */}
<div className='w-[580px] h-[534px] gap-[32]'>
<div className='w-[416px] h-[534px] rounded-[5px] gap-[5]  bg-[#F7F7F7]'>
<Image src={"/Image-sec-05.svg"} width={416} height={300} alt='Image'></Image>
<div className='w-[382px] h-[24px] gap-[8px] flex '>
<h6 className='w-[326px] h-[21px] font-semibold size-[14px] leading-[21px] text-black'>Law</h6>
<Image src={"/Star-01.svg"} width={48} height={24} alt='Star' ></Image>
</div>
<h1 className='w-[382px] h-[34px] font-bold size-[24px] leading-[33.6px] text-black'>Rule of Law</h1>
<p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
<div className='w-[382px] h-[40px] gap-[16px]'>
{/* button */}
<div className='flex gap-5 mt-16'>
<div className='w-[117px] h-[40px] rounded-[5px] border-[1px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
<button className='w-[90px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Enroll Now</button>
</div>
<div className='w-[117px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
<button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-black'>$400</button>
</div>
</div>

</div>
</div>
</div>

  {/* picture-section-06 */}
<div className='w-[480px] h-[534px] gap-[32]'>


<div className='w-[416px] h-[534px] rounded-[5px] gap-[5]  bg-[#F7F7F7]'>
<Image src={"/Image-sec-06.svg"} width={416} height={300} alt='Image'></Image>
<div className='w-[382px] h-[24px] gap-[8px] flex '>
<h6 className='w-[326px] h-[21px] font-semibold size-[14px] leading-[21px] text-black'>Tech</h6>
<Image src={"/Star-01.svg"} width={48} height={24} alt='Star' ></Image>
</div>
<h1 className='w-[382px] h-[34px] font-bold size-[24px] leading-[33.6px] text-black'>Introduction to webflow</h1>
<p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
<div className='w-[382px] h-[40px] gap-[16px]'>
{/* button */}
<div className='flex gap-5 mt-16'>
<div className='w-[117px] h-[40px] rounded-[5px] border-[1px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
<button className='w-[90px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Enroll Now</button>
</div>
<div className='w-[117px] h-[40px] rounded-[5px] pt-[8px] pr-[20px] pb-[8px] pl-[15px]'>
<button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-black'>$400</button>
</div>
</div>

</div>
</div>
</div>


</div>
          <div className='mt-20  flex justify-center items-center '>
          <Button className='bg-white text-black border border-black w-[120px] h-[24px]'>View All Courses</Button>
          </div>
     
   </section>
  )
}

export default HeroSec
