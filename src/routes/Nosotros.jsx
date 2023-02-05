import React from 'react'
import Proposito from '../assets/img/proposito.png';
import Nosotos from '../assets/img/nosotros.jpg'
import { Card } from '../components/Card';
import Equipo1 from '../assets/img/Equipo01.png';
import Equipo2 from '../assets/img/Equipo02.png';
import Equipo3 from '../assets/img/Equipo03.png';
import Equipo4 from '../assets/img/Equipo04.png';
import { BtnLinkTemplate } from '../components/BtnLinkTemplate';
import Dona from '../assets/img/dona.png';
import { VolunteerCard } from '../components/VolunteerCard';
import Voluntariado from '../assets/img/voluntariado.jpg'

export const Nosotros = () => {
    return (
        <>  
            <header>
                <img src={Nosotos} alt='logo empatados' className='w-full max-h'/>
            </header>

            <div className='max-w-[1200px] mx-auto px-5 lg:px-0 mt-10'>
                <h1 className='nosotros uppercase text-4xl font-bold text-[#7290C9] mt-4 mb-8 text-center'>¡Nacimos para hacer la diferencia!</h1> 
            </div>

            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-3xl lg:text-5xl font-bold text-[#7290C9] mb-8 mt-5 md:mt-0 slogan'>¿Quiénes somos?</h3>
                        <p className='text-xl description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta autem obcaecati pariatur velit commodi? Porro exercitationem animi quod fugit, nostrum praesentium molestiae quibusdam facere tempore fuga incidunt. Accusamus, porro provident!</p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>   
                        <img src={Proposito} alt='proposito empatados' className='proposito-logo mx-auto'/>
                    </div>
                </div>
                <img src={Nosotos} alt='logo empatados' className='w-full max-h'/>
            </section>

            <section className='max-w-[1500px] mx-auto my-16'>
                <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-14 text-[#7290C9] font-bold mx-5'>Nuestro Equipo</h3>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Card
                        img = {Equipo1}
                        equipo = "Jenny Grillo"
                        cargo = "Directora General"
                        correo = "jenny.grillo@empatados.org"
                    />
                    <Card
                        img = {Equipo2}
                        equipo = "Myriam Valderrama"
                        cargo = "Directora Incidencia Familiar y Educación"
                        correo = "myriam.valderrama@empatados.org"
                    />
                    <Card
                        img = {Equipo3}
                        equipo = "Sharon Grillo"
                        cargo = "Directora de Proyectos"
                        correo = "sharon.grillo@empatados.org"
                    />
                    <Card
                        img = {Equipo4}
                        equipo = "Johana Zapata"
                        cargo = "Head of Fundraising Directora Seincu"
                        correo = "desarollo@empatados.org"
                    />
                </div>
            </section>

            <section className='max-w-[1200px] mx-auto flex flex-col items-center gap-y-8 md:flex-row md:justify-evenly my-12'>
                <div>
                    <BtnLinkTemplate
                        text = "Ayudanos con una donación"
                        link = "https://www.facebook.com/empatados.org/photos"
                        img = {Dona}
                        alt = "imagen para donar"
                    />
                </div>
                <div>
                    <BtnLinkTemplate
                        text = "Se parte del voluntariado 2023"
                        link = "https://www.facebook.com/empatados.org/photos"
                        img = {Dona}
                        alt = "imagen para donar"
                    />
                </div>
                <div>
                    <BtnLinkTemplate
                        text = "Se parte del voluntariado 2023"
                        link = "https://www.facebook.com/empatados.org/photos"
                        img = {Dona}
                        alt = "imagen para donar"
                    />
                </div>
            </section>

            <section>
                <img src={Voluntariado} alt='logo empatados' className='w-full max-h'/>
            </section>

            <section className='max-w-[1500px] mx-auto my-16'>
                <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-14 text-[#7290C9] font-bold mx-5'>Equipo de Voluntarios</h3>
                <div className='grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                    <VolunteerCard
                        img = {Equipo1}
                        nombre = "Voluntario 1"
                    />
                    <VolunteerCard
                        img = {Equipo1}
                        nombre = "Voluntario 1"
                    />
                </div>
            </section>

        </>
    )
}