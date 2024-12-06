import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import foto1 from '../assets/multi.png'
import foto2 from '../assets/kustom.png'
import foto3 from '../assets/terintegrasi.png'


const Layanan = () => {
    return (
        <div className='max-w-[1250px] flex flex-col md:flex-row px-4  justify-between mx-auto h-auto mt-[100px]' id='layanan'>
            <div data-aos="fade-right" data-aos-duration="1000" className='w-[308px]'>
                <h1 className='font-semibold font-open-sans leading-9 text-[32px] opacity-[63%]'>Kenapa Memilih Kami?</h1>
                <p className='text-[12px] opacity-[70%] font-semibold'>Kami fokus sepenuhnya pada pengembangan aplikasi desktop yang andal, cepat, dan sesuai kebutuhan bisnis Anda. Dengan keahlian khusus, kami memastikan hasil terbaik untuk proyek Anda.</p>
                <div className='flex gap-1 items-center mt-4'>
                    <IoMdCheckmarkCircleOutline className='text-[#2b73c0]' size={20} />
                    <span className='text-[12px] font-medium'>Spesialisasi di Aplikasi Desktop</span>
                </div>
                <div className='flex gap-1 items-center mt-2'>
                    <IoMdCheckmarkCircleOutline className='text-[#2b73c0]' size={20} />
                    <span className='text-[12px] font-medium'>Tim Profesional Berpengalaman</span>
                </div>
                <div className='flex gap-1 items-center mt-2'>
                    <IoMdCheckmarkCircleOutline className='text-[#2b73c0]' size={20} />
                    <span className='text-[12px] font-medium'>Dukungan 24/7</span>
                </div>
                <div className='flex gap-1 items-center mt-2'>
                    <IoMdCheckmarkCircleOutline className='text-[#2b73c0]' size={20} />
                    <span className='text-[12px] font-medium'>Kualitas dan Keamanan Terjamin</span>
                </div>
                <div className='flex gap-1 items-center mt-2'>
                    <IoMdCheckmarkCircleOutline className='text-[#2b73c0]' size={20} />
                    <span className='text-[12px] font-medium'>Kustomisasi Sesuai Kebutuhan</span>
                </div>
            </div>

            <div className='  flex flex-wrap mt-10 gap-4 justify-center'>
                <div data-aos="zoom-in" data-aos-duration="400" className='w-[339px] overflow-hidden cardd h-[253px] flex flex-col relative group justify-center px-10 bg-white card rounded-lg p-2'>
                <div className='card-layanan z-10'></div>
                <div className='absolute top-0 right-0 bg-[#b3bd2a] w-[70px] z-20 h-[70px] rounded-full -translate-y-3 translate-x-3 flex justify-center items-center'>
                    <p className='font-[lexend] text-white'>01</p>
                </div>
                    <img src={foto1} className='w-[50px] z-20' alt="" />
                    <p className='text-[15px] font-medium mt-2 z-20'>Multi-Platform Development</p>
                    <span className='text-[12px] z-20
                     w-[90%]'>Solusi lintas platform untuk berbagai sistem operasi.
                        Mendukung Windows, macOS, atau Linux sesuai kebutuhan.
                        Pengembangan aplikasi yang kompatibel dan optimal di setiap platform.</span>
                </div>
                <div data-aos="zoom-in" data-aos-duration="700" className='w-[339px] overflow-hidden cardd h-[253px] flex flex-col relative group justify-center px-10 bg-white card rounded-lg p-2'>
                <div className='card-layanan z-10'></div>
                <div className='absolute top-0 right-0 bg-[#b3bd2a] w-[70px] z-20 h-[70px] rounded-full -translate-y-3 translate-x-3 flex justify-center items-center'>
                    <p className='font-[lexend] text-white'>02</p>
                </div>
                    <img src={foto2} className='w-[50px] z-20' alt="" />
                    <p className='text-[15px] font-medium mt-2 z-20'>Aplikasi Desktop Kustom</p>
                    <span className='text-[12px] w-[90%] z-20'>Kami menciptakan aplikasi desktop yang dirancang khusus untuk Anda.
                        Disesuaikan dengan kebutuhan spesifik bisnis.
                        Antarmuka yang ramah pengguna dan modern.
                        Fitur-fitur unik yang mendukung efisiensi kerja.</span>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='w-[339px] overflow-hidden cardd h-[253px] flex flex-col relative group justify-center px-10 bg-white card rounded-lg p-2'>
                    <div className='card-layanan z-10'></div>
                    <div className='absolute top-0 right-0 bg-[#b3bd2a] w-[70px] z-20 h-[70px] rounded-full -translate-y-3 translate-x-3 flex justify-center items-center'>
                    <p className='font-[lexend] text-white'>03</p>
                </div>
                    <img src={foto3} className='w-[50px] z-20' alt="" />
                    <p className='text-[15px] font-medium mt-2 z-20'>Sistem Terintegrasi</p>
                    <span className='text-[12px] w-[90%] z-20'>Kami membantu menghubungkan aplikasi baru Anda dengan sistem yang sudah ada.
                        Integrasi dengan perangkat lunak lain seperti ERP, CRM, dll..
                        Pengelolaan data yang lebih efisien dan sinkron.</span>
                </div>

            </div>

        </div>
    )
}

export default Layanan
