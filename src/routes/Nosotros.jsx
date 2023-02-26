import React from 'react'
import Proposito from '../assets/icons/proposito.svg';
import Nosotos from '../assets/img/nosotros.webp'
import Nosotos02 from '../assets/img/nosotros02.webp'
import { Card } from '../components/Card';
import { BtnLinkTemplate } from '../components/BtnLinkTemplate';
import Dona from '../assets/img/dona.webp';
import { VolunteerCard } from '../components/VolunteerCard';
import Voluntariado from '../assets/img/voluntariado.webp'
import Agradecimiento from '../assets/img/Agradecimiento.webp';

import { useTranslation } from 'react-i18next'

import Equipo1 from '../assets/icons/Equipo01.svg';
import Equipo2 from '../assets/icons/Equipo02.svg';
import Equipo3 from '../assets/icons/Equipo03.svg';
import Equipo4 from '../assets/icons/Equipo04.svg';

import Voluntario01 from '../assets/icons/Voluntario01.svg';
import Voluntario02 from '../assets/icons/Voluntario02.svg';
import Voluntario03 from '../assets/icons/Voluntario03.svg';
import Voluntario04 from '../assets/icons/Voluntario04.svg';
import Voluntario05 from '../assets/icons/Voluntario05.svg';
import Voluntario06 from '../assets/icons/Voluntario06.svg';
import Voluntario07 from '../assets/icons/Voluntario07.svg';
import Voluntario08 from '../assets/icons/Voluntario08.svg';
import Voluntario09 from '../assets/icons/Voluntario09.svg';
import Voluntario10 from '../assets/icons/Voluntario10.svg';
import Voluntario11 from '../assets/icons/Voluntario11.svg';
import Voluntario12 from '../assets/icons/Voluntario12.svg';
import Voluntario13 from '../assets/icons/Voluntario13.svg';
import Voluntario14 from '../assets/icons/Voluntario14.svg';
import Voluntario15 from '../assets/icons/Voluntario15.svg';
import Voluntario16 from '../assets/icons/Voluntario16.svg';
import Voluntario17 from '../assets/icons/Voluntario17.svg';

export const Nosotros = () => {
    const [ t, i18n ] = useTranslation("aboutUs");

    return (
        <>  
            <header>
                <img src={Nosotos} alt='logo empatados' className='w-full max-h-[900px]'/>
            </header>

            <div className='max-w-[1200px] mx-auto px-5 lg:px-0 mt-12 lg:mt-16'>
                <h1 className='nosotros uppercase text-4xl font-bold text-[#7290C9] mt-4 mb-8 text-center'>{t("title.title-title")}</h1> 
            </div>

            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-3xl lg:text-5xl font-bold text-[#7290C9] mb-8 mt-5 md:mt-0 slogan'>{t("about.about-title")}</h3>
                        <p className='text-justify'>{t("about.about-description")}</p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>   
                        <img src={Proposito} alt='proposito empatados' className='proposito-logo mx-auto '/>
                    </div>
                </div>
            </section>

            <section>
                <img src={Nosotos02} alt='logo empatados' className='w-full mb-10 max-h-[900px]'/>
            </section>

            <section className='max-w-[1500px] mx-auto my-16'>
            <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-8 text-[#7290C9] font-bold mx-5'>{t("team.team-title")}</h3>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Card
                        img = {Equipo1}
                        equipo = "Jenny Grillo"
                        cargo = {t("team.team-occupation-1")}
                        correo = "jenny.grillo@empatados.org"
                    />
                    <Card
                        img = {Equipo2}
                        equipo = "Myriam Valderrama"
                        cargo = {t("team.team-occupation-2")}
                        correo = "myriam.valderrama@empatados.org"
                    />
                    <Card
                        img = {Equipo3}
                        equipo = "Sharon Grillo"
                        cargo = {t("team.team-occupation-3")}
                        correo = "sharon.grillo@empatados.org"
                    />
                    <Card
                        img = {Equipo4}
                        equipo = "Johana Zapata"
                        cargo = {t("team.team-occupation-4")}
                        correo = "desarollo@empatados.org"
                    />
                </div>
            </section>

            <section className='max-w-[1200px] mx-auto flex flex-col items-center gap-y-8 md:flex-row md:justify-evenly my-12'>
                <div>
                    <BtnLinkTemplate
                        text = {t("btn.btn-btn-1")}
                        link = "https://www.facebook.com/empatados.org/photos"
                        img = {Dona}
                        alt = "imagen para donar"
                    />
                </div>
                <div>
                    <BtnLinkTemplate
                        text = {t("btn.btn-btn-2")}
                        link = "https://www.facebook.com/empatados.org/photos"
                        img = {Dona}
                        alt = "imagen para donar"
                    />
                </div>
                <div>
                    <BtnLinkTemplate
                        text = {t("btn.btn-btn-3")}
                        link = "https://www.facebook.com/empatados.org/photos"
                        img = {Dona}
                        alt = "imagen para donar"
                    />
                </div>
            </section>

            <section className='md:mt-20 '>
                <img src={Voluntariado} alt='logo empatados' className='w-full max-h-[900px]'/>
            </section>

            <section className='max-w-[1500px] mx-auto my-14'>
            <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-8 text-[#7290C9] font-bold mx-5'>{t("volunteering.volunteering-title")}</h3>
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
                <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>{t("gratitude.gratitude-title")}</h3>
                <div className='pt-8 flex flex-col md:flex-row'>
                    <img src={Agradecimiento} alt='directora general empatados' className='md:w-1/2 max-h lg:h-[750px]'/>
                    <div className='my-auto md:w-1/2 py-8 md:py-8'>
                        <p className='px-8 text-justify'>{t("gratitude.gratitude-description-1")}</p>
                        <p className='px-8 pt-4 text-justify'>{t("gratitude.gratitude-description-2")}</p>
                        <p className='px-8 pt-4 text-justify'>{t("gratitude.gratitude-description-3")}</p>
                        <p className='px-8 pt-4 text-justify'>{t("gratitude.gratitude-description-4")}</p>
                        <p className='px-8 pt-4 text-justify underline text-[#7290C9] text-lg'>{t("gratitude.gratitude-description-5")}<span className='block font-bold'>{t("gratitude.gratitude-description-6")}</span></p>
                    </div>
                </div>
            </section>

        </>
    )
}