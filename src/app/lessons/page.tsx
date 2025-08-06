'use client'

import React from 'react'
import TopBar from '../Components/TopBar'
import { FaAngleDoubleDown } from "react-icons/fa";
import DropDown from '../Components/DropDown';

const page = () => {
  return (
    <>
        <TopBar />
        <div className='flex items-center justify-center'>
          <div className='flex flex-col select-none gap-y-4'>
            <h1 className='text-center'>Welcome to the lessons page!</h1>
            <h2>h2 text</h2>
            <DropDown 
              title='Lesson 0: Reading Japanese'
              lessons={["0.1: Hiragana", "0.2: Katakana", "0.3: Kanji"]}
              lessonNumber={0}
            />
          </div>
        </div>
    </>
  )
}

export default page