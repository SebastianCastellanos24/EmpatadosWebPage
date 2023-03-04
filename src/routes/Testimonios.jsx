import React from 'react'
import Semana from '../assets/img/semana.png';
import Recaudacion1 from '../assets/img/recaudacion1.png';
import Recaudacion2 from '../assets/img/recaudacion2.png';
import Informe from '../assets/img/informe.png';
import QR from '../assets/img/qr.png';
import Consecucion from '../assets/img/consecucion.png';
import AspectoJuridico from '../assets/img/aspecto-juridico.jpg';

export const Testimonios = () => {
    return (
        <>
            <section className='max-w-[1500px] mx-auto my-14'>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Testimonios</h3>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>¿Qué Hicimos?</h3>
                        <div>
                            <p className='text-justify'>Dentro del ejercicio del área de comunicaciones la visibilidad generada entre las diferentes redes sociales que tiene la corporación, a su vez realizaron entrevista con la revista SEMANA, siendo esto un impacto positivo para la corporación.
                            </p>
                            <p className='text-justify'>
                                La corporación participó en una entrevista radial con una emisora: Bakana Stereo de Putumayo, invitando a conocer el programa y contenido de los audios y su disponibilidad en la región.
                            </p>
                        </div>
                    </div>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Semana} alt='Semana' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-18'>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Recaudacion2} alt='Semana' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Recaudación de bicicletas</h3>
                        <div>
                            <p className='text-justify'>Siete bicicletas fueron entregadas para los niños y niñas de la Fundación SEINCU en Palomino, gracias a las donaciones de amigos de la casa.</p>
                            <img src={Recaudacion1} alt='Semana' className='proposito-logo mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='max-w-[1500px] mx-auto my-14'>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Informe de gestión 2020 y 2021</h3>
                    <p>Con el protagonismo de los profesionales voluntarios y las poblaciones impactadas logramos realizar un video de impacto 2019 y 2020. Publicado en las redes sociales de la Corporación.</p>
                </div>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Informe} alt='Chat 1' className='proposito-logo mx-auto mt-16' />
                    </div>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={QR} alt='Chat 2' className='proposito-logo mx-auto' />
                        <a className='text-4xl pb-2 md:mb-2 text-[#7290C9] font-bold mx-5' href="bit.ly/3GY0voW">bit.ly/3GY0voW</a>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Consecución de recursos</h3>
                        <div>
                            <p className='text-justify'>La educación rural de Colombia necesita acciones urgentes para garantizar calidad en los proyectos de vida de miles de jóvenes, Enlazados busca aportar a la educación principalmente de Vichada creando audios educativos multiplicados por diferentes plataformas virtuales y físicas. Mi vida mi proyecto cambiar la trayectoria de vida de 14 niños y niñas indígenas.</p>
                            <p className='text-justify'>Hay que hacer que las cosas pasen, y sabemos que podemos hacer la diferencia.</p>
                        </div>
                    </div>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={Consecucion} alt='Consecucion Recursos' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-18'>
                    <div className='w-10/12 mx-auto mt-12 md:mt-0'>
                        <img src={AspectoJuridico} alt='Aspecto Juridico' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Aspecto Jurídico</h3>
                        <div>
                            <p className='text-justify'>En el cumplimiento de las disposiciones legales de acuerdo a la ley 603 de 2000
                                nos permitimos informar: que la Corporación Empatados se encuentra
                                registrada ante la cámara de comercio y su razón social es idéntica a sus servicios.
                                Que durante el 2020, no se presentaron hechos que ameriten su revelación.
                                Que de acuerdo con lo establecido en la ley 222 de 1995, copia de este informe será entregado oportunamente al contador para que emita el informe sobre la concordancia con los estados financieros.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}