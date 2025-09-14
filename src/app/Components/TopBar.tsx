'use client'

import { auth } from '@/firebase/config'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged, User } from 'firebase/auth'
import { userContext } from '@/context/userContext'

const TopBar = () => {
  const router = useRouter()

  const context = useContext(userContext);

  if (!context) {
    throw new Error('Page must be used within a ContextProvider');
  }

  const {user} = context

  return (
      <div className='text-xl select-none flex items-center justify-between p-[10px] bg-gray-200 shadow-xl'>
        <p className="cursor-pointer ml-20" onClick={() => router.push('/')}>Gengo</p>
        <div className='bg-gray-300 pl-3 pr-3 pt-1 pb-1 rounded-full cursor-pointer' onClick={() => router.push("/lessons")}>
            <p className='font-bold'>Lessons</p>
        </div>
        <div className='bg-gray-300 pl-3 pr-3 pt-1 pb-1 rounded-full cursor-pointer' onClick={() => router.push("/chat")}>
            <p className='font-bold'>AI Tutor</p>
        </div>
        <img src={user?.photoURL || undefined} className='h-8 w-8 cursor-pointer rounded-full mr-20' onClick={() => router.push("/profile")}/>
      </div>
  )
}

export default TopBar