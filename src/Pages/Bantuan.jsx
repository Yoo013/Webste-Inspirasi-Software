import React, { useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaTicket } from "react-icons/fa6";

const Bantuan = () => {
  const [form, setForm] = useState(false)
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Ticket Berhasil Dikirim');
    setEmail('');
    setMessage('');
    setForm(false);
  };

  const handleForm = () => {
    setForm(!form)
  }

  return (
    <div className='bg-gradient-to-b lg:py-20 py-10 from-[#edf5ff] to-white w-full h-auto bantuan'>
      <div data-aos="fade-down" data-aos-duration="1000" className='w-full font-[lexend] text-center py-10'>
        <span className='text-xs lg:text-lg'>Membutuhkan Bantuan?</span>
        <h1 className='lg:text-[32px] font-medium lg:w-[500px] mx-auto lg:leading-8'>Tim support kami yang ramah siap membantu anda.</h1>
      </div>

      <div className='w-full flex gap-6 justify-center flex-wrap'>
        <div data-aos="fade-right" data-aos-duration="1000" className='w-[335px] h-[364px] relative shadow-lg rounded-md p-8'>
          <div className='flex items-center gap-x-4'>
            <div className='border w-16 h-16 rounded-full border-black flex justify-center items-center'>
              <RiCustomerService2Fill size={30} />
            </div>
            <div className='w-28 h-px bg-black'></div>
          </div>
          <p className='font-semibold mt-2 text-lg'>Customer Support</p>
          <p className='text-sm'>Hubungi kami kapan saja jika Anda memiliki pertanyaan atau memerlukan bantuan. Tim customer support kami tersedia untuk memberikan solusi terbaik demi kenyamanan Anda."</p>
          <a href="https://wa.me/6281284381118?text=Halo,%20saya%20ada%20pertanyaan%20tentang%20layanan%20Anda">
            <button className='w-[80%] text-black border all duration-300 border-black hover:border-none hover:text-white font-medium border absolute bottom-10 mx-auto rounded-sm p-2 hover:bg-[#00a884]'>
              Chat Now
            </button>
          </a>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className='w-[335px] h-[364px] relative shadow-lg rounded-md p-8'>
          <div className='flex items-center gap-x-4'>
            <div className='border w-16 h-16 rounded-full border-black flex justify-center items-center'>
              <FaTicket size={30} />
            </div>
            <div className='w-28 h-px bg-black'></div>
          </div>
          <p className='font-semibold mt-2 text-lg'>Ticket Support</p>
          <p className='text-sm'>Ada masalah atau pertanyaan? Ajukan tiket sekarang, dan tim kami akan segera membantu Anda dengan solusi terbaik!"</p>
          <button onClick={handleForm} className='w-[80%] text-white bg-[#0e5857] hover:bg-[#343535] all dura font-medium border absolute bottom-10 mx-auto rounded-sm p-2'>
            Send Ticket
          </button>
        </div>
      </div>

      {form && (
        <div className='w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50'>
          <div className='w-[335px] h-auto relative bg-white shadow-xl p-8'>
            <div className='flex items-center gap-x-4'>
              <div className='border w-16 h-16 rounded-full border-black flex justify-center items-center'>
                <FaTicket size={30} />
              </div>
              <div className='w-28 h-px bg-black'></div>
            </div>
            <p className='font-semibold mt-2 text-lg'>Ticket Support</p>

            <button onClick={handleForm} className='absolute top-4 right-6 text-2xl'>
              &times;
            </button>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 w-full p-2 border rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2  text-white bg-[#0e5857] hover:bg-[#343535]">
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bantuan;
