'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import dsaQuestions from '../questions';

const Page = () => {
  const param = useParams().id;

  // Convert param to number safely
  const index = typeof param === 'string' ? Number(param) : -1;
  const question = dsaQuestions[index];

  return (
    <div className='mt-20 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl pb-6 sm:pb-10 underline underline-offset-4 text-center'>
        Data Structure and Algorithms
      </h1>

      <div className='w-full max-w-4xl bg-gray-800 text-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md'>
        {question ? (
          <div className='flex flex-col gap-4'>
            <h2
              className='text-xl sm:text-2xl md:text-3xl font-semibold'
              style={{
                fontFamily:
                  '"JetBrains Mono", "Source Code Pro", "IBM Plex Mono", "Menlo", "Consolas", "Monaco", "monospace", "Segoe UI", "Roboto", "Inter", "sans-serif"',
              }}
            >
              {question.title}
            </h2>
            <p
              className='text-base sm:text-lg md:text-xl text-gray-200'
              style={{
                fontFamily:
                  '"Consolas", "Monaco", "monospace", "Segoe UI", "Roboto", "Inter", "sans-serif"',
              }}
            >
              {question.description}
            </p>
          </div>
        ) : (
          <p className='text-red-400 text-lg'>Invalid question ID.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
