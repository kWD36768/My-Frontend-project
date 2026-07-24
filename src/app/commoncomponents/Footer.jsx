import React from 'react'
import image1 from '../assets/1.png';
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import apple from '../assets/applee.png';
import google from '../assets/googlle.png';
import flag from '../assets/flags/usa.png';
import Image from 'next/image'
const Footer = () => {
  return (
    <>
     <footer className='hidden lg:block'>
      <div className="footer-top bg-[#EFF2F4]">
        <div className="lg:w-[617px] w-[80vw] m-auto py-[35px] text-center">
          <div>
            <h1 className="text-[21px] font-semibold ">
              Subscribe on our newsletter
            </h1>
            <span className="text-[#757575] font-medium">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </span>
          </div>
          <div className="pt-4">
            <input
              type="text"
              placeholder="Email"
              className="icon relative w-[274px] bg-white text-[16px] border-1 border-[#dfdddd] px-5 py-[6px] rounded-r-lg rounded-l-lg "
            />
            <button className="bg-[#127FFF] text-white  px-5 py-[7px] text-[17px] rounded-r-lg rounded-l-lg
            mt-2 lg:mt-0 ms-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom  border-b border-[#dfdddd]">
        <div className="cursor-default  lg:flex justify-between w-[90vw] lg:w-[1180px] m-auto">
          <div className="lg:w-[276px] py-[40px]">
            <div className=" w-[200px] flex items-center">
              <Image src={image1} alt="Logo" />
              <h1 className="text-[#8CB7F5] text-[31px] font-bold  ps-1">
                Brand
              </h1>
            </div>
            <div className="">
              <p className=" cursor-text text-[#757575] py-[20px] text-[16px] font-semibold">
                Best information about the company gies here but now lorem ipsum
                is
              </p>
            </div>
            <div className="flex justify-between w-[195px]">
              <div>
                <FaFacebookF className="text-[28px] rounded-full bg-[#b4bac2]  text-white p-[6px]" />
              </div>
              <div>
                <FaTwitter className="text-[28px] rounded-full bg-[#b4bac2]  text-white p-[6px]" />
              </div>
              <div>
                <RiLinkedinFill className="text-[28px] rounded-full bg-[#b4bac2]  text-white p-[6px]" />
              </div>
              <div>
                <RxInstagramLogo className="text-[28px] rounded-full bg-[#b4bac2]  text-white p-[6px]" />
              </div>
              <div>
                <SiYoutube className="text-[28px] rounded-full bg-[#b4bac2]  text-white p-[6px]" />
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between  py-[40px]  mb-9 ">
            <ul className="text-base pr-9  ps-9 lg:ps-0 mt-3 lg:mt-0">
              <li className="newsub font-[500] text-[18px]   cursor-text pb-[7px]">
                About
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer leading-7 cursor-pointer">
                About us
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer leading-7 cursor-pointer">
                find Store
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer  leading-7 cursor-pointer">
                Categories
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer  leading-7 cursor-pointer">
                Blogs
              </li>
            </ul>
            <ul className="text-base px-10   mt-3 lg:mt-0">
              <li className="newsub font-[500] text-[18px]  cursor-text pb-[7px]">
                Partnership
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer leading-7 cursor-pointer">
                About Us
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer leading-7 cursor-pointer">
                Find store
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer  leading-7 cursor-pointer">
                Categories
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer  leading-7 cursor-pointer">
                Blogs
              </li>
            </ul>
            <ul className="text-base px-10  mt-3 lg:mt-0 ">
              <li className="newsub font-[500] text-[18px]  cursor-text pb-[7px]">
                Information
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer leading-7 cursor-pointer">
                Help center
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer leading-7 cursor-pointer">
                Money Refund
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer  leading-7 cursor-pointer">
                Shipping
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer  leading-7 cursor-pointer">
                Contact us
              </li>
            </ul>
            <ul className="text-base px-10  mt-3 lg:mt-0">
              <li className="newsub font-[500] text-[18px]  cursor-text pb-[7px]">
                For users
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer leading-7 cursor-pointer">
                Login
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer leading-7 cursor-pointer">
                Register
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer  leading-7 cursor-pointer">
                Settings
              </li>
              <li className="text-[16px]  text-[#8B96A5] newsub_footer  leading-7 cursor-pointer">
                My Orders
              </li>
            </ul>
            <ul className="text-base px-10  mt-3 lg:mt-0">
              <li className="newsub font-[500] text-[18px]  cursor-text pb-[7px]">
                Get app
              </li>
              <li className="my-2">
                <Image src={apple} alt="apple" />
              </li>
              <li>
                <Image src={google} alt="google" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#EFF2F4] py-[20px]">
        <div className="lg:w-[1180px] m-auto flex justify-between items-center ">
          <div>
            <span className='text-[#606060] text-[17px]'>© 2023 Ecommerce. </span>
          </div>
          <div className='flex items-center'>
            <div>< Image src={flag} alt='flag' width={30}/></div>
            <div>
              <span className='text-[#606060] text-[17px]'>English</span>
            </div>
            <div className='ms-1'>
              <IoIosArrowUp />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
