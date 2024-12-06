import React from 'react';
import client1 from '../assets/tes1.png';
import client2 from '../assets/tes2.png';
import client3 from '../assets/tes3.png';
import client4 from '../assets/tes4.png';
import client5 from '../assets/tes5.png';

const Client = () => {
    return (
        <div className=" mx-auto h-auto lg:mt-0 mt-28 text-center" id="client">
            <div data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-4xl font-semibold font-[Open Sans]">Our Client</h1>
            <span className="text-[24px] font-[Montserrat] opacity-[46%] font-medium">
                Yang Pernah Bekerja Sama Dengan Kami
            </span>
            </div>

            <div
                className="slider mt-14">
                <div className="list flex flex-wrap gap-[2rem] justify-center items-center opacity-80">
                    <div data-aos="zoom-in" data-aos-duration="500" className="item w-[130px] lg:w-[150px]" >
                        <img src={client1} alt="Client 1" />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="600" className="item w-[130px] lg:w-[150px]" >
                        <img src={client2} alt="Client 2" />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="700" className="item w-[130px] lg:w-[259px]" >
                        <img src={client3} alt="Client 2" />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" className="item w-[130px] lg:w-[150px]" >
                        <img src={client4} alt="Client 4" />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="900" className="item w-[130px] lg:w-[150px]" >
                        <img src={client5} alt="Client 5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
