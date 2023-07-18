"use client"
import React, {useState} from 'react'

const Quantity = () => {
    const [num, setNum] = useState(1);
  return (
    <div className='flex gap-x-2 ietms-center'>
        {/* {minus} */}
        <button className='border h-6 w-6 rounded-full center'
        onClick={() => {
            setNum(num <= 1 ? 1 :num-1)}}>
            -
        </button>
        {/* {number} */}
            <span className="text-sm"> {num} </span>
        {/* {plus} */}
        <button className='border h-6 w-6 rounded-full center' 
        onClick={() => {
            setNum(num+1)}}>
            +
        </button>

    </div>
  )
}

export default Quantity
