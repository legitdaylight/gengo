'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import TopBar from '../Components/TopBar'
import { Context } from '@/context/chatContext'
import ReactMarkdown from 'react-markdown'
import { send_icon } from '../../assets/images/images'
import Image from 'next/image'
import { userContext } from '@/context/userContext'
import { BeatLoader } from 'react-spinners'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

function page() {
  const context = useContext(Context);
  
  if (!context) {
    throw new Error('Page must be used within a ContextProvider');
  }

  const {input, setInput, onSent, chatHistory, setChatHistory, loading} = context

  const uContext = useContext(userContext);
  
  if (!uContext) {
    throw new Error('Page must be used within a ContextProvider');
  }

  const {user} = uContext

  useEffect(() => {
    setChatHistory([
      {
        role: 'model',
        parts: [{text: `こんにちは、${user?.displayName?.split(" ")[0]}さん! What would you like to learn today?`}]
      }
    ])
  }, [user])

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return (
    <div className='h-screen flex flex-col bg-red-100'>
      <TopBar />
      <div className='flex flex-col flex-1 max-w-[1500px] w-full mx-auto bg-amber-50 rounded-2xl border-amber-200 border-solid border-[0.5px] overflow-hidden'>
        <div className='flex-1 overflow-y-auto px-[5%] py-3 space-y-4 scrollbar-hidden'>
          {chatHistory.map((msg, index) => (
            index % 2 !== 0 && chatHistory.length > 1 ? (
              <div key={index} className='ml-[40px] mr-[0px] flex items-center gap-[20px] font-[350] '>
                <p className='pl-[12px] pr-[16px] rounded-[20px] bg-red-100 ml-auto'>{msg.parts[0].text}</p>
              </div>
              
            ) : 
              <div key={index} className='px-4 py-3 max-w-full break-words text-gray-800'>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{msg.parts[0].text}</ReactMarkdown>
              </div>
              
          ))}
          {loading ? <BeatLoader color='#ffe2e2'/> : null}
          <div ref={bottomRef} />
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
          <p className='text-[13px] mt-[10px] mb-[10px] mx-auto text-center font-[300] text-gray-400'>As much as we love AI, it can make mistakes sometimes so double check!</p>
        </div>
      </div>
    </div>
  )
}

export default page
