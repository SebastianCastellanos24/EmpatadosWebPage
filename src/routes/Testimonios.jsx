import React from 'react'
import Semana from '../assets/img/semana.webp';
import Recaudacion2 from '../assets/img/recaudacion2.webp';
import Recaudacion1 from '../assets/img/recaudacion.webp';
import Impacto2020 from '../assets/vid/Impacto2020.mp4';
import Consecucion from '../assets/icons/consecucion.svg';
import AspectoJuridico from '../assets/img/aspecto-juridico.webp';
import BgVideo from '../assets/img/bg-video.webp'

import { useTranslation } from 'react-i18next'

export const Testimonios = () => {
    const [ t, i18n ] = useTranslation("testimonios");

    return (
        <>
            <header className='header-bg-testimonios header-plantilla'>
                <h1 className='max-w-[1200px] mx-auto uppercase text-5xl font-bold text-white mb-4 md:text-8xl'>{t("header.header-title")}</h1>
            </header>

            <section className='my-10'>
                <div className='flex flex-col justify-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>{t("testimonials.testimonials-title1")}</h3>
                        <div>
                            <p className='text-justify mt-5'>{t("testimonials.testimonials-text1a")}
                            </p>
                            <p className='text-justify'>
                                {t("testimonials.testimonials-text1b")}
                            </p>
                        </div>
                    </div>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Semana} alt='Semana' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section className='my-10'>
                <div className='flex flex-col-reverse justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-18'>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Recaudacion1} alt='Semana' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>{t("testimonials.testimonials-title2")}</h3>
                        <div>
                            <p className='text-justify my-5'>{t("testimonials.testimonials-text2")}</p>
                            <img src={Recaudacion2} alt='Semana' className='proposito-logo mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-14 bg-[#7290C9] py-12'>
                <div className='max-w-[1200px] mx-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-white md:mb-2 text-white font-bold mx-5'>{t("report.report-title")}</h3>
                    <p className='my-4 text-justify mx-auto text-white w-11/12 md:w-full'>{t("report.report-text")}</p>
                    <video src={Impacto2020} controls preload='auto' poster={BgVideo} className="w-full md:w-10/12 md:rounded mx-auto"></video>
                </div>
            </section>
            <section>
                <div className='flex flex-col justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>{t("testimonialsExtra.testimonialsExtra-title1")}</h3>
                        <div>
                            <p className='mt-5'>{t("testimonialsExtra.testimonialsExtra-text1a")}</p>
                            <p className='text-justify text-[#7290C9] font-bold'>{t("testimonialsExtra.testimonialsExtra-text1b")}</p>
                        </div>
                    </div>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Consecucion} alt='Consecucion Recursos' className='w-11/12 mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-18'>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={AspectoJuridico} alt='Aspecto Juridico' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>{t("testimonialsExtra.testimonialsExtra-title2")}</h3>
                        <div>
                            <p className='text-justify mt-5'>{t("testimonialsExtra.testimonialsExtra-text2")}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}