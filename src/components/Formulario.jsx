import React from 'react'
import { BiMailSend } from "react-icons/bi";
import WhatsApp from '../assets/img/WhatsApp.png';

export const Formulario = () => {
    return (
        <div className="w-10/12 md:w-4/5 m-auto mt-12 md:mt-18 max-w-[1200px] mx-auto">
            <div className='mb-12'>
                <h2 className="text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold">Contáctanos</h2>
            </div>

            <div className="w-full md:w-4/5 m-auto bg-[#7290C9] mb-12 shadow-lg">
                <a className='flex p-3 text-white font-bold justify-between text-lg hover:bg-white hover:text-[#7290C9]' href='https://wa.me/3124222257?text=Cordial saludo, estoy interesado en la fundación y me gustaría recibir más información.'>Escribenos a nuesto Whatsapp<img src={WhatsApp} alt="whats app logo" className='w-8'/></a>
            </div>

            <form className="w-full md:w-4/5 m-auto rounded">
                <div className="my-5">
                    <label className="block text-xl font-bold text-[#7290C9]" label for="name">Nombre:</label>
                    <input className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" type="text" id="name" placeholder="Introduce aquí tu nombre completo…"/>
                </div>
                <div className="my-5 flex justify-center gap-x-4 flex-wrap md:flex-nowrap">
                    <div className="w-full">
                        <label className="block text-xl font-bold text-[#7290C9]" label for="email">Correo electrónico:</label>
                        <input className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" type="email" id="email" placeholder="Introduce aquí tu correo electrónico…"/>
                    </div>
                    <div className="w-full">
                        <label className="block text-xl font-bold text-[#7290C9]" label for="phone">Número de celular:</label>
                        <input className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" type="phone" id="phone" placeholder="Introduce aquí tu número de celular…"/>
                    </div>
                </div>
                <div className="my-5">
                    <label className="block text-xl font-bold text-[#7290C9]" label for="name">Mensaje:</label>
                    <textarea className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" rows="10" cols="20"/>
                </div>
                <div className="flex justify-center mt-12 lg:justify-end mb-20">
                    <div className="bg-[#7290C9] text-[#F5F9FF] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex min-w-max hover:text-[#7290C9] hover:bg-[#F5F9FF] ease-in shadow-lg">
                        <BiMailSend className="min-w-max mr-1"/>
                        <a href="https://wa.me/qr/HTYEQBMZ6BUZD1">
                            Enviar correo electrónico
                        </a>
                    </div>
                </div>
            </form>

        </div>
    )
}
