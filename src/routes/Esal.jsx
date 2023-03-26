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

            <section className='max-w-[1200px] mx-auto w-10/12 my-14 cards'>
                <DownloadFile name={t("name.name-default")} link={"https://tailwindcss.com/docs/drop-shadow"}/>
                <DownloadFile name={t("name.name-default")} link={"https://tailwindcss.com/docs/drop-shadow"}/>
                <DownloadFile name={t("name.name-default")} link={"https://tailwindcss.com/docs/drop-shadow"}/>
                <DownloadFile name={t("name.name-default")} link={"https://tailwindcss.com/docs/drop-shadow"}/>
                <DownloadFile name={t("name.name-default")} link={"https://tailwindcss.com/docs/drop-shadow"}/>
                <DownloadFile name={t("name.name-default")} link={"https://tailwindcss.com/docs/drop-shadow"}/>
            </section>
        </>
    )
}
