import React, { useState } from 'react'
import foto from '../assets/about.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Profile = () => {
    const [start, setStart] = useState(false)
    return (
        <div className='max-w-[1250px] mt-24 mx-auto w-full  justify-between lg:px-8 px-4 h-auto flex flex-col md:flex-row' id='profile'>
            <div data-aos="fade-right" data-aos-duration="1000" className='lg:w-[432px] mt-16'>
                <h1 className='text-4xl font-semibold font-[Open Sans]'>Profile Kami</h1>
                <p className='text-sm text-[#464444] leading-4 mt-1'>Inspirasi Software adalah perusahaan pengembangan aplikasi yang berbasis di Bekasi, didirikan dengan visi untuk membantu individu dan bisnis mengubah ide-ide teknologi mereka menjadi solusi digital yang inovatif dan efisien. Sejak berdiri, kami telah berkomitmen untuk menghadirkan layanan berkualitas tinggi di bidang pengembangan perangkat lunak, desain antarmuka pengguna, dan integrasi teknologi canggih.</p>

                <div className='mt-10 text-white flex justify-center gap-4'>
                    <ScrollTrigger onEnter={() => setStart(true)} >
                      <div className='text-center shadow-lg rounded-lg bg-[rgba(0,0,0,0.5)] border lg:w-[180px] w-[140px] h-24 flex flex-col justify-center p-2'>
                        <h1 className='lg:text-2xl text-lg font-marko-one font-semibold'>
                            <CountUp start={start} end={5} duration={4} />+
                        </h1>
                        <span className='text-sm font-medium'>Year Experience</span>
                      </div>
                    </ScrollTrigger>
                    <ScrollTrigger onEnter={() => setStart(true)} >
                      <div className='text-center shadow-lg rounded-lg bg-[rgba(0,0,0,0.5)] border lg:w-[180px] w-[140px] h-24 flex flex-col justify-center p-2'>
                        <h1 className='lg:text-2xl text-lg font-marko-one font-semibold'>
                            <CountUp start={start} end={100} duration={4} />+
                        </h1>
                        <span className='text-sm font-medium'>Project</span>
                      </div>
                    </ScrollTrigger>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className='relative '>
                <img src={foto} className='lg:w-[376px] w-[280px] lg:ml-0 ml-28  z-[20]' alt="" />
                <div className=' absolute top-20 lg:top-36 -z-[1] lg:-left-12 left-14 w-[280px] h-[280px] lg:w-[323px] lg:h-[323px] rounded-full flex items-center bg-[#000] bg-opacity-60 '>

                </div>
            </div>

        </div>
    )
}

export default Profile
