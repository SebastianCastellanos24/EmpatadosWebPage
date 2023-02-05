import React from 'react'

export const Card = ({img, equipo, cargo, correo}) => {
    return (
        <div className='w-80 md:w-72 ld:w-60 mx-auto'>   
            <img src={img} alt='logo empatados'/>
            <p className='text-center uppercase font-bold text-[#283C54] text-3xl'>{equipo}</p>
            <p className='text-center uppercase font-bold text-[#7290C9] text-xl mb-2'>{cargo}</p>
            <div className='flex justify-center'>
                <a className='uppercase font-bold bg-[#283C54] text-white rounded-xl py-1 px-2 text-sm' href={`mailto:${correo}`}>{correo}</a>
            </div>
        </div>
    )
}
