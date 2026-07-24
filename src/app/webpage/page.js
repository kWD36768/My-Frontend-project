"use client";
import React, { useState } from 'react'
import { IoIosArrowUp , IoIosArrowDown } from "react-icons/io";

const page = () => {
    const [ifopen, setIfopen]= useState(true); 
  return (
    <div>
        <div>
            <div className='flex justify-between w-[200px]'>
                <div>
                   <span>Category</span>
                </div>
                <div
                onClick={() => {setIfopen(!ifopen)}}
                >
                    {ifopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>
            <div
            className={`transition-all duration-300 ease-in-out overflow-hidden
                ${ifopen ? "h-[200px] translate-y-0 opacity-100 " :"h-0 translate-y-[-20px] opacity-0"}`}>
                <ul>
                    <li>Mobile</li>
                    <li>Tabs</li>
                    <li>electronics</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default page