import React from 'react'
import Wave from '../assets/wave.svg'
import { FaWhatsapp } from "react-icons/fa";
import Panah from '../assets/panah.png'
import ilus from '../assets/ilus.png'


const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#edf5ff] to-white relative overflow-hidden w-full h-auto mt-[90px] z-40 " id='home'>
      <img src={Wave} className="absolute right-[-55%] transform -rotate-[120deg] top-24 -z-20 opacity-[19%]" alt="" loading="lazy"
      />
      <img src={Wave} className="absolute right-[-65%] transform -rotate-[40deg] bottom-48 -z-20 opacity-[19%]" alt="" />


      <main>
        <section data-aos="fade-down" data-aos-duration="1000" className="font-[Roboto] lg:w-[871px] p-2 text-center mx-auto mt-4">
          <p className="text-[12px] text-[#827C7C] font-medium">HOME-JASA PEMBUATAN APLIKASI DEKSTOP</p>
          <h1 className="text-[24px] lg:text-[36px] font-semibold">
            Solusi Digital yang Terinspirasi oleh Kebutuhan Anda
          </h1>
          <p className="text-[14px] text-[#827C7C]">
            Inspirasi Software hadir untuk membantu Anda meswujudkan ide teknologi menjadi solusi digital terbaik yang inovatif, efisien, dan sesuai dengan kebutuhan Anda. Kami berkomitmen untuk memberikan layanan unggulan melalui pengembangan aplikasi yang dirancang khusus untuk mendukung pertumbuhan bisnis dan menghadirkan pengalaman digital yang luar biasa.
          </p>
          <div className="w-[50%] relative mx-auto">
            <a href="https://wa.me/6281284381118" className="w-[174px] h-[45px] hover:bg-[#A2AC19] bg-[#b6c02b] all duration-150 rounded-md shadow-lg mt-10 flex items-center justify-center gap-2 mx-auto" target="_blank" rel="noopener noreferrer">
              <span className="text-white font-medium text-[14px]">Chat Whatsapp</span>
              <FaWhatsapp className="text-white h-[18px] w-[18px]" />
            </a>
            <img src={Panah} className="w-24 absolute -top-8 -left-20 lg:left-8 transform rotate-[-20deg]" alt="Arrow decoration left" />
            <img src={Panah} className="w-24 absolute -top-4 -right-20 lg:right-8 transform rotate-[120deg]" alt="Arrow decoration right" />
          </div>
        </section>

        <section data-aos="fade-up" data-aos-duration="1000" className="relative w-[80%] mt-10  lg:flex justify-center mx-auto">
          <img src={ilus} className="lg:w-[850px]" alt="Illustration 1" />
        </section>
      </main>
    </div>

  )
}

export default Home
