"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import Question from '../questions'
const Page = () => {
    const param = useParams().id;

  return (
    <div className='mt-30 flex flex-col justify-center items-center'>
      <h1 className='text-3xl  px-30 pb-10 underline underline-offset-4'>Data Structure and Algorithms.</h1>
      <div className=" w-full flex flex-col justify-center items-center text-left px-30 gap-5">
      
      {typeof param === 'string' && (
        <div
          className='px-30 flex flex-col gap-5'
        >
          <h2 className="text-2xl font-semibold" style={{
            fontFamily:
              '"JetBrains Mono", "Source Code Pro", "IBM Plex Mono", "Menlo", "Consolas", "Monaco", "monospace", "Segoe UI", "Roboto", "Inter", "sans-serif"'
          }}>
            {Question[Number(param)].title}
          </h2>
          <p 
          className='text-xl'
          style={{
            fontFamily:
              ' "Consolas", "Monaco", "monospace", "Segoe UI", "Roboto", "Inter", "sans-serif"'
          }}> {Question[Number(param)].description}</p>
        </div>
      )}

    </div>
    </div>
  )
}

export default Page