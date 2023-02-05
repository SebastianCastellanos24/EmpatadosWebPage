import React from 'react'
import '../index.css'

export const BtnLinkTemplate = ({text, link, img, alt}) => {
    return (
        <a href={link}>
            <div className='w-64 h-44 relative bg-[#7290C9] rounded hover:scale-105'>
                <img src={img} alt={alt} className="w-full h-full absolute opacity-20 rounded"/>
                <p className='absolute top-[38%] text-white font-bold uppercase text-center text-xl'>{text}</p>
            </div>
        </a>
    )
}
