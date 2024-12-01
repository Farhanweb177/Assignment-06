import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header1 = () => {
  return (
    <div className="w-[1280px] h-[54px] bg-[#f7f7f7] flex py-4 border border-b-black">

        <div>
            <p className="w-[250px] h-[2px] font-normal size-[14px] leading-[21px] ml-10">Phone Number: 956 742 455 678</p>
        </div>
        <div>
            <p className='border border-l-black pl-4 '>Email:info@ddsgnr.com</p>
        </div>

        <div className='w-[736px] flex justify-end gap-4 py-1'>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />

        </div>

      
    </div>
  )
}

export default Header1
