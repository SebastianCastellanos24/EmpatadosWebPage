import React from 'react'
import DonaEmpatate from '../assets/img/donaEmpatate.webp'
import MiVidaLogo from '../assets/icons/mividalogo.svg';
import EnlazadosLogo from '../assets/icons/enlazadoslogo.svg';
import UneteVoluntariado from '../assets/img/uneteVoluntariado.webp';
import { Link } from "react-router-dom";
import HomeGif from '../assets/gif/empatate.gif';
import { Formulario } from '../components/Formulario';
import Donacion from '../assets/img/dona.webp';

import { useTranslation } from 'react-i18next'

export const Empatate = () => {
    const [ t, i18n ] = useTranslation("empatate");

    return (
        <>
            <header>
                <div className='gif'>
                    <img src={HomeGif} alt='logo empatados' className='w-full h-[400px] md:h-[500px] lg:h-[700px]'/>
                </div>
            </header>

            <section className='max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center md:my-20'>
                <div className='w-full my-20 md:my-0'>
                    <h2 className='text-xl text-center text-[#7290C9] font-bold uppercase mt-4 mb-4 w-10/12 mx-auto md:text-3xl lg:text-4xl md:mb-6 lg:mb-10'>{t("title.title-title")}</h2>
                    <p className='w-10/12 mx-auto text-justify mb-4 md:mb-10 lg:mb-14'>{t("title.title-description")}</p>
                    <div className='mt-8 btn-home flex flex-wrap gap-4 justify-center mb-4 md:mb-8'>
                        <a href='https://tailwindcss.com/docs/width' className='btn btn-blue uppercase rounded cursor-pointer'>
                            {t("title.title-donate")}
                        </a>
                        <a href='https://tailwindcss.com/docs/width' className='btn btn-blue uppercase rounded cursor-pointer'>
                            {t("title.title-projects")} 
                        </a>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={DonaEmpatate} alt='imagen de niños mejorando su eduación' className='md:rounded h-96 w-full md:w-10/12 md:mx-auto md:max-w-[450px]'/>
                </div>
            </section>

            <section className='bg-[#C8E6E4] py-12 md:my-20'>
                <h3 className='max-w-[1200px] mx-auto text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold w-10/12'>{t("projects.projects-title")} </h3>
                <div className='flex items-center justify-center max-w-[1200px] mx-auto my-6 md:my-8 flex-wrap gap-y-10 lg:gap-y-0'>
                    <div className='w-1/2 flex flex-col items-center justify-center min-w-[600px]'>
                        <Link to={"/enlazados"} className="lg:h-[350px] flex">
                            <img src={EnlazadosLogo} alt='logo enlazados ' className='w-60 md:w-80 lg:w-96 m-auto hover:scale-110 mb-3 mt-6 md:mt-0'/>
                        </Link>
                        <a href='https://tailwindcss.com/docs/width' className='btn btn-blue uppercase rounded cursor-pointer'>
                            {t("projects.projects-donate-enlazados")} 
                        </a>
                    </div>
                    <div className='w-1/2 flex flex-col items-center justify-center min-w-[600px]'>
                        <Link to={"/mividamiproyecto"} className="lg:h-[350px] flex">
                            <img src={MiVidaLogo} alt='logo mi vida, mi pryecto' className='w-36 md:w-60 lg:w-72 m-auto hover:scale-110 mb-3'/>
                        </Link>
                        <a href='https://tailwindcss.com/docs/width' className='btn btn-blue uppercase rounded cursor-pointer text-center'>
                            {t("projects.projects-donate-mivida")} 
                        </a>
                    </div>
                </div>
            </section>

            <section className='max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row-reverse items-center md:my-20'>
                <div className='w-full my-14 md:my-0'>
                    <h2 className='text-xl text-center text-[#7290C9] font-bold uppercase my-4 w-10/12 mx-auto md:text-3xl lg:text-4xl lg:mb-12'>{t("volunteering.volunteering-title")}</h2>
                    <p className='w-10/12 mx-auto text-justify mb-4 md:mb-8 lg:mb-14'>{t("volunteering.volunteering-description")}</p>
                    <div className='mt-8 btn-home flex flex-wrap gap-4 justify-center mb-4 md:mb-8'>
                        <a href='https://tailwindcss.com/docs/width' className='btn btn-blue uppercase rounded cursor-pointer mt-2 md:mt-0'>
                            {t("volunteering.volunteering-link")}
                        </a>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={UneteVoluntariado} alt='voluntarios empatados' className='md:rounded md:h-96'/>
                </div>
            </section>

            <section className='my-5 max-h-[600px] overflow-hidden'>
                <img src={Donacion} alt='logo empatados'/>
            </section>

            <section>
                <Formulario/>
            </section>

        </>
    )
}