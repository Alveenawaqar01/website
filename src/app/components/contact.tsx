import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const aboutpage = () => {
  return (
    <div className="bg-cover bg-center h-[200px]" style={{ backgroundImage: "url('/bg1.png')" }}>
      <div className="flex items-center justify-center h-full pt-6">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Our Chefs </h1>
          <ul className="space-y-4">
            <li className="text-xl flex justify-center items-center">
             Home <span className="text-yellow-500 ml-2"><IoIosArrowForward /></span> 
             <Link href = "/">Signout </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default aboutpage;