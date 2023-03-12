import React from 'react'
import LogoEnlazados from '../assets/icons/enlazadoslogo.svg';
import RutaEnlazados from '../assets/img/ruta-enlazados.webp';
import ImpactoEnlazados from '../assets/img/impacto-enlazados.webp';
import FondoTexto from '../assets/img/fondo-texto.webp';
import Player from '../assets/img/player.webp';
import Bakana from '../assets/img/bakana.webp';
import Chat1 from '../assets/icons/chat1.svg';
import Chat2 from '../assets/icons/chat2.svg';
import Difusion from '../assets/img/difusion.webp';
import Aliados from '../assets/img/aliados.webp';

import { useTranslation } from 'react-i18next'

export const Enlazados = () => {
    const [ t, i18n ] = useTranslation("enlazados");

    return (
        <>  
            <header className='header-bg-enlazados header-plantilla'></header>

            <section className='max-w-[1200px] mx-auto px-5 lg:px-0 mt-12 lg:mt-16'>
                <h1 className='nosotros uppercase text-4xl font-bold text-[#7290C9] mt-4 mb-8 text-center'>{t("header.header-title")}</h1>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mt-10 md:mt-0'>
                        <img src={LogoEnlazados} alt='logo enlazados' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5 mb-5'>{t("enlazados.enlazados-title")}</h3>
                        <p className='text-justify'>{t("enlazados.enlazados-text")}</p>
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] mx-auto my-14'>
                <div className='mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>{t("enlazados-description.enlazados-description-title")}</h3>
                </div>
                <img src={RutaEnlazados} alt='ruta enlazados' className='mx-auto w-11/12 mt-4' />
            </section>
            <section>
                <div>
                    <img src={ImpactoEnlazados} alt='impacto enlazados' className='ruta-enlazados mx-auto' />
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>{t("enlazados-description.enlazados-description-how")}</h3>
                        <div>
                            <div className=" mx-auto md:mt-0">
                                <img src={FondoTexto} alt="fondo texto" />
                            </div>
                            <p className='text-justify'>{t("enlazados-description.enlazados-description-how-text1")}
                            </p>
                            <p className='text-justify'>
                                {t("enlazados-description.enlazados-description-how-text2")}
                            </p>
                        </div>
                    </div>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <p className='uppercase text-xl font-bold text-[#7290C9] mt-4 mb-2 text-center'>{t("enlazados-description.enlazados-description-play")}</p>
                        <a href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=424937488796250"><img src={Player} alt='Player' className='enlazados-logo mx-auto' /></a>
                        <img src={Bakana} alt='Logo Bakana Estereo' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] mx-auto my-14'>
                <div className='mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>{t("gifts.gifts-title")}</h3>
                </div>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Chat1} alt='Chat 1' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Chat2} alt='Chat 2' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] mx-auto my-14'>
                <div className='mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-10 text-[#7290C9] font-bold mx-5 mb-5'>{t("content.content-title")}</h3>
                </div>
                <div>
                    <img src={Difusion} alt='difusion enlazados' className='ruta-enlazados mx-auto' />
                </div>
            </section>
            <section className='max-w-[1200px] mx-auto my-14'>
                <div className='mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-10 text-[#7290C9] font-bold mx-5 mb-5'>{t("allies.allies-title")}</h3>
                </div>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <img src={Aliados} alt='aliados enlazados' className='w-11/12 mx-auto' />
                </div>
            </section>
        </>
    )
}