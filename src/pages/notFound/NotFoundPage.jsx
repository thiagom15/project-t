import React from 'react'
import { Link } from "react-router-dom";

export function NotFound() {
  return (
      <div className='flex flex-col h-auto mx-auto bg-slate-200 rounded-2xl shadow-xl overflow-hidden text-gray-400 w-[55vw]'>
        <div className='p-10'>
        <div className='text-center flex flex-col items-center font-extrabold'>
          <img src="404.png"alt="font"/>
          <h2><Link className="underline flex font-bold pt-14 text-black" to={"/"}>
            Volver
          </Link></h2>
        </div>
      </div>
    </div>
  )
}