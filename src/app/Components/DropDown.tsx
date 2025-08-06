import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { FaAngleDoubleUp } from "react-icons/fa";

type DropDownProps = {
    title: string,
    lessons: string[],
    lessonNumber: number
}

const DropDown = ({title, lessons, lessonNumber}: DropDownProps) => {
    const [showItems, setShowItems] = useState(false)

    const router = useRouter()

    return (
    <div>
        <div 
            className='flex flex-row bg-gray-300 px-15 py-5 gap-5 cursor-pointer justify-between border-solid border-black border-[0.5px]'
            onClick={() => setShowItems(!showItems)}
        >
            <div>
                <p>{title}</p>
            </div>
            {showItems ? <FaAngleDoubleUp className='w-6 h-6'/> : <FaAngleDoubleDown className='w-6 h-6'/>}
        </div>
        {showItems ? lessons.map((msg, index) => (
            <div 
                key={index} 
                className='bg-gray-100 px-15 py-5 cursor-pointer border-solid border-black border-[0.5px]'
                onClick={() => router.push(`/lessons/${lessonNumber}/${msg.split(' ')[0].split(':')[0]}`)}
            >
                <p className='text-center'>{msg}</p>
            </div>
        ))  : null}
    </div>
  )
}

export default DropDown
