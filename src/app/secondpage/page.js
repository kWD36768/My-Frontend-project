"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import image1 from "./../../../public/1.png";
import image2 from "./../../../public/profile.png";
import image3 from "./../../../public/message.png";
import image4 from "./../../../public/order.png";
import image5 from "./../../../public/cart.png";
import image6 from "./../../../public/applee.png";
import image8 from "./../../../public/OIP.jpeg";
import { MdArrowForwardIos } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
// import image7 from './../../../public/googlle.png'
import image9 from "./../../../public/1.jpg";
import image10 from "./../../../public/3.jpg";
import image11 from "./../../../public/2.jpg";
import image12 from "./../../../public/7.jpg";
import image13 from "./../../../public/8.jpg";
import image14 from "./../../../public/9.jpg";
import { FaRegHeart } from "react-icons/fa";
// import { MdList } from "react-icons/md";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdWindow } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
const Header = () => {
  const [ifopen, setifopen] = useState(true);
  const [ifbrand, setifbrand] = useState(true);
  const [iffeatured, setiffeatured] = useState(true);
  const [ifseeall, setifseeall] = useState(false);
  const [ifcondition, setifcondition] = useState(true);
  const [ifratings, setifratings] = useState(true);
  const [ifprice, setifprice] = useState(true);
  const [ifbox, setifbox] = useState("window");
  const [ifheart, setifheart] = useState(false);

    const card = [
        {
          img: image9,
    
          title: "Cannon Camera EQS 2000 , Black 10x Zoom",
          price: "$998.00",
          strike: "$1128.00",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          view: "view details",
        },
        {
          id: 2,
          img: image10,
          title: "Cannon Camera EQS 2000 , Black 10x Zoom",
          price: "$998.00",
          strike: "$1128.00",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          view: "view details",
        },
        {
          id: 3,
          img: image11,
          title: "Cannon Camera EQS 2000 , Black 10x Zoom",
          price: "$998.00",
          strike: "$1128.00",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          view: "view details",
        },
        {
          id: 4,
          img: image12,
          title: "Cannon Camera EQS 2000 , Black 10x Zoom",
          price: "$998.00",
          strike: "$1128.00",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          view: "view details",
        },
        {
          id: 5,
          img: image13,
          title: "Cannon Camera EQS 2000 , Black 10x Zoom",
          price: "$998.00",
          strike: "$1128.00",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          view: "view details",
        },
        {
          id: 6,
          img: image14,
          title: "Cannon Camera EQS 2000 , Black 10x Zoom",
          price: "$998.00",
          strike: "$1128.00",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          view: "view details",
        },
      ];

  return (
    <>
      <div className="bg-[#F7FAFC]">
        <div className="thirdinner w-[1180px] m-auto ">
          <ul className="flex ">
            <li className="flex items-center p-3 text-[#8B96A5]">
              <div>Home</div> &nbsp;{" "}
              <div>
                <MdArrowForwardIos size={12} />
              </div>
            </li>
            <li className="flex items-center p-3 text-[#8B96A5]">
              <div>Clothing</div> &nbsp;{" "}
              <div>
                <MdArrowForwardIos size={12} />
              </div>
            </li>
            <li className="flex items-center p-3 text-[#8B96A5]">
              <div>Mens Wear</div> &nbsp;{" "}
              <div>
                <MdArrowForwardIos size={12} />
              </div>
            </li>
            <li className="flex items-center p-3 text-[#8B96A5]">
              <div>Summer Clothing</div> &nbsp;{" "}
              <div>
                <MdArrowForwardIos size={12} />
              </div>
            </li>
          </ul>
        </div>

        <section>
          <div className="mainfth w-[1180px] m-auto">
            <div className="mainfthinner flex">
              <div className="leftmain w-[257px] pe-4">
                <div className="cat border-t-1 border-[#EAEEF1] ">
                  <div className="flex justify-between py-2">
                    <div>
                      <span className="font-bold">Category</span>
                    </div>
                    <div onClick={() => setifopen(!ifopen)} className="p-1">
                      {ifopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                  </div>
                  <div
                    className={` transition-all durantion-300 ease-in-out overflow-hidden transform
         ${
           ifopen
             ? "h-[150px] translate-y-0 opacity-100"
             : "h-0 trasnlate-y-[-20px] opacity-0"
         }`}
                  >
                    <ul>
                      <li className="text-[#8E9090] p-1">Mobile Accessories</li>
                      <li className="text-[#8E9090] p-1">Electronics</li>
                      <li className="text-[#8E9090] p-1">Smartphone</li>
                      <li className="text-[#8E9090] p-1">Modern Tech</li>
                      <li className="text-[#127EFE] p-1">See all</li>
                    </ul>
                  </div>
                </div>

                <div className="brandmain   w-[257px] pe-4">
                  <div className="brandinner mt-6 border-t-1 border-[#EAEEF1] flex justify-between items-center">
                    <div>
                      <span className="p-1 font-bold ">Brand</span>
                    </div>
                    <div onClick={() => setifbrand(!ifbrand)} className="p-1">
                      {ifbrand ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                  </div>
                  <div
                    className={` trasition-all duration-300 ease-in-out overflow-hidden
         ${
           ifbrand
             ? "h-[200px] translate-y-0 opacity-100"
             : "h-0 trasnlate-y-[20px] opacity-0"
         }`}
                  >
                    <ul>
                      <li className="p-1 ">
                        <input type="checkbox" /> &nbsp; <label>Samsung</label>
                      </li>
                      <li className="p-1 ">
                        <input type="checkbox" /> &nbsp; <label>applee</label>
                      </li>
                      <li className="p-1 ">
                        <input type="checkbox" /> &nbsp; <label>Hwawei</label>
                      </li>
                      <li className="p-1 ">
                        <input type="checkbox" /> &nbsp; <label>Pocco</label>
                      </li>
                      <li className="p-1 ">
                        <input type="checkbox" /> &nbsp; <label>Lenovo</label>
                      </li>
                      <li className="p-1 text-[#127EFE]">See All</li>
                    </ul>
                  </div>
                </div>
                <div className="featured w-[257px] pe-4">
                  <div className="featuredinner">
                    <div className="">
                      <div className="flex justify-between border-t-1 border-[#EAEEF1] ">
                        <div>
                          <span className="p-1 font-bold">Featured</span>
                        </div>
                        <div
                          onClick={() => setiffeatured(!iffeatured)}
                          className="p-1"
                        >
                          {iffeatured ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                      </div>
                      <div
                        className={` transition-all duration-300 ease-in-out overflow-hidden  ${
                          iffeatured
                            ? "h-[200px] opacity-100 translate-y-0  "
                            : "h-0 opacity-0 translate-y-[-20px]"
                        }`}
                      >
                        <ul>
                          <li className="p-1 ">
                            <input type="checkbox" /> &nbsp;{" "}
                            <label>Mattalic</label>
                          </li>
                          <li className="p-1 ">
                            <input type="checkbox" /> &nbsp;{" "}
                            <label>Plastic</label>
                          </li>
                          <li className="p-1 ">
                            <input type="checkbox" /> &nbsp;{" "}
                            <label>8GB RAM</label>
                          </li>
                          <li className="p-1 ">
                            <input type="checkbox" /> &nbsp;{" "}
                            <label>Super Power</label>
                          </li>
                          <li className="p-1 ">
                            <input type="checkbox" /> &nbsp;{" "}
                            <label>Large Memory</label>
                          </li>
                          <li
                            className="p-1 text-[#127EFE]"
                            onClick={() => setifseeall(!ifseeall)}
                          >
                            See All
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pricmain">
                  <div className="priceinner w-[257px] pe-4 ">
                    <div>
                      <div className="flex justify-between border-t-1 border-[#EAEEF1]">
                        <div>
                          <span className="font-bold p-1">Price range</span>
                        </div>
                        <div
                          className="p-1"
                          onClick={() => setifprice(!ifprice)}
                        >
                          {ifprice ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                      </div>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden
               ${
                 ifprice
                   ? "h-[120px] translate-y-0 opacity-100 "
                   : "h-0 translate-y-[-20px] opacity-0"
               }`}
                      >
                        <div className=" flex justify-between ">
                          <div>
                            <label>Min</label> <br />
                            <input
                              type="number"
                              placeholder="0"
                              className=" rounded-sm border border-[#DEE2E7] w-[115px] p-1"
                            />
                          </div>
                          <div>
                            <label>Max</label> <br />
                            <input
                              type="number"
                              placeholder="999999"
                              className=" rounded-sm border border-[#DEE2E7] w-[115px] p-1"
                            />
                          </div>
                        </div>
                        <button className="rounded-sm border mt-[10px] border-[#DEE2E7] p-1 w-[100%] text-[#3B89FE]">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="condtionmain mt-4">
                  <div className="conditioninner w-[257px] pe-4  ">
                    <div>
                      <div>
                        <div className="flex items center border-t-1 border-[#EAEEF1] justify-between">
                          <div>
                            <span className="p-1 font-bold">Condition</span>
                          </div>
                          <div
                            onClick={() => setifcondition(!ifcondition)}
                            className="p-1"
                          >
                            {ifcondition ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </div>
                        </div>
                        <div
                          className={`transition-all duration-300  ease-in-out overflow-hidden
                ${
                  ifcondition
                    ? "h-[150px] translate-y-0 opacity-100 "
                    : "h-0 translate-y-[-20px] opacity-0 "
                }`}
                        >
                          <ul>
                            <li className="p-1 ">
                              <input type="checkbox" /> &nbsp;{" "}
                              <label>Any</label>
                            </li>
                            <li className="p-1 ">
                              <input type="checkbox" /> &nbsp;{" "}
                              <label>Refurbished</label>
                            </li>
                            <li className="p-1 ">
                              <input type="checkbox" /> &nbsp;{" "}
                              <label>Brand new</label>
                            </li>
                            <li className="p-1 ">
                              <input type="checkbox" /> &nbsp;{" "}
                              <label>Old items</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ratingsmain">
                  <div className="ratinginner w-[257px] pe-4">
                    <div className="border-t-1 border-[#EAEEF1]">
                      <div className="flex justify-between">
                        <div>
                          <span className="font-bold p-1"> Ratings</span>
                        </div>
                        <div
                          onClick={() => setifratings(!ifratings)}
                          className="p-1"
                        >
                          {ifratings ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                      </div>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden
            ${
              ifratings
                ? "h-[200px]  opacity-100 translate-y-0"
                : "h-0 opacity-0 translate-y-[-20px]"
            }`}
                      >
                        <ul>
                          <li className="flex items-center mt-2  p-1">
                            {" "}
                            <input type="checkbox" /> &nbsp; &nbsp;
                            <p className="flex text-[#FF9017]">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </p>
                          </li>
                          <li className="flex items-center mt-2  p-1">
                            {" "}
                            <input type="checkbox" /> &nbsp; &nbsp;
                            <p className="flex text-[#FF9017]">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </p>{" "}
                            <p className="text-[#D4CDC5]">
                              <FaStar />
                            </p>
                          </li>

                          <li className="flex items-center mt-2 p-1 ">
                            {" "}
                            <input type="checkbox" /> &nbsp; &nbsp;
                            <p className="flex text-[#FF9017]">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </p>{" "}
                            <p className="text-[#D4CDC5] flex">
                              <FaStar />
                              <FaStar />
                            </p>
                          </li>

                          <li className="flex items-center mt-2 p-1 ">
                            {" "}
                            <input type="checkbox" /> &nbsp; &nbsp;
                            <p className="flex text-[#FF9017]">
                              <FaStar />
                              <FaStar />
                            </p>{" "}
                            <p className="text-[#D4CDC5] flex">
                              <FaStar />
                              <FaStar /> <FaStar />
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right w-[923px] ">
                <div className=" ">
                  <div>
                    <div className="rightinner p-1 flex justify-between items-center shadow-[#EBEDEE] bg-[#FFFFFF] rounded-sm shadow-sm overflow-hidden">
                      <div className="flex">
                        <p className="text-[#A9A9A9]">12911 items in </p>&nbsp;{" "}
                        <p>Mobile Accessories</p>
                      </div>
                      <div className="flex items-center justify-between w-[340px]">
                        <input type="checkbox" /> &nbsp; <p>verified only</p>{" "}
                        <div className="flex justify-between items-center w-[150px] border  border-[#EAEEF1]  rounded-sm p-1">
                          {" "}
                          <div>Featured</div>{" "}
                          <div>
                            <IoIosArrowDown />
                          </div>
                        </div>{" "}
                        <div className="flex items-center">
                          <div
                            className={`p-1 rounded border border-[#EEF0F3]  cursor-pointer ${
                              ifbox === "window" ? "box" : ""
                            }`}
                            onClick={() => setifbox("window")}
                          >
                            <MdWindow />{" "}
                          </div>
                          <div
                            className={`p-1 rounded border border-[#EEF0F3] cursor-pointer ${
                              ifbox === "alignjustify" ? "box" : ""
                            } `}
                            onClick={() => setifbox("alignjustify")}
                          >
                            <FiAlignJustify />
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${ifbox === "alignjustify" ? "" : "hidden"}`}
                  >
                    <div className="cardinner ">
                      <div className=" card   p-3">
                        {card.map((item) => (
                          <div
                            className=" flex  bg-[bg-[#FFFFFF]  rounded-sm shadow-sm  shadow-[#EBEDEE] bg-[#FFFFFF] mb-2"
                            key={item.id}
                          >
                            <div>
                              <Image src={item.img} alt="img" />
                            </div>

                            <div className="content w-[640px] mt-3">
                              <div className="flex justify-between">
                                {" "}
                                <div className="text-[20px] text-[#555555]">
                                  {item.title}
                                </div>{" "}
                                <div className="border border-[#EEF0F3] rounded-sm p-2 text-[#1C77FD]">
                                  <FaRegHeart />
                                </div>{" "}
                              </div>
                              <div className="flex items-center mt-2">
                                {" "}
                                <p className="font-bold">{item.price}</p> &nbsp;
                                &nbsp;{" "}
                                <strike className="text-[#8B96A5]">
                                  {item.strike}
                                </strike>
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-center mt-2 ">
                                  <p className="flex text-[#FF9017]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                  </p>{" "}
                                  <p className="text-[#D4CDC5]">
                                    <FaStar />
                                  </p>{" "}
                                  &nbsp;&nbsp;{" "}
                                  <p className="text-[#FF9017]">7.5</p>{" "}
                                  &nbsp;&nbsp;{" "}
                                  <p className="text-[#DEE2E7]">
                                    <GoDotFill />
                                  </p>{" "}
                                  &nbsp;&nbsp;{" "}
                                  <p className="text-[#8B96A5]">154 orders </p>{" "}
                                  &nbsp;&nbsp;{" "}
                                  <p className="text-[#DEE2E7]">
                                    <GoDotFill />
                                  </p>{" "}
                                  &nbsp;&nbsp;{" "}
                                  <p className="text-[#FF9017]">
                                    Free Shipping
                                  </p>{" "}
                                </div>
                              </div>
                              <div className="w-[600px] text-[#929292] mt-3">
                                {" "}
                                <p>{item.details}</p>
                              </div>
                              <button className="text-[#3B89FE] font-bold mt-3">
                                {item.view}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      ifbox === "window" ? "" : "hidden"
                    } transition duration-300`}
                  >
                    <div className="cardinner ">
                      <div className=" card  grid grid-cols-3 gap-2 p-3">
                        {card.map((item, index) => (
                          <div
                            className="  bg-[bg-[#FFFFFF]  rounded-sm shadow-sm  shadow-[#EBEDEE] bg-[#FFFFFF] mb-2"
                            key={item.id}
                          >
                            <div>
                              <Image src={item.img} alt="img" />
                            </div>

                            <div className="content p-3  mt-3">
                              <div className="flex justify-between">
                                {" "}
                                <div className="flex items-center">
                                  {" "}
                                  <p className="font-bold">{item.price}</p>{" "}
                                  &nbsp; &nbsp;{" "}
                                  <strike className="text-[#8B96A5]">
                                    {item.strike}
                                  </strike>{" "}
                                </div>{" "}
                                <div
                                  className="border border-[#EEF0F3] rounded-sm
                                 p-2 text-[#1C77FD]"
                                  onClick={() => setifheart(item.id)}
                                >
                                  {ifheart === item.id ? <FaHeart/> :  <FaRegHeart />}
                                 
                                </div>{" "}
                              </div>

                              <div className="flex justify-between">
                                <div className="flex items-center">
                                  <p className="flex text-[#FF9017]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                  </p>{" "}
                                  <p className="text-[#D4CDC5]">
                                    <FaStar />
                                  </p>{" "}
                                  &nbsp;&nbsp;{" "}
                                  <p className="text-[#FF9017]">7.5</p>{" "}
                                </div>
                              </div>
                              <div className=" text-[#929292] mt-3 w-[200px]">
                                {" "}
                                <p>{item.title} </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-end mt-9">
                  <div className="w-[130px] p-1 bg-[#FFFFFF] me-5 rounded-sm border border-[#DEE2E7]">
                    <div className="flex justify-between items-center">
                      <span>show 10</span>{" "}
                      <span>
                        {" "}
                        <IoIosArrowDown />
                      </span>
                    </div>
                  </div>
                  <div className="w-[128px]  bg-[#FFFFFF] rounded-sm border border-[#DEE2E7]">
                    <div className="flex justify-evenly items-center">
                      <span>
                        <MdOutlineKeyboardArrowLeft size={21} />
                      </span>{" "}
                      <span className="border border-[#DEE2E7] bg-[#EFF2F4] w-[31px]  h-[31px]  text-center">
                        1
                      </span>{" "}
                      <span className="border border-[#DEE2E7] w-[31px] text-center  h-[31px] ">
                        2
                      </span>{" "}
                      <span className="border border-[#DEE2E7] w-[31px] text-center h-[31px] ">
                        3
                      </span>{" "}
                      <span>
                        <MdKeyboardArrowRight size={21} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
