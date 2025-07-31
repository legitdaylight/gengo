'use client'

import React, { useContext, useEffect, useState } from 'react'
import TopBar from '../Components/TopBar'
import InputBox from '../Components/InputBox'
import { Context } from '@/context/chatContext'

function page() {
  const context = useContext(Context);
  
  // Handle the case where context might be null
  if (!context) {
    throw new Error('Page must be used within a ContextProvider');
  }


  const {input, setInput, onSent} = context

  return (
    <div>
      <TopBar />
      <div className='bg-japan-500 flex flex-col max-w-[900px] m-auto justify-between min-h-full'>
        <div className='px-[5%] py-0 max-h-lvh overflow-y-scroll'>

        </div>
        <InputBox />
        <div>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={onSent}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default page
