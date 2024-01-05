import React from 'react'
import { MenuSvg } from './MenuSvg'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between items-center text-4xl w-4/5 mt-5 mb-2 px-5'>
            <div className='w-5'>
                <MenuSvg></MenuSvg>
            </div>
            <div className='font-bold'>
                <span>Word</span><span className='text-gray-400'>less+</span>
            </div>
            <div>

            </div>
        </div>
        <hr className='w-4/5 opacity-20'/>
    </>
  )
}

export default Navbar