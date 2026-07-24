"use client";
import Image from "next/image";
import apple from "./assets/applee.png";
import google from "./assets/googlle.png";
import flag from "./assets/flags/usa.png";
import mob1 from "./assets/1.jpg";
import mob2 from "./assets/2.jpg";
import mob3 from "./assets/3.jpg";
import mob4 from "./assets/4.jpg";
import mob5 from "./assets/7.jpg";
import image1 from "./assets/main11.png";
// import image2 from './assets/Avatar.png'
import image3 from "./assets/8.jpg";
import image4 from "./assets/7.jpg";
import image5 from "./assets/6.jpg";
import image6 from "./assets/5.jpg";
import image7 from "./assets/3.jpg";
import image8 from "./assets/image108.png";
import image9 from "./assets/image104.png";
import image10 from "./assets/image106.png";
import image11 from "./assets/image107.png";
import image12 from "./assets/flags/dubai.png";
import image13 from "./assets/flags/australia.png";
import image14 from "./assets/flags/usa.png";
import image15 from "./assets/flags/russia.png";
import image16 from "./assets/flags/itlay.png";
import image17 from "./assets/flags/scotland.png";
import image18 from "./assets/flags/france.png";
import image19 from "./assets/flags/dubai.png";
import image20 from "./assets/flags/china.png";
import image21 from "./assets/flags/england.png";
import { MdEmail } from "react-icons/md";
import image22 from "./assets/cloth/1.jpg";
import image23 from "./assets/cloth/3.jpg";
import image24 from "./assets/cloth/7.jpg";
import image25 from "./assets/cloth/5.jpg";
import image26 from "./assets/cloth/6.jpg";
import image27 from "./assets/cloth/4.jpg";
import image28 from "./assets/public/interior/3.jpg";
import image29 from "./assets/public/10.jpg";
import image30 from "./assets/public/9.jpg";
import { Sunflower } from "next/font/google";

import homeimg1 from "./assets/public/interior/1.jpg";
import homeimg2 from "./assets/public/interior/6.jpg";
import homeimg3 from "./assets/public/interior/5.jpg";
import homeimg4 from "./assets/public/interior/3.jpg";
import homeimg5 from "./assets/public/interior/9.jpg";
import homeimg6 from "./assets/public/interior/8.jpg";
import homeimg7 from "./assets/public/interior/7.jpg";
import homeimg8 from "./assets/public/interior/4.jpg";

