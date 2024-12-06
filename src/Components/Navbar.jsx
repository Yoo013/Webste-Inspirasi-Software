import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState("home");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const ubahBg = () => {
      if (window.scrollY >= 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", ubahBg);
    return () => {
      window.removeEventListener("scroll", ubahBg);
    };
  }, []);

  return (
    <div>
      <div
        className={
          scroll
            ? 'font-[Poppins] fixed top-0 mx-auto w-full h-24 flex items-center px-4 lg:px-16 py-10 justify-between bg-white shadow-lg z-50 transition-all duration-500 ease-in-out'
            : 'font-[Poppins] fixed top-0 w-full mx-auto px-4 h-24 flex items-center lg:px-16 py-10 justify-between bg-[#edf5ff] z-50'
        }
      >
        <div className="flex items-center gap-2">
          <img src={Logo} className="lg:w-[60px] border-r-2 px-1 w-[50px]" alt="Logo" />
          <h1 className="text-md lg:text-[24px] font-semibold lg:w-[190px] w-[150px] lg:leading-6 leading-5">
            INSPIRASI SOFTWARE
          </h1>
        </div>

        <div className='navbar flex '>
          <ul className='hidden lg:flex gap-[24px] font-medium lg:items-center  cursor-pointer'>
            <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : " text-[#1111118b] hover:text-black all duration-300 ea"}><a href='#home'>Home</a></li>
            <li onClick={() => setMenu("layanan")} className={menu === "layanan" ? "active" : " text-[#1111118b] hover:text-black all duration-300 ea"}><a href='#layanan'>Layanan</a></li>
            <li onClick={() => setMenu("portofolio")} className={menu === "portofolio" ? "active" : " text-[#1111118b] hover:text-black all duration-300 ea"}><a href='#portofolio'>Portofolio</a></li>
            <li onClick={() => setMenu("carapesan")} className={menu === "carapesan" ? "active" : " text-[#1111118b] hover:text-black all duration-300 ea"}><a href='#timeline'>Cara Pesan</a></li>
            <li onClick={() => setMenu("faq")} className={menu === "faq" ? "active" : " text-[#1111118b] hover:text-black all duration-300 ea"}><a href='#faq'>FAQs</a></li>
            <button className='w-32 h-12 hidden lg:flex gap-1 items-center justify-center text-sm bg-[#b6c02b] text-white rounded-lg'>
              <FaWhatsapp className="text-white h-[18px] w-[18px]" />
              <a href='https://wa.me/6281284381118'>Konsultasi</a>
            </button>
          </ul>


        </div>

        <div
          onClick={handleNav}
          className="mr-4  flex items-center justify-center lg:hidden  cursor-pointer"
        >
          {nav ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
        </div>

        <div
          className={`fixed top-24 left-0 w-[100%] ${nav ? 'h-56' : 'h-0'
            } bg-white shadow-lg text-black z-40 transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div
            className={`${nav
              ? 'opacity-100 translate-y-0 '
              : 'opacity-0 -translate-y-10 '
              } transition-all duration-500 ease-in-out`}
          >
            <ul className="flex flex-col  ul">
              <li className='font-medium font-[Poppins]'><a href='#home'>Home</a></li>
              <li className='font-medium font-[Poppins]'><a href='#layanan'>Layanan</a></li>
              <li className='font-medium font-[Poppins]'><a href='#layanan'>Portofolio</a></li>
              <li className='font-medium font-[Poppins]'><a href='#timeline'>Cara Pesan</a></li>
              <li className='font-medium font-[Poppins]'><a href='#faq'>FAQs</a></li>
            </ul>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
