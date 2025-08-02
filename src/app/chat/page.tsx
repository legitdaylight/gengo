'use client'

import React, { useContext, useEffect, useState } from 'react'
import TopBar from '../Components/TopBar'
import { Context } from '@/context/chatContext'
import ReactMarkdown from 'react-markdown'
import { send_icon } from '../../assets/images/images'
import Image from 'next/image'

function page() {
  const context = useContext(Context);
  
  if (!context) {
    throw new Error('Page must be used within a ContextProvider');
  }

  const {input, setInput, onSent, chatHistory, setChatHistory} = context

  useEffect(() => {
    setChatHistory([
      {
        role: 'model',
        parts: [{text: 'こんにちは! Hello! What would you like to learn today?'}]
      }
    ])
  }, [])

  return (
    <div className='h-screen flex flex-col bg-red-100'>
      <TopBar />
      <div className='flex flex-col flex-1 max-w-[900px] w-full mx-auto bg-amber-50 rounded-2xl border-amber-200 border-solid border-[0.5px] overflow-hidden'>
        <div className='flex-1 overflow-y-auto px-[5%] py-4 space-y-4 '>
          {chatHistory.map((msg, index) => (
            index % 2 !== 0 && chatHistory.length > 1 ? (
              <div key={index} className='ml-[40px] mr-[0px] flex items-center gap-[20px] font-[350] '>
                <p className='pl-[12px] pr-[16px] rounded-[20px] bg-red-100 ml-auto'>{msg.parts[0].text}</p>
              </div>
            ) : 
              <div key={index} className='px-4 py-3 rounded-xl max-w-[80%] break-words text-gray-800'>
                <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
              </div>
          ))}
        </div>

        <div className='bottom-0 w-full max-w-[900px] pl-5 pr-5 m-auto select-none '>
          <div className='flex items-center justify-between gap-[20px] bg-gray-100 py-[10px] px-[20px] rounded-[50px] border-[0.5px] border-solid border-gray-200'>
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              className='flex-1 bg-transparent border-none outline-none p-[4px] text-[18px]'
              placeholder='なんでも訊く'
            />
            <Image src={send_icon} alt='send icon' onClick={onSent} className='cursor-pointer w-[24px]'/>
          </div>
          <p className='text-[13px] mt-[10px] mb-[10px] mx-auto text-center font-[300]'>As much as we love AI, it can make mistakes sometimes so double check!</p>
        </div>
      </div>
    </div>
  )
}

export default page
