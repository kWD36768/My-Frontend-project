"use client"
import React from 'react'
import image1 from '../assets/cloth/1.jpg';
import Image from 'next/image';
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlinePerson } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import apple from '../assets/applee.png';
import google from '../assets/googlle.png';
import flag from '../assets/flags/usa.png';
 import logo from './../assets/1.png';
import image2 from '../assets/11.jpeg'
import image3 from '../assets/22.jpeg'
import image4  from '../assets/33.jpeg'
import image5  from '../assets/44.jpeg'
import image6  from '../assets/55.jpeg'
import image7 from '../assets/cloth/5.jpg'
import image8 from '../assets/interior/6.jpg'
import image9 from  '../assets/icon.jpeg'
import image10 from  '../assets/icon(2).jpeg'
import image11 from  '../assets/icon(1).jpeg'
import image12 from  '../assets/2.jpg'
import image13 from  '../assets/4.jpg'
import image14 from  '../assets/8.jpg'
import image15 from  '../assets/7.jpg'
import image16 from  '../assets/sc.jpeg'
import image17 from  '../assets/5.jpg';
import image18 from  '../assets/3.jpg';
import image19 from  '../assets/8.jpg';

const Page = () => {
    const carttab = [{
        id : 1,
        img :image1,
        title : 'T-shits with multiple colors for men and ladies',
        content : 'size : medium, color : blue , material : plastic , seller :Artal Market'  ,
        btn1 : 'Remove',
        btn2 : 'Save for later',
        price  :'$78.99',


    },
       {  id : 2,
        img :image1,
        title : 'T-shits with multiple colors for men and ladies',
        content : 'size : medium, color : blue , material : plastic , seller :Artal Market'  ,
        btn1 : 'Remove',
        btn2 : 'Save for later',
        price  :'$39.00',


    },
    {  id : 3,
        img :image1,
        title : 'T-shits with multiple colors for men and ladies',
        content : 'size : medium, color : blue , material : plastic , seller :Artal Market'  ,
        btn1 : 'Remove',
        btn2 : 'Save for later',
        price  :'$170.50',


    },

]

const two = [{
  id  : 1 ,
  img :image9,
  title : 'Secure payment',
  detail : 'Have you ever finally just'


},

{
  id  : 2 ,
img : image10,
title : 'Customer support',
detail : 'Have you ever finally just'


},

{
  id  : 3 ,
img : image11,
title : 'Free delivery',
detail : 'Have you ever finally just'


},
]

 const savetab = [
  {
  id:1 ,
  img : image12 ,
  price : '$99.50' ,
  title : 'Go Pro HER06 4K Action Camera-black',
  btn : 'Move to cart'

},

{
  id:2 ,
  img : image13 ,
  price : '$99.50' ,
  title : 'Go Pro HER06 4K Action Camera-black',
  btn : 'Move to cart'

},

{
  id:3 ,
  img : image14 ,
  price : '$99.50' ,
  title : 'Go Pro HER06 4K Action Camera-black',
  btn : 'Move to cart'

},

{
  id:4 ,
  img : image15 ,
  price : '$99.50' ,
  title : 'Go Pro HER06 4K Action Camera-black',
  btn : 'Move to cart'

}]
  return (
    <>
          {/* ---- header ----- */}


      {/*----- web cart -----*/}
      <main className="bg-[#F7FAFC] hidden lg:block">
        <section className=" w-[1180px]  m-auto ">
          <div>
            <p className="text-[20px] ps-2 pt-7 pb-2 font-semibold">
              MY cart (3)
            </p>
          </div>
          <div className="cartsection  p-2 flex justify-between">
            <div className="mainleft  w-[840px] ">
              <div className="  w-[840px] p-3 bg-white  border-1 border-[#DEE2E7] rounded-r-lg rounded-l-lg items-center">
                <div className="flex  border-b-1 border-[#DEE2E7] justify-between  ">
                  <div className="left p-3    flex">
                    <div className="w-[73px] h-[80px]">
                      <Image src={image1} alt="" />
                    </div>
                    <div>
                      <div>
                        <p>T-shits with multiple colors for men and ladies</p>
                        <p className="text-[#DEE2E7]">
                          size : medium, color : blue , material : plastic{" "}
                          <br /> seller :Artal Market
                        </p>
                      </div>
                      <div className="flex pt-3">
                        <button className="border-[#DEE2E7] py-1 px-2 rounded-sm text-[#FA3434] border-1 font-medium">
                          Remove
                        </button>
                        <button className="border-[#DEE2E7] py-1 px-2 rounded-sm border-1 ml-3 text-[#0D6EFD] font-medium">
                          {" "}
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="right    p-2">
                    <div className="pb-2 pt-3 text-end">
                      {" "}
                      <p>$170.50</p>
                    </div>
                    <div className=" border-[#DEE2E7] border-1 rounded-r-lg rounded-l-lg w-[100px] items-center flex justify-between p-1">
                      <div className="ps-2"> Qty: 9 </div>{" "}
                      <div className="text-[#DEE2E7]">
                        <FaArrowDown />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex  border-b-1 border-[#DEE2E7] rounded-r-lg rounded-l-lg justify-between  ">
                  <div className="left p-3    flex">
                    <div className="w-[73px] h-[80px]">
                      <Image src={image7} alt="" />
                    </div>
                    <div>
                      <div>
                        <p>T-shits with multiple colors for men and ladies</p>
                        <p className="text-[#DEE2E7]">
                          size : medium, color : blue , material : plastic{" "}
                          <br /> seller :Artal Market
                        </p>
                      </div>
                      <div className="flex pt-3">
                        <button className="border-[#DEE2E7] py-1 px-2 rounded-sm text-[#FA3434] border-1 font-medium">
                          Remove
                        </button>
                        <button className="border-[#DEE2E7] py-1 px-2 rounded-sm border-1 ml-3 text-[#0D6EFD] font-medium">
                          {" "}
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="right   p-2">
                    <div className="pb-2 pt-3 text-end">
                      {" "}
                      <p>$170.50</p>
                    </div>
                    <div className=" border-[#DEE2E7] border-1 rounded-r-lg rounded-l-lg w-[100px] items-center flex justify-between p-1">
                      <div className="ps-2"> Qty: 9 </div>{" "}
                      <div className="text-[#DEE2E7]">
                        <FaArrowDown />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex  border-b-1 border-[#DEE2E7] justify-between  ">
                  <div className="left p-3    flex">
                    <div className="w-[73px] h-[80px]">
                      <Image src={image8} alt="" />
                    </div>
                    <div>
                      <div>
                        <p>T-shits with multiple colors for men and ladies</p>
                        <p className="text-[#DEE2E7]">
                          size : medium, color : blue , material : plastic{" "}
                          <br /> seller :Artal Market
                        </p>
                      </div>
                      <div className="flex pt-3">
                        <button className="border-[#DEE2E7] py-1 px-2 rounded-sm text-[#FA3434] border-1 font-medium">
                          Remove
                        </button>
                        <button className="border-[#DEE2E7] py-1 px-2 rounded-sm border-1 ml-3 text-[#0D6EFD] font-medium">
                          {" "}
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="right   p-2">
                    <div className="pb-2 pt-3 text-end">
                      {" "}
                      <p>$170.50</p>
                    </div>
                    <div className=" border-[#DEE2E7] border-1 rounded-r-lg rounded-l-lg w-[100px] items-center flex justify-between p-1">
                      <div className="ps-2"> Qty: 1 </div>{" "}
                      <div className="text-[#DEE2E7]">
                        <FaArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" pt-4 text-white flex justify-between  ">
                  <div className=" w-[150px] rounded flex justify-between bg-[#107CFF] rounded-r-lg rounded-l-lg p-2 items-center">
                    {" "}
                    <div>
                      <FaArrowLeft />
                    </div>{" "}
                    <div>
                      <button> Back up to shop</button>
                    </div>
                  </div>
                  <button className="border-1   text-[#107CFF] border-[#DEE2E7] rounded-r-lg rounded-l-lg px-2 font-medium">
                    Remove all
                  </button>
                </div>
              </div>
              <div className="locksectioninner py-7 flex  m-atuo justify-between ">
                {two.map((item, index) => (
                  <div className="main flex justify-between " key={item.id}>
                    <div className="img">
                      <Image src={item.img} alt="img" />
                    </div>
                    <div className="cont pl-3">
                      <p>{item.title}</p>
                      <p className="text-[#A9ACB0]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mainright ">
              <div className="first bg-white p-4 w-[280px]   border-1 border-[#DEE2E7]  rounded-r-lg rounded-l-lg">
                <p className="text-[rgb(80,80,80)] pb-1">Have a coupen?</p>
                <div className="flex border-1 border-[#DEE2E7] rounded-r-lg rounded-l-lg ">
                  <input
                    type="text"
                    placeholder="Add coupen"
                    className="ps-5 py-[5px] w-[70%]"
                  />

                  <button className="border-s-1 border-[#DEE2E7]  text-[#107CFF] py-[5px] w-[30%]">
                    Apply
                  </button>
                </div>
              </div>

              <div className=" second mt-5 bg-white  border-1 border-[#DEE2E7] rounded-r-lg rounded-l-lg">
                <div className="p-3 ">
                  <div className="flex pb-2 border-b-1 border-[#DEE2E7] justify-between secondinner">
                    <div className="one">
                      <div className="text-[#505050] p-1">Subtotal:</div>
                      <div className="text-[#505050] p-1">Discount:</div>
                      <div className="text-[#505050] p-1">Tax:</div>
                    </div>

                    <div className="two">
                      <div className="text-[#505050] p-1">$1403.97</div>
                      <div className="text-[#FA3434] p-1">-$60</div>
                      <div className="text-[#00B517] p-1">-$14</div>
                    </div>
                  </div>

                  <div className="flex justify-between py-3">
                    <div>
                      {" "}
                      <p className="text-[17px] font-medium">Total:</p>
                    </div>
                    <div>
                      {" "}
                      <p className="font-medium text-[17px]">$1357.97</p>
                    </div>
                  </div>

                  <button className="bg-[#00B517] text-white w-full rounded-r-lg rounded-l-lg p-3">
                    Checkout
                  </button>
                </div>
                <div className="mainbottom ">
                  <div className="flex items-center  rounded pt-4 pb-4 justify-between px-10">
                    <div className="w-[34px] h-[22px] p-[2px] border-1 border-[#DEE2E7] rounded ">
                      <Image
                        src={image2}
                        alt="img"
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                    <div className="w-[34px] h-[22px] p-[2px] border-1 border-[#DEE2E7] rounded">
                      <Image
                        src={image3}
                        alt="img"
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                    <div className="w-[34px] h-[22px] p-[2px]  border-1 border-[#DEE2E7] rounded">
                      <Image
                        src={image4}
                        alt="img"
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                    <div className="w-[34px] h-[22px] p-[2px] border-1 border-[#DEE2E7] rounded">
                      <Image
                        src={image5}
                        alt="img"
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                    <div className="w-[34px] h-[22px] p-[2px] border-1 border-[#DEE2E7] rounded">
                      <Image
                        src={image6}
                        alt="img"
                        className="w-[100%] h-[100%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="savesection w-[1180px] m-auto  ">
            <div className="savesectioninner border-1 border-[#DEE2E7] rounded bg-white pt-3">
              <b className="text-[20px] pb-4   ml-7">Save for later</b>

              <div className="main grid grid-cols-4 gap-4  rounded-sm p-[25px] ">
                {savetab.map((item, index) => (
                  <div className="card" key={item.id}>
                    <div className=" p-[35px] h-[260px] rounded-sm bg-[#EEEEEE]">
                      <Image src={item.img} alt="img" />
                    </div>

                    <div className="content mt-3  w-[200px]">
                      <b className="">{item.price}</b>
                      <p className="pt-3 pb-3 text-[#606060]">{item.title}</p>

                      <button className="flex text-[#0D6EFD] border-1 border-[#DEE2E7]  p-2 rounded-sm">
                        <Image src={image16} alt="img" />{" "}
                        <p className="pl-2">{item.btn}</p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="supersection w-[1180px] pt-[30px] m-auto">
            <div className="supersectioninner bg-[#237CFF] p-7 flex  border-1 border-[#DEE2E7] rounded justify-between items-center ">
              <div className="content">
                <p className="text-white text-[24px] font-semibold">
                  Super discount on more than 100 USD
                </p>
                <p className="text-[#BDD8FF] text-[16px]">
                  Have you ever finally just write dummy info{" "}
                </p>
              </div>

              <div className="btn">
                <button className="bg-[#FF9017] p-3 text-white rounded-sm">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </section>
        .{" "}
      </main>
    </>
  )
}

export default Page