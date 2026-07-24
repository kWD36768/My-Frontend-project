"use client";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "./commoncomponents/Header";
// import Footer from "./commoncomponents/Footer";
// import {  usePathname } from "next/navigation";

// // const noHeader = ['/cart'] 
// const noHeader = [];

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


// export default function RootLayout({ children }) {
//   const route = usePathname();
//  const ifShow = !noHeader.includes(route)

//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//       {ifShow && <Header />}
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }

"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./commoncomponents/Header";
import Footer from "./commoncomponents/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}