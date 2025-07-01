'use client';
import Link from 'next/link';
import Questions from './questions'
 
export default function Page() {
  return (
    <div className='mt-30 flex flex-col justify-center items-center'>
      <h1 className='text-3xl  px-30 pb-10 underline underline-offset-4'>Data Structure and Algorithms</h1>
      <div className=" w-full flex flex-col justify-center items-center text-left px-30 gap-5">
      
      {Questions.map((question, idx) => (
        <div key={idx} className='w-[50%] px-10 bg-gray-700 p-4'>
          <Link
          key={idx}
          href={`/tech-writings/dsa/${question.id}`}
          className=" block transition-all hover:underline underline-offset-4 hover:text-orange-500 font-bold text-2xl"
        >
          {question.title}
        </Link>
        <p className='text-lg'>
        {question.description}
        </p>
        </div>
         
      ))}
    </div>
    </div>
  );
}