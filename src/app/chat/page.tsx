'use client'

import React, { useContext, useEffect, useState } from 'react'
import TopBar from '../Components/TopBar'
import InputBox from '../Components/InputBox'
import { Context } from '@/context/chatContext'

function page() {
  const context = useContext(Context);
  
  if (!context) {
    throw new Error('Page must be used within a ContextProvider');
  }

  const {input, setInput, onSent, resultData, chatHistory} = context

  return (
    <>
      <TopBar />
      <div className='flex flex-col h-screen max-w-[900px] mx-auto bg-amber-50'>
        <div className='flex-1 overflow-y-auto px-[5%] py-4 space-y-4'>
          {chatHistory.map((msg, index) => (
            index % 2 === 0 ? (
              <div key={index} className='ml-[40px] mr-[0px] flex items-center gap-[20px] font-[350] '>
                <p className='pl-[12px] pr-[16px] rounded-[20px] bg-japan-500 ml-auto'>{msg.parts[0].text}</p>
              </div>
            ) : 
              <div key={index} className='flex items-start gap-[20px]'>
                <p className='text-[17px] font-[300] leading-1.5'>{msg.parts[0].text}</p>
              </div>
          ))}
        </div>

        <div className='absolute bottom-0 w-full max-w-[900px] pl-0 pr-5 m-auto select-none'>
          <div className='flex items-center justify-between gap-[20px] bg-gray-100 pl-[20px] pr-[20px] rounded-[50px] border-[0.5px] border-solid'>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={onSent}>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
