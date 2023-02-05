import React from 'react'

export const VolunteerCard = ({img, nombre}) => {
    return (
        <div className='w-40 md:w-48 ld:w-60 mx-auto'>   
            <img src={img} alt='logo empatados'/>
            <p className='text-center uppercase font-bold text-[#283C54] text-sm'>{nombre}</p>
        </div>
    )
}
