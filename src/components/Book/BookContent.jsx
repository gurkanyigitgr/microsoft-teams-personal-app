import React from 'react';
import { useSelector } from 'react-redux';

export default function BookContent() {
  const books = useSelector((state) => state.book.books);
  return (
    <div className='bg-gray-100 py-10 px-5'>
      <div className='max-w-3xl mx-auto'>
        <div className='mb-6'>
          <h2 className='text-4xl font-bold mb-4'>{books.title}</h2>
          <p className='text-gray-600'>{books.description}</p>
        </div>
        <div>
          <h1 className='text-xl font-bold mb-2'>People :</h1>
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
          <h1 className='text-xl font-bold mb-2'>Subjects :</h1>
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
    </div>
  );
}
