import React from 'react'
import { HiFolderDownload } from "react-icons/hi";

export const DownloadFile = ({ name, link }) => {
    return (
        <div className='w-[220px] border-[1px] border-[#7290C9] text-[#7290C9] rounded flex flex-col items-center hover:shadow-2xl hover:scale-110 hover:bg-[#7290C9] hover:text-white duration-300 mx-auto'>
            <a href={link} target="_blank">
                <HiFolderDownload className='h-[120px] w-[120px] text-[#7290C9] mx-auto'/>
                <div>
                    <p className='font-bold text-2xl w-11/12 text-center mx-auto'>{name}</p>
                    <p className='text-xl text-center py-4'>Descargar</p>
                </div>
            </a>
        </div>
    )
}
