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

export const Home = () => {
    return (
        <>
            <header className='header'>
                <div className='gif'>
                    <img src={HomeGif} alt='logo empatados' className='w-full max-h'/>
                </div>
                <div className='empatados-descripcion'>
                    <h1 className='uppercase text-8xl font-bold text-[#C8E6E4] mb-4 name'>Empátados</h1>
                    <h2 className='text-5xl font-bold text-[#D2EBE9] mb-8 slogan'>¡Nacimos para hacer la diferencia!</h2>
                    <p className='text-white font-bold w-2/3 text-xl description'>En la Corporación EMPATADOS creamos oportunidades educativas con diversidad, equidad e igualdad, para la construcción de un país justo y en paz; en la infancia, la juventud y la docencia en Colombia y Latinoamérica.</p>
                    <div className='w-1/2 flex justify-start mt-8 btn-home'>
                        <BtnTemplate
                            path = "/empatate"
                            text = "Empátate"
                        />
                        <BtnTemplateWhite
                            path = "/proyectos"
                            text = "Proyectos"
                        />
                    </div>
                </div>
            </header>

            <section className='proposito mx-auto mt-10'>
                <div className='proposito-info my-5'>
                    <img src={Proposito} alt='proposito empatados' className='proposito-logo mx-auto'/>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold text-center'>Nuestro Porpósito</h3>
                        <p className='text-justify w-10/12 mb-5'>En la Corporación <span className='text-[#7290C9] font-bold text-xl'>EMPÁTADOS</span> creemos que la igualdad y equidad de oportunidades educativas y la empatía hacia la diferencia, son fundamentales para la construcción de un país justo y en paz.</p>
                    </div>
                </div>

                <div className='proposito-info proposito-accion my-5'>
                    <img src={Accion} alt='lineas de accion empatados' className='proposito-logo mx-auto'/>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold text-center'>Líneas de Acción</h3>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>1. </span>Desarrollo de liderazgo en los jóvenes a través de la apropiación de su territorio.</p>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>2. </span>Fortalecimiento de la educación básica y media en lugares de alta necesidad.</p>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>3. </span>Empoderamiento y acción colectiva de docentes.</p>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>4. </span>Iniciativas de movilización social hacia el mejoramiento de la educación básica y media.</p>
                    </div>
                </div>

                <div className='proposito-info mt-5'>
                    <img src={Proyectos} alt='proposito empatados' className='proposito-logo mx-auto'/>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold text-center'>Proyectos</h3>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>1. Mi vida, Mi proyecto: </span>Programa de formación experimental en el proyecto de vida para la infancia y la juventud.</p>
                        <p className='text-justify w-10/12 mb-1'><span className='text-[#7290C9] font-bold text-xl'>2. Enlazados: </span>Iniciativa que busca llegar a lugares en donde los accesos a las oportunidades educativas son reducidas.</p>
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

            <section className='bg-[#7290C9] my-10'>
                <div className='max-w-[1200px] mx-auto py-12'>
                    <p className="mx-auto text-center text-4xl text-white font-bold py-8 uppercase">Nuestro Impacto en el 2020</p>
                    <video src={Impacto2020} controls preload='auto' poster={BgVideo} className="w-full md:w-10/12 md:rounded mx-auto pb-10"></video>
                </div>
            </section>

            <section>
                <Slider></Slider>
            </section>
        </>
    )
}

