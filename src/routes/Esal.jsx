import React from 'react'
import { DownloadFile } from '../components/DownloadFile';

import { useTranslation } from 'react-i18next'

export const Esal = () => {
    const [ t, i18n ] = useTranslation("esal");

    return (
        <>
            <header className='header-bg-esal header-plantilla mb-5'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='empatados-descripcion'>
                        <h1 className='uppercase text-4xl font-bold text-white mb-4 md:text-6xl lg:text-7xl'>{t("header.header-title")}</h1>
                    </div>
                </div>
            </header>
            
            <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] text-[#7290C9] font-bold max-w-[1200px] mx-auto w-10/12 mt-8'>2023</h3>
            <section className='max-w-[1200px] mx-auto w-10/12 my-10 cards'>
                <DownloadFile name={t("documents2023.documents2023-name1")} link={"https://drive.google.com/file/d/1W69Qltteu90QOYZo0G6LP-2ZcZnKXYPI/view"}/>
                <DownloadFile name={t("documents2023.documents2023-name2")} link={"https://drive.google.com/file/d/1VnqArN0IOhf-nP66AYsBdQQV2StbUtLW/view"}/>
            </section>

            <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] text-[#7290C9] font-bold max-w-[1200px] mx-auto w-10/12 mt-8'>2022</h3>
            <section className='max-w-[1200px] mx-auto w-10/12 my-10 cards mb-20'>
                <DownloadFile name={t("documents2022.documents2022-name1")} link={"https://drive.google.com/file/d/1HugQ79bgLyL6jgJiGMJtryghQgF8NR0x/view"}/>
                <DownloadFile name={t("documents2022.documents2022-name2")} link={"https://drive.google.com/file/d/1iu_HihrdsOBQB8RDwhKgvQfnIFegOCFw/view"}/>
                <DownloadFile name={t("documents2022.documents2022-name3")} link={"https://drive.google.com/file/d/159c_8Pd1F_5oEYVsvH48IhNteDYDPU0d/view"}/>
                <DownloadFile name={t("documents2022.documents2022-name4")} link={"https://drive.google.com/file/d/1YM1stSeEgZrMfwG5pfK2stnWZNA5YirJ/view"}/>
            </section>
        </>
    )
}
