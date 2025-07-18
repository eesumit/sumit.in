import React from 'react';
import deploymentQuestions from './questions';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='mt-20 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl pb-6 md:pb-10 underline underline-offset-4 text-center'>
        Deployment Writings...
      </h1>

      <div className="w-full flex flex-col items-center gap-6 md:gap-8">
        {deploymentQuestions.map((question, idx) => (
          <div
            key={idx}
            className='w-full sm:w-[90%] md:w-[75%] lg:w-[60%] bg-gray-700 text-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all'
          >
            <Link
              href={`/tech-writings/deployment/${question.id}`}
              className="block transition-all hover:underline underline-offset-4 hover:text-orange-500 font-semibold text-lg sm:text-xl md:text-2xl"
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
