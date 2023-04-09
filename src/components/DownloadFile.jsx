import React from 'react'
import { HiFolderDownload } from "react-icons/hi";

import { useTranslation } from 'react-i18next'

export const DownloadFile = ({ name, link }) => {
    const [ t, i18n ] = useTranslation("esal");

    return (
        <div className='w-[220px] border-[1px] border-[#7290C9] text-[#7290C9] rounded flex flex-col items-center hover:shadow-2xl hover:scale-110 hover:bg-[#7290C9] hover:text-white duration-300 mx-auto'>
            <a href={link} target="_blank">
                <HiFolderDownload className='h-[120px] w-[120px] text-[#7290C9] mx-auto'/>
                <div>
                    <p className='font-bold text-2xl w-11/12 text-center mx-auto'>{name}</p>
                    <p className='text-xl text-center py-4'>{t("download.download-file")}</p>
                </div>
            </a>
        </div>
    )
}
