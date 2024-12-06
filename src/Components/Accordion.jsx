import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accordion = ({ pertanyaan, jawaban, isOpen, onClick }) => {
  return (
    <div className="p-2 " onClick={onClick} id='faq'>
      <div data-aos="fade-right" data-aos-duration="1200" className="flex justify-between items-center cursor-pointer border p-4 rounded-lg" >
        <h1 className="text-white font-semibold">{pertanyaan}</h1>
        <span className="text-black text-lg">{isOpen ? <ArrowDropUpIcon className='text-white w-8 h-8'/> : <ArrowDropDownIcon className='text-white w-8 h-8'/>}</span>
      </div>
      <div
        className={`overflow-hidden transition-[max-height]  duration-700 ease-in-out ${
          isOpen ? 'max-h-[500px] duration-700 ease-in-out' : 'max-h-0 transition all duration-500 ease-in-out'
        }`}
      >
        <p className="text-sm text-white leading-5 mt-2 border-b p-2">{jawaban}</p>
      </div>
    </div>
  );
};

export default Accordion;
