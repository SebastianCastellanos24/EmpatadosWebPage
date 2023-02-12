import React from 'react'
import {BtnTemplate} from '../components/BtnTemplate';
import DonaEmpatate from '../assets/img/donaEmpatate.jpg'
import MiVidaLogo from '../assets/img/mividalogo.png';
import EnlazadosLogo from '../assets/img/enlazadoslogo.png';
import UneteVoluntariado from '../assets/img/uneteVoluntariado.png';
import { Link } from "react-router-dom";
import HomeGif from '../assets/gif/empatate.gif';
import { Formulario } from '../components/Formulario';
import Donacion from '../assets/img/dona.png';

export const Empatate = () => {
    return (
        <>
            <header>
                <div className='gif'>
                    <img src={HomeGif} alt='logo empatados' className='w-full h-[400px] md:h-[500px]'/>
                </div>
            </header>

            <section className='max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center md:my-20'>
                <div className='w-full my-20 md:my-0'>
                    <h2 className='text-xl text-center text-[#7290C9] font-bold uppercase mt-4 mb-4 w-10/12 mx-auto md:text-3xl lg:text-4xl md:mb-6 lg:mb-10'>¡Nacimos para hacer la diferencia!</h2>
                    <p className='w-10/12 mx-auto text-justify mb-4 md:mb-10 lg:mb-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quis alias laboriosam! Ut et qui eveniet ullam adipisci dignissimos dolore eum quibusdam. Iure accusantium modi assumenda reprehenderit magnam vero sequi!.</p>
                    <div className='mt-8 btn-home flex flex-wrap gap-4 justify-center mb-4 md:mb-8'>
                        <a href='https://tailwindcss.com/docs/width' className='btn btn-blue uppercase rounded cursor-pointer'>
                            Dona Aquí
                        </a>
                        <BtnTemplate
                            path = "/proyectos"
                            text = "Proyectos"
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <img src={DonaEmpatate} alt='imagen de niños mejorando su eduación' className='md:rounded h-96 w-full md:w-10/12 md:mx-auto md:max-w-[450px]'/>
                </div>
            </section>

            <section className='bg-[#C8E6E4] py-12 md:my-20'>
                <div className='flex items-center justify-center max-w-[1200px] mx-auto my-6 md:my-8'>
                    <div className='w-1/2'>
                        <Link to={"/enlazados"}>
                            <img src={EnlazadosLogo} alt='logo enlazados ' className='w-56 md:w-80 lg:w-96 m-auto hover:scale-110 mt-6 md:mt-0'/>
                        </Link>
                    </div>
                    <div className='w-1/2'>
                        <Link to={"/mividamiproyecto"}>
                            <img src={MiVidaLogo} alt='logo mi vida, mi pryecto' className='w-36 md:w-60 lg:w-72 m-auto hover:scale-110'/>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row-reverse items-center md:my-20'>
                <div className='w-full my-14 md:my-0'>
                    <h2 className='text-xl text-center text-[#7290C9] font-bold uppercase my-4 w-10/12 mx-auto md:text-3xl lg:text-4xl lg:mb-12'>Únete al equipo de voluntarios</h2>
                    <p className='w-10/12 mx-auto text-justify mb-4 md:mb-8 lg:mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus quis cum maxime optio suscipit, sed error minima. Fuga obcaecati quidem minus laboriosam tempore fugiat vitae, odio pariatur veritatis at.</p>
                    <div className='mt-8 btn-home flex flex-wrap gap-4 justify-center mb-4 md:mb-8'>
                        <a href='https://tailwindcss.com/docs/width' className='btn btn-blue uppercase rounded cursor-pointer mt-2 md:mt-0'>
                            Link de inscripción
                        </a>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={UneteVoluntariado} alt='voluntarios empatados' className='md:rounded md:h-96'/>
                </div>
            </section>

            <section className='my-5'>
                <img src={Donacion} alt='logo empatados' className='w-full h-[400px] md:h-[800px]'/>
            </section>

            <section>
                <Formulario/>
            </section>

        </>
    )
}