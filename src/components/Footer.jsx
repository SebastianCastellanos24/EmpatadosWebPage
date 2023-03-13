import React from 'react'
import EmpatadosBlanco from '../assets/icons/EmpatadosLogoBlanco.svg';
import LogoBlanco from '../assets/icons/LogoBlancoCompleto.svg';
import Facebook from '../assets/icons/Facebook.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Correo from '../assets/icons/Correo.svg';
import WhatsApp from '../assets/icons/WhatsApp.svg';
import { Link } from "react-router-dom";
import Libro from '../assets/icons/libro.svg'

export const Footer = () => {
    return (
        <footer>
            <div className='w-[350px] md:w-[500px] lg:w-[700px] m-auto my-10'>
                <img src={Libro} alt='logo empatados'/>
            </div>
            <div className='w-full footer'>
                <div className='max-w-[1500px] mx-auto'>
                    <div className='max-w-lg mx-auto flex flex-col items-center'>
                        <Link to={"/"}>
                            <img src={LogoBlanco} alt='logo empatados' className='w-96 pt-12 pb-5 logo-empatados-footer'/>
                        </Link>
                        <Link to={"/empatate"}>
                            <img src={EmpatadosBlanco} alt='logo empatados' className='w-52 py-7'/>
                        </Link>
                    </div>

                    <div className='grid md:grid-cols-2'>
                        <div className='md:w-2/3 mx-auto flex flex-col justify-center gap-y-1'>
                            <p className='text-white font-bold uppercase text-lg'>Links de conocimiento público</p>
                            <Link to={"/documentospúblicosESAL"}>
                                <p className='text-white font-bold'>Documentos Públicos ESAL</p>
                            </Link>
                            <Link to={"/políticadetratamientoyusodedatos"}>
                                <p className='text-white font-bold'>Política de tratamiento y uso de datos</p>
                            </Link>
                        </div>
                        <div className='md:w-2/3 mx-auto flex flex-col items-end text-white font-bold py-10 gap-y-1'>
                            <a className='flex' href='https://www.facebook.com/empatados.org'>Empatados <img src={Facebook} alt="facebook logo" className='w-7 ml-2 mb-2'/></a>

                            <a className='flex' href='https://www.instagram.com/corp.empatados/?hl=es-la'>corp.empatados <img src={Instagram} alt="instagram logo" className='w-7 ml-2 mb-2'/></a>

                            <a className='flex' href='mailto:corporacion@empatados.org'>corporacion@empatados.org <img src={Correo} alt="logo correo" className='w-7 ml-2 mb-2'/></a>

                            <a className='flex' href='https://wa.me/3124222257?text=Cordial saludo, estoy interesado en la fundación y me gustaría recibir más información.'>+57 305 7319782 <img src={WhatsApp} alt="whats app logo" className='w-7 ml-2'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}
