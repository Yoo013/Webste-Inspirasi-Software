import React, { useState } from 'react';
import Accordion from '../Components/Accordion';
import { faq } from '../Components/Data';

const Faq = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div className='lg:px-28 lg:py-12  mt-28 h-auto faq relative' id='faq'>
      <div data-aos="fade-down" data-aos-duration="1000" className='font-[Poppins] p-4'>
        <span className='font-semibold text-sm text-white'>FREQUENTLY ASKED QUESTION</span>
        <h1 className='lg:text-3xl text-xl font-open-sans font-bold lg:w-[60%] text-white'>Pertanyaan Umum Dalam Proses
Pembuatan Aplikasi Di Inspirasi Software
</h1>
      </div>
      <div className='mt-12'>
      {faq.map((item, index) => (
        <Accordion 
        key={index}
          pertanyaan={item.pertanyaan}
          jawaban={item.jawaban}
          isOpen={activeIndex === index}
          onClick={() => handleAccordionClick(index)}
          />
        ))}
        </div>
    </div>
  );
};

export default Faq;
