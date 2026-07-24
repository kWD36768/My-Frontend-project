"use client";
import React, { useState } from "react";
import image1 from "./../../../public/1.png";
import image2 from "./../../../public/profile.png";
import image3 from "./../../../public/message.png";
import image4 from "./../../../public/order.png";
import image5 from "./../../../public/cart.png";
import image6 from "./../../../public/image34.png";
import image8 from "./../../../public/image35.png";
import image9 from "./../../../public/image40.png";
import image10 from "./../../../public/image36.png";
import image11 from "./../../../public/image37.png";
import image12 from "./../../../public/image39.png";
import image13 from "./../../../public/german.jpeg";
import image47 from "../assets/9.jpg";
import image48 from "../assets/10.jpg";
import image37 from "../assets/interior/7.jpg";
import image22 from "../assets/cloth/1.jpg";
import image23 from "../assets/cloth/3.jpg";
import image24 from "../assets/cloth/7.jpg";
import image25 from "../assets/cloth/5.jpg";
import image26 from "../assets/cloth/6.jpg";
import image27 from "../assets/cloth/4.jpg";
import image28 from "../assets/8.jpg";

import { TiTick } from "react-icons/ti";
import { IoCheckmark } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import image7 from "./../../../public/googlle.png";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdStar } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { MdOutlineDirectionsBoat } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";

