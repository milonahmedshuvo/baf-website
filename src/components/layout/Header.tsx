import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import DrawerComponent from "../ui/Drawer";
import logo from '@/assets/images/logo_title.png'
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 max-w-7xl mx-auto px-3 ">


      <div className="flex items-center justify-between py-4 px-2">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} width={200} height={500} alt="logo-title" />
        </Link>



      
        {/* Right side container */}
        <div className="flex items-center"> 

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center text-black  ">
          {[
            { name: "Home", href: "/" },
            { name: "Athletes", href: "/team" },
            { name: "Events", href: "/event" },
            { name: "News", href: "/blog" },
            { name: "Gallery", href: "/gallery" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-3 transition-all duration-300 ease-in-out text-[#444444] hover:text-[#e41b23] font-semibold w-full m-0 text-sm uppercase"
            >
              {item.name}
            </Link>
          ))}



          {/* Dropdown */}
          <div className="relative group">
            <button className="uration-300 ease-in-out text-[#444444] hover:text-[#e41b23] font-semibold w-full m-0 text-sm uppercase cursor-pointer">
              Register
            </button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 min-w-[180px] border border-red-500 ">
              <li>
                <Link
                  href="/shop"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Athletes
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Coach
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Become a Sponsor
                </Link>
              </li>
            </ul>
          </div>    
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4 pl-7 ">  
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
            LOGIN
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" p-2 rounded bg-black text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

       </div>
         

      </div>



      {/* Mobile Menu */}
      {
        isMenuOpen && (
          <DrawerComponent open={isMenuOpen} setOpen={setIsMenuOpen} ></DrawerComponent>
        )
      }

      {/* {isMenuOpen && (
        <div className=" bg-white shadow-lg border-t w-1/2  ">

          <nav className="flex flex-col p-4 space-y-2 text-black font-medium">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <Link href="/team" className="hover:text-red-600">
              Athletes
            </Link>
            <Link href="/event" className="hover:text-red-600">
              Events
            </Link>
            <Link href="/blog" className="hover:text-red-600">
              News
            </Link>
            <Link href="/gallery" className="hover:text-red-600">
              Gallery
            </Link>
            <Link href="/about" className="hover:text-red-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-red-600">
              Contact
            </Link>
            <details>

              <summary className="cursor-pointer hover:text-red-600">
                Register
              </summary>

              <ul className="pl-4 space-y-1 mt-1">
                <li>
                  <Link href="/shop" className="block hover:text-red-600">
                    Athletes
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="block hover:text-red-600">
                    Coach
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="block hover:text-red-600">
                    Become a Sponsor
                  </Link>
                </li>
              </ul>

            </details>
          </nav>

          <div className="flex justify-center space-x-4 py-4 border-t">
            <a href="#" className="text-gray-600 hover:text-red-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

        </div>
      )} */}


    </header>
  );
}
