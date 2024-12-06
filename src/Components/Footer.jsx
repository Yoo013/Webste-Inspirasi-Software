import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

const Footer = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="600" className='w-full h-auto text-white lg:px-28 px-4 py-12 mx-auto  footer '>
        <div className='w-full border-b border-[#6f7683] grid-rows-1 lg:grid-cols-3 grid gap-10 pb-4'>
        <div>
            <h1 className='font-semibold font-[Poppins] text-xl'>Jasa Pembuatan Aplikasi Dekstop</h1>
            <p className='mt-1 text-sm font-medium text-[#6f7683]'>Solusi digital terbaik untuk pembuatan Aplikasi Dekstop Anda. Kami hadir untuk membawa usaha Anda ke dunia digital dengan kualitas dan pelayanan.</p>
        </div>

        <div>
            <h1 className='font-medium font-[Poppins]'>Navigasi</h1>
            <ul className='flex flex-col gap-1 mt-1'>
                <li className='text-sm  font-medium text-[#6f7683] font-[Poppins]'><a href='#home'>Home</a></li>
                <li className='text-sm  font-medium text-[#6f7683] font-[Poppins]'><a href='#layanan'>Layaan</a></li>
                <li className='text-sm  font-medium text-[#6f7683] font-[Poppins]'><a href='#layanan'>Portofolio</a></li>
                <li className='text-sm  font-medium text-[#6f7683] font-[Poppins]'><a href='#timeline'>Cara Pesan</a></li>
                <li className='text-sm  font-medium text-[#6f7683] font-[Poppins]'><a href='#faq'>FAQs</a></li>
            </ul>
        </div>

        <div className=''>
            <h1 className='font-medium font-[Poppins]'>Informasi</h1>
            <p className='mt-1 text-sm font-medium text-[#6f7683]'>Email: uusrusmawan71@gmail.com</p>
            <p className='mt-1 text-sm font-medium text-[#6f7683]'>Phone: 0812 8438 1118</p>
            <p className='mt-1 text-sm font-medium text-[#6f7683]'> CV Inpsirasi Software :Jl. Semut Merah No 57 RT 04/11 Kel. Margahayu Kec. Bekasi Timur - Kota Bekasi (Belakang Trans Mart)</p>
        </div>

      
       
        </div>
        <p className=' mt-1 text-[#6f7683]'>&copy; 2024 Raka. All rights reserved.</p>
    </div>
  )
}

export default Footer