const shirts = () => {

   const [activeTabCat, setActiveTabCat] = useState("Description");
   const [activeimage , setactiveimage]  = useState(image8);
   const [ifcolor , setifcolor] = useState(true); 
  const [shirt , setshirt] = useState(true);
  const [ifborder , setifborder] = useState(true)
  const data = [
    {
      img: image8,
      id: 1,
    },
    {
      img: image9,
      id: 2,
    },
    {
      img: image10,
      id: 3,
    },
    {
      img: image11,
      id: 4,
    },
    {
      img: image8,
      id: 5,
    },
  ];

  const related = [
    {
      id: 1,
      img: image26,
      title: "Xiaomi Redme 8 Oridional",
      price: "$32.00-$40.00",
    },

    {
      id: 2,
      img: image28,
      title: "Xiaomi Redme 8 Oridional  ",
      price: "$32.00-$40.00 ",
    },

    {
      id: 3,
      img: image47,
      title: "Xiaomi Redme 8 Oridional",
      price: "$32.00-$40.00",
    },

    {
      id: 4,
      img: image27,
      title: "Xiaomi Redme 8 Oridional",
      price: "$32.00-$40.00",
    },
    {
      id: 5,
      img: image48,
      title: "Xiaomi Redme 8 Oridional",
      price: "$32.00-$40.00",
    },
    {
      id: 6,
      img: image37,
      title: "Xiaomi Redme 8 Oridional",
      price: "$32.00-$40.00",
    },
  ];
    const righttab = [
      {
      id:1,
      img:image22,
      title:'Xiaomi Redme 8 Oridional'  ,
      price: '$32.00-$40.00'
    
    },
    
    {
      id:2,
      img:image23,
      title:'Xiaomi Redme 8 Oridional  ',
      price: '$32.00-$40.00 '
    
    },
    
    {
      id:3,
      img:image24,
      title:'Xiaomi Redme 8 Oridional',
      price: '$32.00-$40.00'
    
    },
    
    {
      id:4,
      img:image25,
      title:'Xiaomi Redme 8 Oridional',
      price: '$32.00-$40.00'
    
    },
    {
      id:5,
      img:image26,
      title:'Xiaomi Redme 8 Oridional',
      price: '$32.00-$40.00'
    
    }
    ,
 
    
    ] 
    const imagesdata = [
      {
  id : 1 ,
  img : image12
},
      {
  id : 2 ,
  img : image8
},
      {
  id : 3 ,
  img : image9
},
      {
  id : 4 ,
  img : image10
},
      {
  id : 5 ,
  img : image11
},
      {
  id : 5 ,
  img : image11
},

]
  return (
    <>
     <div className="bg-[#F8F9FA]">
      <div className="w-[1180px] m-auto">
  <section>
        <div className="down shadow-sm ">
          <div className="inner mt-6 bg-[#FFFFFF] p-2 w-[1180px] m-auto flex justify-between">
            <div className="first w-[30%]  ">
              <div className="forbig  w-[350px] p-3 h-[350px]">
              
                 
                  
               
                    
                        <Image src={activeimage} className="w-[100%] h-[100%]" alt='image'/>
                    
                
                 
                 
               
              </div>
              <div className="formsalss p-3 mt-3 flex justify-between"> 
               {
                imagesdata.map((item) => (
                   <div  key={item.id}  className={`p-1 ml-2 border-1 border-[#dfdddd] ${ifborder === item.id ? 'border' : ''}} `} onClick={()=> setactiveimage(item.img )} >
                  <Image src={item.img}className="w-[100%] cursor-pointer"  onClick={()=> setifborder( item.id)} alt="img" />
                  
                </div>
                ))
               }
               
              </div>
            </div>
            <div className=" p-4 second   w-[35%]">
              <div className="w-[90%]">
                <div className="text-[#20BE34] flex items-center">
                  {" "}
                  <div>
                    <IoCheckmark />
                  </div>{" "}
                  &nbsp;<div> In Stock</div>
                </div>

                <p className="font-bold">
                  Mens Long Sleeves T-shirts Cooton Base <br /> Layer Slim
                  Muscles
                </p>

                <div className="flex mt-2  items-center justify-between w-[305px]">
                  <div className="text-[#FFB35F] flex items-center ">
                    <div>
                      <MdStar />{" "}
                    </div>{" "}
                    <div>
                      <MdStar />{" "}
                    </div>{" "}
                    <div>
                      <MdStar />{" "}
                    </div>{" "}
                    <div>
                      <MdStar />{" "}
                    </div>{" "}
                    <div className="text-[#D4CDC5]">
                      <MdStar />
                    </div>{" "}
                    <div className="text-[#D4CDC5]">
                      <GoDotFill />
                    </div>
                  </div>

                  <div className="text-[#8B96A5] flex items-center ">
                    <div className="text-[#8B96A5]">
                      <MdMessage />
                    </div>{" "}
                    &nbsp;
                    <div>
                      <p>32 reviews</p>
                    </div>{" "}
                    <div className="text-[#D4CDC5]  ">
                      <GoDotFill />
                    </div>
                  </div>

                  <div className="text-[#8B96A5] flex items-center ">
                    <div className="text-[#8B96A5]">
                      <MdOutlineDirectionsBoat />
                    </div>{" "}
                    &nbsp;{" "}
                    <div>
                      <p>154 sold</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pinkdiv bg-[#FFF0DF] mt-2 p-4">
                  <div className="divinner flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#FA3434]">$98.00</p>{" "}
                      <p className="text-[#6A6968]">50-100 pcs</p>
                    </div>
                    <div className=" border-s-1 p-2 border-[#BDC1C8]">
                      <p className="font-bold text-black">$90.00</p>{" "}
                      <p className="text-[#6A6968]">100-700 pcs</p>
                    </div>
                    <div className="p-2  border-s-1 border-[#BDC1C8]">
                      <p className="font-bold  text-black">$98.00</p>{" "}
                      <p className="text-[#6A6968]">700+ pcs</p>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <div className="priceinner">
                    <div className=" flex  pt-4 border-b-1 border-[#E5E7EC]">
                      {" "}
                      <span className="w-[40%] text-[#B7BDC7]">
                        Price :{" "}
                      </span>{" "}
                      <span>Negotiable</span>
                    </div>
                    <div className="border-b-1 border-[#E5E7EC] pt-4">
                      <div className=" flex">
                        {" "}
                        <span className="w-[40%] text-[#B7BDC7]">
                          Type :
                        </span>{" "}
                        <span>Classic shoes</span>
                      </div>
                      <div className=" flex ">
                        {" "}
                        <span className="w-[40%] text-[#B7BDC7]">
                          Material :{" "}
                        </span>{" "}
                        <span>Plastic Material</span>
                      </div>
                      <div className=" flex ">
                        {" "}
                        <span className="w-[40%] text-[#B7BDC7]">
                          Design :{" "}
                        </span>{" "}
                        <span>Modern Nice</span>
                      </div>
                    </div>
                    <div className="border-b-1 border-[#E5E7EC] pt-4">
                      <div className=" flex">
                        {" "}
                        <span className="w-[40%] text-[#B7BDC7]">
                          Customization :
                        </span>{" "}
                        <span>
                          Customize logo and <br /> desing custom packages{" "}
                        </span>
                      </div>
                      <div className=" flex ">
                        {" "}
                        <span className="w-[40%] text-[#B7BDC7]">
                          Protection :{" "}
                        </span>{" "}
                        <span>Refund Policy</span>
                      </div>
                      <div className=" flex ">
                        {" "}
                        <span className="w-[40%] text-[#B7BDC7]">
                          Warranty :{" "}
                        </span>{" "}
                        <span>2 Years Full warranty</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[23%] ">
              <div className="third shadow-sm p-5 border-[#E5E7EC]">
                <div className="thirdinner  border-b-1 border-[#E5E7EC] flex  ">
                  <div className="p-3 bg-[#C6F3F1]  w-[40px]  text-center">
                    <span className="text-[#81C8C6] text-[25px] font-bold">
                      R
                    </span>
                  </div>
                  <div className="ml-3">
                    <span>
                      Suuplier <br /> Guanjoi Trading LLC
                    </span>
                  </div>
                </div>

                <div>
                  <div className=" pt-3">
                    <div className="flex items-center">
                      {" "}
                      <div className="w-[22px]">
                        <Image src={image13} alt="image" />
                      </div>{" "}
                      <div>
                        <span className="ml-2  text-[#B7BDC7]">
                          German, Berlin
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {" "}
                      <span className="text-[#929DAB]">
                        <MdVerifiedUser size={20} />
                      </span>{" "}
                      <span className="ml-2  text-[#B7BDC7]">
                        Verified Seller
                      </span>
                    </div>
                    <div className="flex items-center">
                      {" "}
                      <span className="text-[#929DAB]">
                        <TbWorld size={20} />
                      </span>{" "}
                      <span className="ml-2  text-[#B7BDC7]">
                        World Wide Shipping
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <button className=" bg-[#0E79FF] cursor-pointer text-white  p-2 mt-7  w-[100%] rounded  ">
                    Send Inquiry
                  </button>
                  <button className="text-[#0E79FF] cursor-pointer w-[100%] p-2 rounded mt-2 border-1 border-[#dfdddd] border-[#E5E7EC]  ">
                    {" "}
                    Seller's Profile
                  </button>
                </div>
              </div>
              <div className=" flex items-center pt-7 text-[#1C77FD] text-center font-bold">
                <span className="ml-[60px] cursor-pointer font-extrabold">
                  <FaRegHeart />
                </span>{" "}
                &nbsp; &nbsp;
                <span className='cursor-pointer'>Save For Later</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
          <div className="flex mt-5">
            <div className="left w-[75%]  border-1 shadow border-[#dfdddd] rounded-r-lg  rounded-l-lg bg-white ">
              <div className="pt-4  flex border-b-1 border-[#dfdddd] ">
                <div className="ms-2 ">
                  <button
                  onClick = {()=> setActiveTabCat("Description")}
                 className={`${activeTabCat ==="Description" ? "tab" : ""} p-3` }
                  >
                    Description
                  </button>
                </div>
                <div className="ms-2 ">
                  <button
                   onClick={()=> setActiveTabCat("Reviews")}
                  className={`${activeTabCat === "Reviews" ? "tab" : "" } p-3`}
                  >
                    Reviews
                  </button>
                </div>
                <div className="ms-2 ">
                  <button
               onClick={()=> setActiveTabCat("Shipping")}
               className={`${activeTabCat === "Shipping" ? "tab" : "" } p-3`}
                  >
                    Shipping
                  </button>
                </div>
                <div className="ms-2 ">
                  <button
                onClick={()=> setActiveTabCat("About seller")}
              className = {`${activeTabCat === "About seller" ? "tab" : "" } p-3` }
                  >
                    About seller
                  </button>
                </div>
              </div>
              <div className="tabbody p-5 text-[18px] text-[#505050] leading-[24px]  b_left  ">
                {/* ----Desription content---- */}
                <div
                   className= {`${activeTabCat === "Description" ? "" : "hidden"}`}
                >
                  <p>
                  This premium quality product is designed to provide excellent performance, durability, and comfort for everyday use. It is made from high-quality materials with modern craftsmanship to ensure long-lasting reliability. Whether you are using it for personal or professional purposes, this product offers outstanding value with an attractive design and user-friendly experience.
                  </p>
                  <div className='w-[567px] text-[16px] flex justify-between my-5 border-[#dfdddd] border-1'>
                   <div className=' w-[204px]' >
                   
                    <p className="py-2 ps-2 pr-[50px] bg-[#EFF2F4] w-[204px] border-[#dfdddd]  border-b-1 ">Model</p>
                      <p className="py-2 ps-2 pr-[50px] bg-[#EFF2F4] w-[204px] border-[#dfdddd]  border-b-1 ">Stylle</p>
                      <p className="py-2 ps-2 pr-[50px] bg-[#EFF2F4] w-[204px] border-[#dfdddd]  border-b-1 ">Certificate</p>
                      <p className="py-2 ps-2 pr-[50px] bg-[#EFF2F4] w-[204px] border-[#dfdddd]  border-b-1 ">Size</p>
                      <p className="py-2 ps-2 pr-[50px] bg-[#EFF2F4] w-[204px]  ">Memory</p>
                   
                   </div>
                   <div className='border-[#dfdddd] border-s-1 w-[370px]'>
                 
                      <p className="p-2 border-[#dfdddd] border-b-1 w-[100%]">#8786867</p>
                      <p className="p-2 border-[#dfdddd] border-b-1 w-[100%]">Classic style</p>
                      <p className="p-2 border-[#dfdddd] border-b-1 w-[100%]">ISO-898921212</p>
                      <p className="p-2 border-[#dfdddd] border-b-1 w-[100%]">34mm x 450mm x 19mm</p>
                      <p className="p-2  w-[100%]">36GB RAM</p>
                   
                   </div>
                  </div>
                  <div>
                    <ul>
                      <li className='flex py-2 '>
                        <span className="text-[#8B96A5] mr-2"><TiTick /></span>
                        <span className="text-[16px]">Some great feature name here</span>
                      </li>
                      <li  className='flex py-2'>
                        <span className="text-[#8B96A5] mr-2"><TiTick /></span>
                        <span  className="text-[16px]">Lorem ipsum dolor sit amet, consectetur</span>
                      </li>
                      <li  className='flex py-2'>
                        <span className="text-[#8B96A5] mr-2"><TiTick /></span>
                        <span  className="text-[16px]">Duis aute irure dolor in reprehenderit</span>
                      </li>
                      <li  className='flex py-2'>
                        <span className="text-[#8B96A5] mr-2"><TiTick /></span>
                        <span  className="text-[16px]">Some great feature name here</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`${activeTabCat === "Reviews" ? "" : "hidden"}`}
                >
                  <p>Customers appreciate the product for its premium build quality, stylish appearance, and reliable performance. Many users have praised its comfort, durability, and excellent value for money. With positive feedback from satisfied buyers, it continues to be one of the most recommended products in its category.</p>
                </div>

                <div
                  className={`${activeTabCat === "Shipping" ? "" : "hidden"}`}
                >
                  <p>We provide fast and secure shipping across all supported locations. Orders are processed within 24 hours and usually delivered within 3–7 business days. Every package is carefully packed to ensure your product arrives safely. Customers will receive a tracking number once the order has been shipped.</p>
                </div>

                <div
                  className={`${
                    activeTabCat === "About seller" ? "" : "hidden"
                  }`}
                >
                  <p>Our store is committed to delivering high-quality products with excellent customer service. We carefully select every item to ensure customer satisfaction and offer responsive support before and after every purchase. Shop with confidence knowing that quality and trust are our top priorities.</p>
                </div>
              </div>
            </div>
            <div className="right w-[25%]  "> 
              <div className='border-1 shadow border-[#dfdddd] rounded-r-lg  rounded-l-lg bg-white ms-5'>
             
                      <div className="relatedsection  p-3">
                      <p className="mt-2 mb-2 text-black text-[19px] font-semibold">You may like</p>
                        <div className="relatedsectioninner gap-1">
                     {   righttab.map((item , index)=>(
                          <div className="relatedcard flex cursor-pointer " key={item.id}>
                        
                         <div className="relatedimg w-[80px] h-[80px] border-1 border-[#dfdddd] rounded-r-lg  rounded-l-lg overflow-hidden">
                          <Image src={item.img} alt='img' />
                         </div>
                         <div className=" pt-3 p-2 content  w-[180px] bg-white">
                         <p className="text-[ #BDBDBD]"> {item.title}</p>
                         <p className="text-[#C7CDD4] "> {item.price}</p>
                         
                         </div>
                          </div>
                        ))}
                        </div>
                      </div>
                   
              </div>
            </div>
          </div>
        </section>
            

      <div className="border-1 shadow border-[#dfdddd] rounded-r-lg  rounded-l-lg bg-white mt-5 ">
        <section>
          <div className="relatedsection w-[1180px]  mt-3 mb-3 m-auto p-3">
            <p className="mt-2 mb-2 text-black text-[20px] font-semibold">
              Related products
            </p>
            <div className="relatedsectioninner flex justify-between gap-1">
              {related.map((item, index) => (
                <div className="relatedcard  cursor-pointer" key={item.id}>
                  <div className="relatedimg p-5 w-[180px]  h-[200px] bg-[#E7E7E9]  rounded-r-lg  rounded-l-lg">
                    <Image src={item.img} className="h-[100%]" alt='img' />
                  </div>
                  <div className=" pt-3 p-2 content  w-[180px] bg-white">
                    <p className="text-[ #BDBDBD] pt-2"> {item.title}</p>
                    <p className="text-[#C7CDD4] pt-2"> {item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      </div>
     </div>
    
    </>
  );
};

export default shirts;
