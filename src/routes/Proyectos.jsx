import React from 'react'
import MiVidaLogo from '../assets/icons/mividalogo.svg';
import EnlazadosLogo from '../assets/icons/enlazadoslogo.svg';
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next'

export const Proyectos = () => {
    const [ t, i18n ] = useTranslation("proyectos");
    return (
        <>
            <header className='header-bg-pro header-plantilla mb-5'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='empatados-descripcion'>
                        <h1 className='uppercase text-5xl font-bold text-[#C8E6E4] mb-4 md:text-8xl'>{t("header.header-title")}</h1>
                    </div>
                </div>
            </header>

            <section className='py-2 md:my-8 max-w-[1200px] mx-auto'>
                <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5 text'>{t("header.header-title-2")}</h3>
                <div className='flex flex-col md:flex-row gap-y-10 items-center justify-center max-w-[1200px] mx-auto my-6 md:my-8'>
                    <div className='w-2/3'>
                        <Link to={"/enlazados"}>
                            <img src={EnlazadosLogo} alt='logo enlazados ' className='w-56 md:w-80 lg:w-96 m-auto hover:scale-110 mt-6 md:mt-0'/>
                        </Link>
                    </div>
                    <div className='w-2/3'>
                        <Link to={"/mividamiproyecto"}>
                            <img src={MiVidaLogo} alt='logo mi vida, mi pryecto' className='w-36 md:w-60 lg:w-72 m-auto hover:scale-110'/>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}