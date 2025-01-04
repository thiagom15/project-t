import React from 'react'

export function AboutUs() {
  return (
    
      <div className='flex flex-col h-auto mx-auto bg-gray-500 rounded-2xl shadow-2xl overflow-hidden text-black w-[55vw]'>
        <div className='p-10'>
        <div className='text-center flex flex-col items-center font-extrabold'>
          <h1 className='text-4xl'>Bienvenido a mi tienda!</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p className='text-2xl'>
          Nuestro objetivo es eliminar cualquier barrera técnica o financiera que pueda
impedirle crear su propio sitio web. Nuestras potentes herramientas permiten
que individuos y propietarios de empresas creen un sitio web, vendan en línea o
lleguen a audiencias globales. Ya sea que sea un principiante o un experto en sitios web,
¡estamos encantados de ayudarlo en su camino!
          </p>
        </div>
      </div>
    </div>
  )
}