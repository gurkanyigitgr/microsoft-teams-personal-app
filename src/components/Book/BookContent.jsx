import React from 'react';
import { useSelector } from 'react-redux';

export default function BookContent() {
  const books = useSelector((state) => state.book.books);
  const currentTheme = useSelector((state) => state.theme.mode);
  return (
    <div className='flex flex-col justify-center h-full my-auto'>
      <div className='mb-6'>
        <h2
          className={`text-4xl font-bold mb-8 ${
            currentTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          {books.title}
        </h2>
        <p
          className={`${
            currentTheme === 'dark' ? 'text-[#dddd]' : 'text-black'
          }`}
        >
          {books.description}
        </p>
      </div>
      <div>
        <h1
          className={`text-xl font-bold mb-2 ${
            currentTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          People :
        </h1>
        <div className='flex flex-wrap'>
          {books.subject_people.map((people) => (
            <button
              key={people}
              className='mr-2 mb-2 px-2 py-1 bg-green-700 text-white rounded'
            >
              {people}
            </button>
          ))}
        </div>
      </div>
      <div className='mb-8'>
        <h1
          className={`text-xl font-bold mb-2 ${
            currentTheme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Subjects :
        </h1>
        <div className='flex flex-wrap'>
          {books.subjects.map((subject) => (
            <button
              key={subject}
              className='mr-2 mb-2 px-2 py-1 bg-[#04293A] text-white rounded'
            >
              {subject}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