import image31 from "./assets/interior/1.jpg";
import image32 from "./assets/interior/6.jpg";
import image33 from "./assets/interior/5.jpg";
import image34 from "./assets/interior/3.jpg";
import image35 from "./assets/interior/9.jpg";
import image36 from "./assets/interior/8.jpg";
import image37 from "./assets/interior/7.jpg";
import image38 from "./assets/interior/4.jpg";
import image39 from "./assets/public/tech/8.jpg";
import image40 from "./assets/public/tech/6.jpg";
import image41 from "./assets/public/tech/5.jpg";
import image42 from "./assets/public/tech/10.jpg";
import image43 from "./assets/public/tech/9.jpg";
import image44 from "./assets/public/tech/7.jpg";
import image45 from "./assets/public/tech/2.jpg";
import image46 from "./assets/public/tech/1.jpg";
import { BiDownArrowAlt } from "react-icons/bi";
import image47 from "./assets/9.jpg";
import image48 from "./assets/10.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { PiArrowFatLineRightBold } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const recommentedcontent = [
    {
      id: 1,
      img: image22,
      title: "T-shirts with multiple colors for men",
      btn: "$10.30",
    },

    {
      id: 2,
      img: image23,
      title: "Jeans shorts for men blue colo",
      btn: "$10.30",
    },

    {
      id: 3,
      img: image24,
      title: "Brown winter coat medium size",
      btn: "$12.50",
    },
    {
      id: 4,
      img: image26,
      title: "Leather wallet",
      btn: "$99.00",
    },
    {
      id: 5,
      img: image25,
      title: " Jeans bags for travel for men",
      btn: "$34.00",
    },
    {
      id: 6,
      img: image27,
      title: "cannon camera black 100x zoom",
      btn: "$9.99",
    },
    {
      id: 7,
      img: image30,
      title: "Headset for gaming with mic",
      btn: "$8.99",
    },
    {
      id: 8,
      img: image25,
      title: "Smart watch silver color modern",
      btn: "$10.30",
    },

    {
      id: 9,
      img: image28,
      title: "Blue wallet for men leather material",
      btn: "$10.30",
    },
    {
      id: 10,
      img: image29,
      title: "Jeans bag fro travel for men",
      btn: "$80.95",
    },
  ];

  const tabcontant = [
    {
      id: 1,
      img: image3,
      title: "Smart watches",
      btn: "-25%",
    },
    {
      id: 2,
      img: image4,
      title: "laptops",
      btn: "-25%",
    },
    {
      id: 3,
      img: image5,
      title: "GoPro cameras",
      btn: "-25%",
    },
    {
      id: 4,
      img: image6,
      title: "Head Phones",
      btn: "-25%",
    },
    {
      id: 5,
      img: image7,
      title: "Canon cameras",
      btn: "-25%",
    },
  ];
  const extracontent = [
    {
      id: 1,
      img: image8,
      title: "Source from  industry Hubs",
      icon: <FaMagnifyingGlass />,
    },
    {
      id: 2,
      img: image9,
      title: "   Customize Your Products",
      icon: <FaBoxArchive />,
    },
    {
      id: 3,
      img: image10,
      title: "   Fast, reliable Shipping  by ocean and air",
      icon: <PiArrowFatLineRightBold />,
    },

    {
      id: 5,
      img: image11,
      title: "  Product monitoring and inspection",
      icon: <FaShieldAlt />,
    },
  ];

  const suppliers = [
    {
      id: 1,
      img: image12,
      title: "Arabic Emirates",
      detail: "shopname.ae",
    },
    {
      id: 2,
      img: image13,
      title: "Australia",
      detail: "shopname.ae",
    },
    {
      id: 3,
      img: image14,
      title: "United States",
      detail: "shopname.ae",
    },
    {
      id: 4,
      img: image15,
      title: "Russia",
      detail: "shopname.ru",
    },
    {
      id: 5,
      img: image16,
      title: "Italy",
      detail: "shopname.it",
    },
    {
      id: 6,
      img: image17,
      title: "Denmark",
      detail: "Denmark.com.dk",
    },
    {
      id: 7,
      img: image18,
      title: "France",
      detail: "shopname.com.fr",
    },
    {
      id: 8,
      img: image19,
      title: "Arabic Emirates",
      detail: "shopname.ae",
    },
    {
      id: 9,
      img: image20,
      title: "china",
      detail: "shopname.ae",
    },
    {
      id: 10,
      img: image21,
      title: "Great Britain",
    },
  ];
  const outdoorTab = [
    {
      id: 1,
      img: homeimg7,
      title: "Brown classy stand",
      from: "From USD 19",
    },
    {
      id: 2,
      img: homeimg1,
      title: "New style sofa",
      from: "From USD 19",
    },
    {
      id: 3,
      img: homeimg2,
      title: "lamp",
      from: "From USD 19",
    },
    {
      id: 4,
      img: homeimg4,
      title: "Bueatifull mud pot",
      from: "From USD 19",
    },
    {
      id: 5,
      img: homeimg8,
      title: "Bueatifull Plant",
      from: "From USD 19",
    },
  ];
  const electronicTab = [
    {
      id: 1,
      img: mob1,
      title: "Mobile",
      from: "From USD 19",
    },
    {
      id: 2,
      img: mob2,
      title: "Apple table",
      from: "From USD 19",
    },
    {
      id: 3,
      img: mob3,
      title: "Mobile",
      from: "From USD 19",
    },
    {
      id: 4,
      img: mob4,
      title: "Bueatifull mud pot",
      from: "From USD 19",
    },
    {
      id: 5,
      img: mob5,
      title: "Bueatifull Plant",
      from: "From USD 19",
    },
  ];

  const small = [
    {
      id: 1,
      img: image31,
      title: " Soft chair",
      price: "from USD 19",
    },
    {
      id: 2,
      img: image32,
      title: " Sofa & chair",
      price: "from USD 19",
    },

    {
      id: 3,
      img: image33,
      title: " Kitchen dishes",
      price: "from USD 19",
    },
    {
      id: 4,
      img: image34,
      title: " Smart watches",
      price: "from USD 19",
    },
    {
      id: 5,
      img: image35,
      title: " Kithcen mixer",
      price: "from USD 100",
    },
    {
      id: 6,
      img: image36,
      title: " Blenders",
      price: "from USD 39",
    },
    {
      id: 7,
      img: image37,
      title: " Home appliances",
      price: "from USD 19",
    },
    {
      id: 8,
      img: image38,
      title: " Coffee maker",
      price: "from USD 19",
    },
  ];

  const consumercontent = [
    {
      id: 1,
      img: image39,
      title: " Smart watches",
      price: "from USD 19",
    },
    {
      id: 2,
      img: image40,
      title: "Cameras",
      price: "from USD 89",
    },

    {
      id: 3,
      img: image41,
      title: " Headphones",
      price: "from USD 10",
    },
    {
      id: 4,
      img: image42,
      title: " Smart watches",
      price: "from USD 90",
    },
    {
      id: 5,
      img: image43,
      title: " Gaming set",
      price: "from USD 35",
    },
    {
      id: 6,
      img: image44,
      title: " Laptop and pc",
      price: "from USD 39",
    },
    {
      id: 7,
      img: image45,
      title: " Smart phones",
      price: "from USD 340",
    },
    {
      id: 8,
      img: image46,
      title: " Electric cattle",
      price: "from USD 19",
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
      img: image3,
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
  return (
    <>
      {/* web details */}
      <div className=" lg:block ">
        <main className="bg-[#F7FAFC] hidden lg:block">
          <section>
            <div className="bg-[#FFFFFF] flex justify-around  m-auto  w-[1180px]  p-2  tracking-wide">
              <div className="  ">
                <ul className="decoration-[#505050] w-[280px]  leading-10">
                  <li className="bg-[#C7E1FF] cursor-pointer rounded-sm pl-2">
                    Auto mobiles
                  </li>
                  <li className="rounded-sm pl-2 cursor-pointer">
                    Clothes and Wear
                  </li>
                  <li className="rounded-sm cursor-pointer pl-2">
                    Home interiors
                  </li>
                  <li className="rounded-sm cursor-pointer pl-2">
                    Computer and Tech
                  </li>
                  <li className="rounded-sm cursor-pointer pl-2">
                    Tools, equipments
                  </li>
                  <li className="rounded-sm cursor-pointer pl-2">
                    sports and outdoor
                  </li>
                  <li className="rounded-sm cursor-pointer pl-2">
                    animal and pets
                  </li>
                  <li className="rounded-sm cursor-pointer pl-2">
                    Machinery tools
                  </li>
                  <li className="rounded-sm cursor-pointer pl-2">
                    More category
                  </li>
                </ul>
              </div>
              <div className='bg-[url("./assets/main11.png")] bg-cover bg-center w-[665px] p-10'>
                {/* <Image src={image1} alt="img" /> */}
                <div className="">
                  <h3 className="text-[28px]">Latest trending</h3>
                  <h3 className="text-[32px] font-bold pb-5">
                    Electronic items
                  </h3>
                  <button className="bg-white text-[#0D6EFD] text-[16px] font-medium shadow rounded-r-lg  rounded-l-lg px-2 py-1 mb-12">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="w-[200px]">
                <div className=" bg-[#C7E1FF]  rounded ">
                  <div className="flex   p-2">
                    <div className="">{/* <Image src={image2} /> */}</div>
                    <div>
                      <p className="font-semibold">
                        Hi user <br /> lets get started
                      </p>
                    </div>
                  </div>

                  <div className="p-3">
                    <button className="py-1 bg-blue-700 cursor-pointer text-white rounded-sm block w-full">
                      Join now
                    </button>

                    <button className="py-1 cursor-pointer text-blue-700 bg-white rounded-sm  mt-3  w-full">
                      Login
                    </button>
                  </div>
                </div>
                <div className="bg-[#F38332] p-3 text-white mt-2 text-[16px] rounded">
                  <p>
                    Get US $10 off <br /> with a new <br /> supplier
                  </p>
                </div>
                <div className="bg-[#55BDC3]  rounded mt-2 text-white text-[16px] p-3">
                  <p>
                    Send quotes with <br /> supplier <br /> preferences
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="dealssection  ">
              <div className="dealsinner w-[1180px] flex justify-between  m-auto  mt-5 border-[#dfdddd] border-1  rounded-r-lg  rounded-l-lg ">
                <div className=" w-[285px] p-3 ">
                  <b>Deals and offers</b>
                  <p>Hygeine equipments</p>

                  <div className="flex  text-white  text-center mt-5 ">
                    <div className="box1 w-[47px] bg-gray-800  p-1 rounded-r-lg  rounded-l-lg">
                      <p className="font-bold">04</p>
                      <p className="text-[13px]">Days</p>
                    </div>
                    <div className="box1 w-[47px] bg-gray-800  p-1 ms-1 rounded-r-lg  rounded-l-lg">
                      <p className="font-bold">13</p>
                      <p className="text-[13px]">Hour</p>
                    </div>
                    <div className="box1 w-[47px] bg-gray-800  p-1 ms-1 rounded-r-lg  rounded-l-lg">
                      <p className="font-bold">34</p>
                      <p className="text-[13px]">Min</p>
                    </div>
                    <div className="box1 w-[47px]  bg-gray-800  p-1  ms-1 rounded-r-lg  rounded-l-lg">
                      <p className="font-bold">56</p>
                      <p className="text-[13px]">sec</p>
                    </div>
                  </div>
                </div>
                {tabcontant.map((item, index) => (
                  <div
                    className="text-center cursor-pointer p-4 bg-white border-[#dfdddd]  border-s-1"
                    key={item.id}
                  >
                    <div>
                      <Image src={item.img} alt="img" />
                    </div>
                    <p className="mb-3">{item.title}</p>
                    <p className="text-[#EB001B]  inline rounded-xl p-1  bg-[#FFE3E3]">
                      {item.btn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className="home mt-6 mb-3">
              <div className="homeinner  w-[1180px]  m-auto">
                <div className="cardmainm flex justify-between border-[#dfdddd] border-1 border-t-0  rounded-r-lg  rounded-l-lg">
                  <div className='img    w-[280px]    bg-[url("./assets/image92.png")] p-4 h-[285px]'>
                    <p className="text-[20px] font-semibold">
                      Home and <br />
                      Outdoor
                    </p>
                    <div>
                      <button className="bg-white p-2 rounded-sm cursor-pointer mt-5 text-black">
                        Shopnow
                      </button>
                    </div>
                  </div>

                  <div className="smallmain  grid w-[900px] grid-cols-4 ">
                    {small.map((item, index) => (
                      <div
                        className="small flex justify cursor-pointer  between w-[225px] height-[127px]  p-4 border-t-1 border-s-1 border-[#dfdddd] "
                        key={item.id}
                      >
                        <div className="smallcontent">
                          <p>{item.title}</p>
                          <p className="text-[#9CA5B2]  mt-3 w-[64px] ">
                            {item.price}
                          </p>
                        </div>

                        <div className="smallimg w-[67px]  h-[69px] pt-[35px] ml-[30px]">
                          <Image src={item.img} alt="image" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="consumer mt-6 mb-3">
              <div className="consumerinner  w-[1180px] m-auto">
                <div className="cardmainm flex justify-between border-t-0 border-1 border-[#dfdddd] rounded-r-lg  rounded-l-lg ">
                  <div className='img   w-[280px]  bg-[url("./assets/image98.png")] p-4 h-[285px]'>
                    <p className="text-[20px] font-semibold text-black">
                      Consumer <br /> electronices and <br /> gadgets
                    </p>
                    <div>
                      <button className="bg-white p-2 cursor-pointer rounded-sm  mt-5 text-black">
                        Shopnow
                      </button>
                    </div>
                  </div>

                  <div className="smallmain grid w-[900px] grid-cols-4 ">
                    {consumercontent.map((item, index) => (
                      <div
                        className="small flex justify cursor-pointer  between w-[225px] height-[127px]  p-4 border-t-1 border-s-1 border-[#dfdddd] "
                        key={item.id}
                      >
                        <div className="smallcontent">
                          <p>{item.title}</p>
                          <p className="text-[#9CA5B2] mt-3 w-[65px] ">
                            {item.price}
                          </p>
                        </div>

                        <div className="smallimg w-[67px]  h-[69px] pt-[35px] ml-[30px]">
                          <Image src={item.img}  alt="Product Image"/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="inquirysection w-[1180px]  m-auto">
              <div className='inquirysectioninner bgimgdiv bg-[linear-gradient(to_left,rgba(135,206,250,0.1),rgba(0,123,255,0.9)),url("./assets/image108.png")] bg-cover bg-center border-[#dfdddd] border-1 rounded-r-lg rounded-l-lg p-6 flex justify-between'>
                <div className="left w-[50%]">
                  <p className="text-white text-[25px] p-2 ">
                    An easy way to send <br /> request to all to all suppliers
                  </p>
                  <p className="text-white p-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing <br />{" "}
                    elit. Vel, voluptas! Ullam, necessitatibus ad.
                  </p>
                </div>

                <div className="right w-[35%] p-6 border-[#dfdddd] border-1 rounded bg-white">
                  <div className="bg-white">
                    <b>Send quote to suppliers</b>
                    <div className=" border-1 border-[#dfdddd] rounded-r-lg rounded-l-lg  p-1">
                      What item you need?
                    </div>

                    <div>
                      {" "}
                      <textarea
                        name=""
                        placeholder="Type more details"
                        id=""
                        className="  p-1 border-1 mt-4 mb-2 border-[#dfdddd] rounded
                          w-[100%]"
                      ></textarea>
                    </div>

                    <div className="flex justify-between w-[70%]">
                      <div className="border-1 mt-2 mb-2 border-[#dfdddd] p-1 w-[50%] rounded">
                        {" "}
                        Quantity
                      </div>
                      <div className="border-1 mt-2 mb-2 border-[#dfdddd] p-1 w-[30%] rounded flex justify-between  items-center">
                        <div> Pcs </div>{" "}
                        <div className="text-[#8B96A5] ">
                          <BiDownArrowAlt />{" "}
                        </div>
                      </div>
                    </div>

                    <button className="mt-2 bg-[#0E79FF] rounded-sm py-2 px-4 text-white cursor-pointer">
                      Send inquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="recommented w-[1180px]  pb-5 pt-5 m-auto">
              <div className="recommentedinner1">
                <p className="text-[24px] font-semibold pt-3 pb-3">
                  Recommented items
                </p>

                <div className="grid grid-cols-5 gap-4">
                  {recommentedcontent.map((item, index) => (
                    <div
                      className="bg-white cursor-pointer  p-3 border-[#dfdddd] border-1 rounded-r-lg rounded-l-lg"
                      key={item.id}
                    >
                      <div>
                        <Image src={item.img} alt="img" />
                      </div>
                      <div>
                        <p className="font-bold">{item.btn}</p>
                        <p className="pt-4">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="extra w-[1180px] pt-5  pb-5 m-auto ">
              <div className="extrainner ">
                <p className="text-[24px] font-semibold pt-4 pb-4">
                  Our extra services
                </p>
                <div className="grid grid-cols-4 gap-4 rounded-r-lg rounded-l-lg ">
                  {extracontent.map((item, index) => (
                    <div
                      className=" border-1 relative cursor-pointer  border-[#E0E0E0] rounded-r-lg rounded-l-lg overflow-hidden"
                      key={item.id}
                    >
                      <div>
                        <Image src={item.img} alt="img" />
                      </div>
                      <div className="bg-white ">
                        <p className="p-4 w-50 ">{item.title}</p>
                      </div>
                      <div className="absolute bottom-16 right-6 bg-[#D1E7FF] p-2 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="supplierssection w-[1180px] m-auto pb-3">
              <div className="suppliersinner">
                <p className="text-[24px] font-semibold py-4">
                  Suppliers by region
                </p>
                <div className=" grid grid-cols-5 gap-4">
                  {suppliers.map((item, index) => (
                    <div className="flex cursor-pointer  " key={item.id}>
                      <div className="">
                        <Image src={item.img} alt="img" />
                      </div>
                      <div className="p-3">
                        <p>{item.title}</p>
                        <p className="text-[#dfdddd] ">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* mobile details */}
      <main className="  lg:hidden   bg-[#F7FAFC]">
        <section>
          <header className=" p-2">
            <div className="logomain flex  justify-between items-center">
              <div className="logo flex items-center">
                <div className="img">
                  <FiAlignJustify size={18} />
                </div>{" "}
                &nbsp;
                <div className="content font-bold text-[#8CB7F5]">Brand</div>
              </div>
              <div className="logomain flex items-center">
                <p>
                  <BsCart2 size={18} />
                </p>{" "}
                &nbsp; &nbsp;{" "}
                <p>
                  <IoMdContact size={18} />
                </p>
              </div>
            </div>

            <div className='mt-2'> 
              <input
                type="text"
                className="bg-[#F7FAFC] p-2 rounded-sm w-[100%]"
                placeholder="  Search"
              />
            </div>
          </header>

          <Slider {...settings1}>
            <div className=" w-[120px]">
              <p className="cursor-pointer  ml-2 p-1 w-[120px] rounded-lg text-[#8CB7F5] bg-[#EFF2F4]">
                All Categories
              </p>
            </div>
            <div className="w-[120px]">
              <p className="cursor-pointer  ml-2  p-1 w-[120px] rounded-lg text-[#8CB7F5] bg-[#EFF2F4]">
                Hot offers
              </p>
            </div>
            <div className="w-[120px]">
              <p className="cursor-pointer ml-2 p-1 w-[120px] rounded-lg text-[#8CB7F5] bg-[#EFF2F4]">
                Gift Boxes
              </p>
            </div>
            <div className="w-[120px]">
              <p className="cursor-pointer ml-2 p-1 w-[120px] rounded-lg text-[#8CB7F5] bg-[#EFF2F4]">
                Projects
              </p>
            </div>
            <div className="w-[120px]">
              <p className="cursor-pointer ml-2 p-1 w-[120px] rounded-lg text-[#8CB7F5] bg-[#EFF2F4]">
                Menu Items
              </p>
            </div>
              <div className="w-[120px]">
              <p className="cursor-pointer ml-2 p-1 w-[120px] rounded-lg text-[#8CB7F5] bg-[#EFF2F4]">
                contact us
              </p>
            </div>
              <div className="w-[120px]">
              <p className="cursor-pointer ml-2 p-1 w-[120px] rounded-lg text-[#8CB7F5] bg-[#EFF2F4]">
                 About us
              </p>
            </div>
              <div className="w-[120px]">
              <p className="cursor-pointer ml-2 p-1 w-[150px] rounded-lg text-[#8CB7F5] bg-[#EFF2F4]">
                Customer service
              </p>
            </div>
          </Slider>
        </section>

        <section>
                <div className='bg-[url("./assets/main11.png")] mt-2 bg-cover bg-center p-10'>
                {/* <Image src={image1} alt="img" /> */}
                <div className="">
                  <h3 className="text-[28px]">Latest trending</h3>
                  <h3 className="text-[32px] font-bold pb-5">
                    Electronic items
                  </h3>
                  <button className="bg-white text-[#0D6EFD] text-[16px] font-medium shadow rounded-r-lg  rounded-l-lg px-2 py-1 mb-12">
                    Learn more
                  </button>
                </div>
              </div>
          
        </section>
   <main>
     <section>

             <div className=" flex mt-2 justify-between items-center p-2 ">
                 <div>
                   <b>Deals and offers</b>
                  <p>Hygeine equipments</p>
                 </div>

                  <div className="flex  text-white mb-3  text-center mt-5 ">
                 
                    <div className="box1 w-[47px] bg-[#EFF2F4]  p-1 ms-1 rounded-r-lg  rounded-l-lg">
                      <p className="font-bold text-[#A4ADB9]">13</p>
                      <p className="text-[13px] text-[#A4ADB9]">Hour</p>
                    </div>
                    <div className="box1 w-[47px] bg-[#EFF2F4]  p-1 ms-1 rounded-r-lg  rounded-l-lg">
                      <p className="font-bold text-[#A4ADB9]">34</p>
                      <p className="text-[13px] text-[#A4ADB9]">Min</p>
                    </div>
                    <div className="box1 w-[47px]  bg-[#EFF2F4]  p-1  ms-1 rounded-r-lg  rounded-l-lg">
                      <p className="font-bold text-[#A4ADB9]">56</p>
                      <p className="text-[13px] text-[#A4ADB9]">sec</p>
                    </div>
                  </div>
                </div>
          
        </section>
   </main>
      </main>
    </>
  );
}
