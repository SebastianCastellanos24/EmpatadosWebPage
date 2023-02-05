import React from 'react'
import Proposito from '../assets/img/proposito.png';
import Nosotos from '../assets/img/nosotros.jpg'
import Nosotos02 from '../assets/img/nosotros02.jpg'
import { Card } from '../components/Card';
import { BtnLinkTemplate } from '../components/BtnLinkTemplate';
import Dona from '../assets/img/dona.png';
import { VolunteerCard } from '../components/VolunteerCard';
import Voluntariado from '../assets/img/voluntariado.jpg'

import Equipo1 from '../assets/img/Equipo01.png';
import Equipo2 from '../assets/img/Equipo02.png';
import Equipo3 from '../assets/img/Equipo03.png';
import Equipo4 from '../assets/img/Equipo04.png';

import Voluntario01 from '../assets/img/Voluntario01.png';
import Voluntario02 from '../assets/img/Voluntario02.png';
import Voluntario03 from '../assets/img/Voluntario03.png';
import Voluntario04 from '../assets/img/Voluntario04.png';
import Voluntario05 from '../assets/img/Voluntario05.png';
import Voluntario06 from '../assets/img/Voluntario06.png';
import Voluntario07 from '../assets/img/Voluntario07.png';
import Voluntario08 from '../assets/img/Voluntario08.png';
import Voluntario09 from '../assets/img/Voluntario09.png';
import Voluntario10 from '../assets/img/Voluntario10.png';
import Voluntario11 from '../assets/img/Voluntario11.png';
import Voluntario12 from '../assets/img/Voluntario12.png';
import Voluntario13 from '../assets/img/Voluntario13.png';
import Voluntario14 from '../assets/img/Voluntario14.png';
import Voluntario15 from '../assets/img/Voluntario15.png';
import Voluntario16 from '../assets/img/Voluntario16.png';
import Voluntario17 from '../assets/img/Voluntario17.png';

import Agradecimiento from '../assets/img/Agradecimiento.jpg';

export const Nosotros = () => {
    return (
        <>  
            <header>
                <img src={Nosotos} alt='logo empatados' className='w-full max-h'/>
            </header>

            <div className='max-w-[1200px] mx-auto px-5 lg:px-0 mt-12 lg:mt-16'>
                <h1 className='nosotros uppercase text-4xl font-bold text-[#7290C9] mt-4 mb-8 text-center'>¡Nacimos para hacer la diferencia!</h1> 
            </div>

            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-3xl lg:text-5xl font-bold text-[#7290C9] mb-8 mt-5 md:mt-0 slogan'>¿Quiénes somos?</h3>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corporis tempore, doloribus deleniti distinctio ducimus itaque accusamus eum aliquid excepturi laudantium doloremque architecto pariatur reiciendis dicta quia ratione nobis magnam.</p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>   
                        <img src={Proposito} alt='proposito empatados' className='proposito-logo mx-auto'/>
                    </div>
                </div>
            </section>

            <section>
                <img src={Nosotos02} alt='logo empatados' className='w-full max-h mb-10'/>
            </section>

            <section className='max-w-[1500px] mx-auto my-16'>
            <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-8 text-[#7290C9] font-bold mx-5'>Nuestro Equipo</h3>
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

            <section className='md:mt-20'>
                <img src={Voluntariado} alt='logo empatados' className='w-full max-h'/>
            </section>

            <section className='max-w-[1500px] mx-auto my-14'>
            <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-8 text-[#7290C9] font-bold mx-5'>Equipo de Voluntarios</h3>
                <div className='grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                    <VolunteerCard img = {Voluntario01} nombre = "ROSSY CHAPUEL"/>
                    <VolunteerCard img = {Voluntario02} nombre = "ANTHONY CARMONA"/>
                    <VolunteerCard img = {Voluntario03} nombre = "ANGÉLICA SEPULVEDA"/>
                    <VolunteerCard img = {Voluntario04} nombre = "CLAUDIA SALCEDO"/>
                    <VolunteerCard img = {Voluntario05} nombre = "FERNANDO ORJUELA"/>
                    <VolunteerCard img = {Voluntario06} nombre = "DANIEL CORDOVA"/>
                    <VolunteerCard img = {Voluntario07} nombre = "FRANCISCO LONDOÑO"/>
                    <VolunteerCard img = {Voluntario08} nombre = "VICTOR GONZALEZ"/>
                    <VolunteerCard img = {Voluntario09} nombre = "ALEXANDER GOMEZ"/>
                    <VolunteerCard img = {Voluntario10} nombre = "MYRIAM VALDERRAMA"/>
                    <VolunteerCard img = {Voluntario11} nombre = "SHARON GRILLO"/>
                    <VolunteerCard img = {Voluntario12} nombre = "JENNY GRILLO"/>
                    <VolunteerCard img = {Voluntario13} nombre = "CESAR CUESTA"/>
                    <VolunteerCard img = {Voluntario14} nombre = "HUGO CUESTA"/>
                    <VolunteerCard img = {Voluntario15} nombre = "JEIDY DIAZ"/>
                    <VolunteerCard img = {Voluntario16} nombre = "BRIGITTE RODRIGUEZ"/>
                    <VolunteerCard img = {Voluntario17} nombre = "GERMAN AMESQUITA"/>
                </div>
            </section>

            <section className='max-w-[1500px] mx-auto my-14'>
                <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Agradecimiento de la directora ejecutiva</h3>
                <div className='pt-8 flex flex-col md:flex-row'>
                    <img src={Agradecimiento} alt='directora general empatados' className='md:w-1/2 max-h lg:h-[750px]'/>
                    <div className='my-auto md:w-1/2 py-8 md:py-8'>
                        <p className='px-8 text-justify'>La Corporación Empatados es una organización sin ánimo de lucro que nació en Pandemia, con el ideal de hacer la diferencia en la educación de Colombia, durante el 2020 con el apoyo de integrantes de la familia y voluntarios logramos crear un proyecto que impactó a más de 20.000 estudiantes, profesores y familias en modalidad virtual. Logramos registrarlo en el 2021 ante la Cámara y Comercio de Bogotá y seguimos trabajando para que más niños y niñas recibieran educación de calidad.</p>
                        <p className='px-8 pt-4 text-justify'>Creamos un nuevo proyecto, fortalecimos el contenido educativo y logramos hacer alianzas con otras organizaciones que al igual que nosotros creen en el poder de la educación para transformar vidas. Todo esto lo hemos logrado con pequeñas donaciones de los mismos integrantes del equipo.</p>
                        <p className='px-8 pt-4 text-justify'>Para el 2022 queremos seguir consolidando procesos, hacer alianzas y abrir puertas para pilotar un proyecto en la Guajira, Colombia. Vamos a pasos lentos pero forjando la raíz de una linda misión.</p>
                        <p className='px-8 pt-4 text-justify'>En cumplimiento de las disposiciones estatutarias, les presentamos los resultados en la gestión social, la situación administrativa, jurídica y financiera acompañada de los estados financieros correspondientes al ejercicio fiscal 2019 y demás anexos que ordena la ley.</p>
                        <p className='px-8 pt-4 text-justify underline text-[#7290C9] text-lg'>Cordialmente, <span className='block font-bold'>Jenny Grillo Naranjo</span></p>
                    </div>
                </div>
            </section>

        </>
    )
}