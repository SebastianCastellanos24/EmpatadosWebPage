import React from 'react'
import LogoEnlazados from '../assets/img/logoenlazados.jpg';
import RutaEnlazados from '../assets/img/ruta-enlazados.png';
import ImpactoEnlazados from '../assets/img/impacto-enlazados.png';
import FondoTexto from '../assets/img/fondo-texto.png';
import Player from '../assets/img/player.png';
import Bakana from '../assets/img/bakana.png';
import Chat1 from '../assets/img/chat1.png';
import Chat2 from '../assets/img/chat2.png';
import Difusion from '../assets/img/difusion.png';
import Aliados from '../assets/img/aliados.png';

export const Enlazados = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto px-5 lg:px-0 mt-12 lg:mt-16'>
                <h1 className='nosotros uppercase text-4xl font-bold text-[#7290C9] mt-4 mb-8 text-center'>Enlazados conecta, cree en equipo y llega donde nos necesitan</h1>
            </div>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={LogoEnlazados} alt='logo enlazados' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Enlazados</h3>
                        <p className='text-justify'>Es una iniciativa que busca llegar a lugares en donde el acceso a oportunidades educativas son reducidas, llevando audios educativos a través de Whatsapp para complementar la educacion en casa.

                            Enlazamos a los estudiantes y profesores de comunidades sin acceso a interner, con profesionales voluntarios y organizaciones que quieren aportar.</p>
                    </div>
                </div>
            </section>
            <section className='max-w-[1500px] mx-auto my-14'>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>¿Como lo hacemos?</h3>
                </div>
                <img src={RutaEnlazados} alt='ruta enlazados' className='ruta-enlazados mx-auto' />
            </section>
            <section>
                <div>
                    <img src={ImpactoEnlazados} alt='impacto enlazados' className='ruta-enlazados mx-auto' />
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>¿Qué Hicimos?</h3>
                        <div>
                            <div className=" mx-auto md:mt-0">
                                <img src={FondoTexto} alt="fondo texto" />
                            </div>
                            <p className='text-justify'>La entrega de USB con el contenido educativo a 20 emisoras de la Red de Reporteros de los municipios PDET, para ser difundido a estudiantes y docentes del país.
                            </p>
                            <p className='text-justify'>
                                La corporación participó en una entrevista radial con una emisora: Bakana Stereo de Putumayo, invitando a conocer el programa y contenido de los audios y su disponibilidad en la región.
                            </p>
                        </div>
                    </div>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <p className='uppercase text-xl font-bold text-[#7290C9] mt-4 mb-2 text-center'>SIGUE EL ENLACE Y ESCUCHA NUESTRA ENTREVISTA</p>
                        <img src={Player} alt='Player' className='enlazados-logo mx-auto' />
                        <a className='text-sm font-bold text-[#7290C9] mt-6 mb-8 text-center' href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=424937488796250">https://www.facebook.com/watch/live/?ref=watch_permalink&v=424937488796250</a>
                        <img src={Bakana} alt='Logo Bakana Estereo' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section className='max-w-[1500px] mx-auto my-14'>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Envío de obsequios y contenidos educativos a los reporteros comunitarios</h3>
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
            <section className='max-w-[1500px] mx-auto my-14'>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-10 text-[#7290C9] font-bold mx-5'>Difusión del contenido</h3>
                </div>
                <div>
                    <img src={Difusion} alt='difusion enlazados' className='ruta-enlazados mx-auto' />
                </div>
            </section>
            <section className='max-w-[1500px] mx-auto my-14'>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-10 text-[#7290C9] font-bold mx-5'>Nuestros aliados de difusión</h3>
                </div>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <img src={Aliados} alt='aliados enlazados' className='ruta-enlazados mx-auto' />
                </div>
            </section>
        </>
    )
}