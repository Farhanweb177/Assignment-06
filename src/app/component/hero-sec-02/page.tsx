import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function HeroSec() {
  return (
    <section className="w-[1280px] h-[800px] ">
      <div className="w-[768px] h-[109px] gap-[24px] ml-80 mt-28 mb-16">
        <h1 className="w-[768px] h-[58px] font-bold size-[48px] leading-[57.6px] text-[40px] mb-4 ">
          Explore Courses By Category
        </h1>
        <p className="w-[768px] h-[27px] font-normal size-[18px] leading-[27px] ">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      {/* picture div */}

      <div className="w-[1280px] h-[132px] gap-[24px] flex">
        {/* picture-01 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/pen-tool-01.svg"}
              width={32}
              height={32}
              alt="pen-tool"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Design & Development
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* picture-02 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/volume-high-02.svg"}
              width={32}
              height={32}
              alt="volume-high"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Marketing
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* picture-03 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/group-03.svg"}
              width={32}
              height={32}
              alt="volume-high"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Development
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="w-[1280px] h-[132px] gap-[24px] flex my-16">
        {/* picture-04 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/microphone-04.svg"}
              width={32}
              height={32}
              alt="pen-tool"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Communication
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* picture-05 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/link-05.svg"}
              width={32}
              height={32}
              alt="volume-high"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Digital Marketing
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* picture-06 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/arrow-06.svg"}
              width={32}
              height={32}
              alt="volume-high"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Self Development
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="w-[1280px] h-[132px] gap-[24px] flex my-16">
        {/* picture-07 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/briefcase-07.svg"}
              width={32}
              height={32}
              alt="briefcase"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Business
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* picture-08 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/book-08.svg"}
              width={32}
              height={32}
              alt="book"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Finance
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* picture-09 */}

        <div className="w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image
              src={"/book-09.svg"}
              width={32}
              height={32}
              alt="book"
            ></Image>
          </div>

          <div className="w-[246.67px] h-[57px] gap-[16px] ">
            <h3 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] ">
              Consulting
            </h3>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] ">
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>
      <Button className="rounded-[4px]  ml-[600px]">View All Courses</Button>
    </section>
  );
}

export default HeroSec;
