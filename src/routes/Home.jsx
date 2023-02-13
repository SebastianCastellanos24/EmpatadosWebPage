import React from 'react'
import HomeGif from '../assets/gif/home.gif';
import {BtnTemplate} from '../components/BtnTemplate';
import {BtnTemplateWhite} from '../components/BtnTemplateWhite';
import Proposito from '../assets/img/proposito.png';
import Accion from '../assets/img/accion.png';
import Proyectos from '../assets/img/proyectos.png';
import { Slider } from '../components/Slider';
import MiVidaLogo from '../assets/img/mividalogo.png';
import EnlazadosLogo from '../assets/img/enlazadoslogo.png';
import { Link } from "react-router-dom";
import Impacto2020 from '../assets/vid/Impacto2020.mp4';
import BgVideo from '../assets/img/bg-video.png'
import Mision from '../assets/img/mision.png'

import { useTranslation } from 'react-i18next'

export const Home = () => {
    const [ t, i18n ] = useTranslation("home");

    return (
        <>
            <header className='header'>
                <div className='gif bg-[#6F8DC4]'>
                    <img src={HomeGif} alt='logo empatados' className='w-full h-[350px] md:h-[500px] lg:h-[850px] opacity-[40%]'/>
                </div>
                <div className='empatados-descripcion'>
                    <h1 className='uppercase text-8xl font-bold text-[#C8E6E4] mb-4 name'>{t("header.header-title")}</h1>
                    <h2 className='text-5xl font-bold text-[#D2EBE9] mb-8 slogan'>{t("header.header-slogan")}</h2>
                    <p className='text-white font-bold w-full text-sm md:text-lg md:w-[80%] lg:text-xl lg:w-[60%]'>{t("header.header-info")}</p>
                    <div className='w-1/2 flex justify-start mt-8 btn-home'>
                        <BtnTemplate
                            path = "/empatate"
                            text = {t("header.header-btn-donate")}
                        />
                        <BtnTemplateWhite
                            path = "/proyectos"
                            text = {t("header.header-projects")}
                        />
                    </div>
                </div>
            </header>

            <section className='proposito mx-auto mt-10'>
                <div className='flex flex-col md:flex-row my-5'>
                    <img src={Proposito} alt='proposito empatados' className='proposito-logo mx-auto w-1/2'/>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold text-center'>{t("purpose.purpose-title")}</h3>
                        <p className='text-justify w-10/12 mb-5'>{t("purpose.purpose-info")}</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row-reverse my-5'>
                    <img src={Mision} alt='proposito empatados' className='proposito-logo mx-auto'/>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold text-center'>{t("mission.mission-title")}</h3>
                        <p className='text-justify w-10/12 mb-5'>{t("mission.mission-info")}</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row my-5'>
                    <img src={Accion} alt='lineas de accion empatados' className='proposito-logo mx-auto'/>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold text-center'>{t("actions.actions-title")}</h3>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>1. </span>{t("actions.actions-1")}</p>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>2. </span>{t("actions.actions-2")}</p>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>3. </span>{t("actions.actions-3")}</p>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>4. </span>{t("actions.actions-4")}</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row-reverse mt-5'>
                    <img src={Proyectos} alt='proposito empatados' className='proposito-logo mx-auto'/>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold text-center'>{t("projects.projects-title")}</h3>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>1. Mi vida, Mi proyecto: </span>{t("projects.projects-1")}</p>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>2. Enlazados: </span>{t("projects.projects-2")}</p>
                    </div>
                </div>
            </section>

            <section className='flex items-center justify-center flex-col-reverse max-w-[1200px] mx-auto my-10 md:flex-row'>
                <div className='w-1/2'>
                    <Link to={"/enlazados"}>
                        <img src={EnlazadosLogo} alt='logo enlazados ' className='w-90 m-auto hover:scale-110 mt-6 md:mt-0'/>
                    </Link>
                </div>
                <div className='w-1/2'>
                    <Link to={"/mividamiproyecto"}>
                        <img src={MiVidaLogo} alt='logo mi vida, mi pryecto' className='w-64 m-auto hover:scale-110'/>
                    </Link>
                </div>
            </section>

            <section className='bg-[#7290C9] mt-10 md:my-10'>
                <div className='max-w-[1200px] mx-auto py-12'>
                    <p className="mx-auto text-center text-4xl text-white font-bold py-8 uppercase">{t("impact.impact-title")}</p>
                    <video src={Impacto2020} controls preload='auto' poster={BgVideo} className="w-full md:w-10/12 md:rounded mx-auto pb-10"></video>
                </div>
            </section>

            <section className='mb-20'>
                <Slider></Slider>
            </section>
        </>
    )
}

