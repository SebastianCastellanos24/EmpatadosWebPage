import React from 'react'
import FondoProyectos from '../assets/img/fondoproyectos.png'
import {BtnTemplate} from '../components/BtnTemplate';
import {BtnTemplateWhite} from '../components/BtnTemplateWhite';


export const Proyectos = () => {
    return (
        <>
            <header className='header'>
                <div className='gif bg-[#6F8DC4]'>
                    <img src={FondoProyectos} alt='Fondo Proyectos' className='w-full h-[350px] md:h-[500px] lg:h-[850px] opacity-[40%]' />
                </div>
                <div className='empatados-descripcion'>
                    <h2 className='text-5xl font-bold text-[#D2EBE9] mb-8 slogan'>PROYECTOS:</h2>
                    <p className='text-white font-bold w-full text-sm md:text-lg md:w-[80%] lg:text-xl lg:w-[60%]'>IGUALDAD - EQUIDAD - EDUCACIÓN</p>
                    <div className='w-1/2 flex justify-start mt-8 btn-home'>
                        <BtnTemplate
                            path="/enlazados"
                            text="Enlazados"
                        />
                        <BtnTemplateWhite
                            path="/mividamiproyecto"
                            text="Mi Vida Mi Proyecto"
                        />
                    </div>
                </div>
            </header>
        </>
    )
}