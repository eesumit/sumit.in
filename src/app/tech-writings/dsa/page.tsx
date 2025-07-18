'use client';
import Link from 'next/link';
import dsaQuestions from './questions';

export default function Page() {
  return (
    <div className='mt-8 md:mt-16 lg:mt-24 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold pb-6 md:pb-10 underline underline-offset-4 text-center'>
        Data Structure and Algorithms
      </h1>

      <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-8">
        {dsaQuestions.map((question, idx) => (
          <div
            key={idx}
            className='w-full sm:w-[90%] md:w-[75%] lg:w-[60%] bg-gray-700 text-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all'
          >
            <Link
              href={`/tech-writings/dsa/${question.id}`}
              className="block transition-all hover:underline underline-offset-4 hover:text-orange-500 font-bold text-lg sm:text-xl md:text-2xl"
            >
              {question.title}
            </Link>
            <p className='mt-2 text-sm sm:text-base md:text-lg text-gray-200'>
              {question.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
