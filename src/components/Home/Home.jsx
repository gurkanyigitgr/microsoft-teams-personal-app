import React from 'react';
import ContactForm from '../subComponents/ContactForm/ContactForm';
import { useSelector } from 'react-redux';

const Home = () => {
  const currentTheme = useSelector((state) => state.theme.mode);
  return (
    <div className='flex item-center justify-center h-full'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1
          className={`text-[100px] font-[600] ${
            currentTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          PIBLO
        </h1>
        <p
          className={`pb-5 ${
            currentTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          We help you turn your idea to a digital solution and take a place in
          the new digital age
        </p>
        <a
          className='w-[180px] bg-[#00acc4] py-[10px] px-[25px] rounded-md text-white'
          href='https://www.piblo.com/'
        >
          Piblo
        </a>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
