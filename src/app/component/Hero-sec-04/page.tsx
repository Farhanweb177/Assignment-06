import React from 'react'

export default function Page() {
  return (
    <section className='w-[1280px] h-[400px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-[80px]  bg-[#FFFFFF]'>

        <div className='w-[1152px] h-[138px] gap-[16px] '>
            <h1 className='w-[1152px] h-[58px] font-bold leading-[57.6px] text-center text-black text-4xl mb-4'>Our Achivements</h1>
            <p className='w-[1000px] h-[54px] font-normal size-[18px] leading-[27px] text-center text-black '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>

                                            {/* next paragraph */}

        <div className='w-[1256px] h-[96px] gap-[24px] mt-6 flex'>

                                        {/* 01 */}
            <div className='w-[296px] h-[80px] gap-[8px]'>
                <h1 className='w-[91px] h-[48px] font-bold size-[40px] leading-[48px] text-black text-3xl'>+200</h1>
                <p className='w-[59px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Courses</p>
            </div>

                                        {/* 02 */}
            <div className='w-[296px] h-[80px] gap-[8px]'>
                <h1 className='w-[72px] h-[48px] font-bold size-[40px] leading-[48px] text-black text-3xl'>50K</h1>
                <p className='w-[59px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Mentors</p>
            </div>

                                        {/* 03 */}
            <div className='w-[296px] h-[80px] gap-[8px]'>
                <h1 className='w-[91px] h-[48px] font-bold size-[40px] leading-[48px] text-black text-3xl'>370k</h1>
                <p className='w-[64px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Students</p>
            </div>

                                        {/* 04 */}
            <div className='w-[296px] h-[80px] gap-[8px]'>
                <h1 className='w-[91px] h-[48px] font-bold size-[40px] leading-[48px] text-black text-3xl'>100+</h1>
                <p className='w-[85px] h-[24px] font-normal size-[16px] leading-[24px] text-black'>Recognition</p>
            </div>


        </div>

    </section>
  )
}
