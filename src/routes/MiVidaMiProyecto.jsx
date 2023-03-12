import React from 'react'
import Mivida from '../assets/icons/mividalogo.svg';
import Teoria from '../assets/img/teoria1.webp';
import Problema from '../assets/img/problema.webp';
import Problema2 from '../assets/img/problema2.webp';
import Problema3 from '../assets/img/problema3.webp';
import Formacion from '../assets/icons/formacion.svg';
import Formacion2 from '../assets/icons/formacion2.svg';
import Formacion3 from '../assets/icons/formacion3.svg';

import { useTranslation } from 'react-i18next'

export const MiVidaMiProyecto = () => {
    const [ t, i18n ] = useTranslation("mivida");

    return (
        <>
            <header className='header-bg-mivida header-plantilla'></header>

            <section>
                <div className='flex flex-col justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mt-5 md:mt-0 mx-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold mx-5'>{t("header.header-title")}</h3>
                        <p className='text-justify'>{t("header.header-text")}</p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Mivida} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Teoria} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold mx-5'>{t("theory.theory-title")}</h3>
                        <p className='text-justify'>{t("theory.theory-text")}</p>
                        <br></br>
                        <p className='text-justify'>{t("theory.theory-ref")}</p>
                        <br></br>
                        <ul className="list-disc list-inside ml-10">
                            <li className="">{t("theory.theory-ref-1")}</li>
                            <li className="">{t("theory.theory-ref-2")}</li>
                            <li className="">{t("theory.theory-ref-3")}</li>
                            <li className="">{t("theory.theory-ref-4")}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold mx-5'>{t("problem.problem-title")}</h3>
                        <p className='text-justify'>{t("problem.problem-text-1")}
                        </p>
                        <br></br>
                        <p className='text-justify'>{t("problem.problem-text-2")}</p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Problema} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Problema2} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-11/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold mx-5'>{t("problem.problem-title")}</h3>
                        <ul className="list-disc list-inside ml-10">
                            <li className="">{t("problem.problem-text-3")}</li>
                            <li className="">{t("problem.problem-text-4")}</li>
                            <li className="">{t("problem.problem-text-5")}</li>
                            <li className="">{t("problem.problem-text-6")}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold mx-5'>{t("objective.objective-title")}</h3>
                        <p className='text-justify'>{t("objective.objective-text")}
                        </p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Problema3} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <h3 className='text-5xl pb-2 text-[#7290C9] font-bold text-center my-5'>{t("done.done-title")}</h3>
                <div className='flex flex-col-reverse justify-center items-center mb-12 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Formacion} alt='Fromacion' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-11/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold mx-5'>{t("done.done-sub-title1")}</h3>
                        <p>{t("done.done-sub-title1-text")}</p>
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] mx-auto my-14'>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold mx-5'>{t("done.done-sub-title2")}</h3>
                </div>
                <div className='w-10/12 mx-auto my-auto md:px-10 mt-10'>
                    <p>{t("done.done-sub-title2-text")}</p>
                </div>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Formacion2} alt='Formacion 2' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Formacion3} alt='Fromacion 3' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
        </>
    )
}
