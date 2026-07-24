"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

import image1 from "./../assets/1.png";
import image2 from "./../../../public/profile.png";
import image3 from "./../../../public/message.png";
import image4 from "./../../../public/order.png";
import image5 from "./../../../public/cart.png";
import { FiAlignJustify } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

 const Header = () => {
  const pathname = usePathname();

  const activeClass = (path) =>
    pathname === path
      ? "text-[#127FFF] font-semibold"
      : "text-[#555555] hover:text-[#127FFF] transition-all duration-200";

  return (
    <>
      <div className="hidden lg:block">
        <div className="main2 border-b border-[#EFEFEF]">
          <div className="header">
            <div className="headerinner w-[1180px] flex justify-between items-center mx-auto">

              {/* Logo */}

              <Link href="/" className="logomain flex items-center">
                <div className="img">
                  <Image src={image1} alt="logo" />
                </div>
                &nbsp;
                <div className="content font-bold text-[#8CB7F5] text-xl">
                  Brand
                </div>
              </Link>

              {/* Search */}

              <div className="inputmain w-[50%] h-[35px] border-2 border-[#127FFF] flex rounded-sm">

                <input
                  type="text"
                  placeholder="Search"
                  className="w-[65%] p-2 outline-none"
                />

                <button className="flex items-center border-l p-2 w-[150px] border-[#127FFF]">
                  <p>All Category</p>

                  <RiArrowDropDownLine
                    size={24}
                    className="text-[#8B96A5]"
                  />
                </button>

                <button className="bg-[#127FFF] text-white px-4">
                  Search
                </button>

              </div>

              {/* Right Icons */}

              <div className="iconsmain w-[27%] text-[#8B96A5]">

                <div className="flex items-center justify-between">

                  <div className="text-center p-2 cursor-pointer">
                    <Image
                      src={image2}
                      alt="profile"
                      className="mx-auto"
                    />
                    <p className="pt-1">Profile</p>
                  </div>

                  <div className="text-center p-2 cursor-pointer">
                    <Image
                      src={image3}
                      alt="message"
                      className="mx-auto"
                    />
                    <p className="pt-1">Messaging</p>
                  </div>

                  <div className="text-center p-2 cursor-pointer">
                    <Image
                      src={image4}
                      alt="orders"
                      className="mx-auto"
                    />
                    <p className="pt-1">Orders</p>
                  </div>

                  <Link
                    href="/cart"
                    className={`text-center p-2 ${activeClass("/cart")}`}
                  >
                    <Image
                      src={image5}
                      alt="cart"
                      className="mx-auto"
                    />
                    <p className="pt-1">My Cart</p>
                  </Link>

                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="header2 w-[1180px] mx-auto">

          <div className="header2iner flex justify-between items-center">

            <div className="left text-[#555555]">              <ul className="flex items-center">

                <li className="flex items-center p-3">
                  <FiAlignJustify size={22} />
                  &nbsp;
                  <Link href="/" className={activeClass("/")}>
                    Home
                  </Link>
                </li>

                <li className="p-3">
                  <Link
                    href="/secondpage"
                    className={activeClass("/secondpage")}
                  >
                    Products
                  </Link>
                </li>

                <li className="p-3">
                  <Link
                    href="/shirts"
                    className={activeClass("/shirts")}
                  >
                    Product Details
                  </Link>
                </li>

             

                <li className="p-3">
                  <Link
                    href="/cart"
                    className={activeClass("/cart")}
                  >
                    Cart
                  </Link>
                </li>


              </ul>

            </div>

            <div className="right flex items-center">

              <div className="flex items-center mr-6">
                <p className="text-[#383838]">
                  English, USD
                </p>

                <RiArrowDropDownLine
                  size={24}
                  className="text-[#A1AADB]"
                />
              </div>

              <div className="flex items-center">
                <p className="text-[#383838]">
                  Ship to
                </p>

                <RiArrowDropDownLine
                  size={24}
                  className="text-[#A1AADB]"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
};

export default Header;