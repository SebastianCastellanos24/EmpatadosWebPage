import React from 'react'
import Mivida from '../assets/img/mivida-miproyecto.jpg';
import Teoria from '../assets/img/teoria.png';
import Problema from '../assets/img/problema.png';
import Problema2 from '../assets/img/problema2.png';
import Problema3 from '../assets/img/problema3.png';
import Formacion from '../assets/img/formacion.png';
import Formacion2 from '../assets/img/formacion2.png';
import Formacion3 from '../assets/img/formacion3.png';

export const MiVidaMiProyecto = () => {
    return (
        <>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Mi vida, mi proyecto</h3>
                        <p className='text-justify'>Programa de formación experiencial en proyecto de vida para la infancia y la juventud; creemos que las competencias del Ser, Conocer, Reconocer y Saber Hacer son claves para el desarrollo individual y colectivo.</p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Mivida} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Teoria} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Teoría del cambio</h3>
                        <p className='text-justify'>Con esta estrategia queremos lograr la transformación e impacto en la vida de cada uno de los estudiantes. </p>
                        <br></br>
                        <p className='text-justify'>Referencias: </p>
                        <br></br>
                        <ul className="list-disc list-inside ml-10">
                            <li className="">Cristián Wolf - Heidegger Siglo XVII</li>
                            <li className="">Daniel Goleman "el intelecto no puede funcionar adecuadamente sin el concurso de la inteligencia emocional"</li>
                            <li className="">Bourdieu. Poder y violencia simbólica. Representación que asigna una identidad como hombre o como mujer con todas sus significaciones.</li>
                            <li className="">D'Angelo, 2002</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Teoria del problema</h3>
                        <p className='text-justify'>Mientras un 39,7% de la población de La Guajira no alcanza la alimentación óptima, 433 niños indígenas menores de cinco años están desnutridos y 17 menores Wayúu han fallecido durante 2021.
                        </p>
                        <br></br>
                        <p className='text-justify'>Palomino sufre con la crisis de derechos humanos, la pérdida de la identidad cultural, la falta de acceso a los servicios sociales, educación, formación profesional y laboral, la discriminación racial, entre otros.</p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Problema} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Problema2} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-11/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Teoria del problema</h3>
                        <ul className="list-disc list-inside ml-10">
                            <li className="">Durante el 2021 el promedio de deserción escolar fue de 3,6 teniendo la mayor deserción en estudiantes en edades entre 5 y 12 años.</li>
                            <li className="">La mayoría de los estudiantes se ubican en nivel 2 sobre 4 en el desempeño de las Pruebas Saber (prueba nacional).  </li>
                            <li className="">28 de cada 100 habitantes de La Guajira no sabe leer ni escribir.</li>
                            <li className="">Más de 50% de colegios no cuentan con electricidad y equipos de cómputo, y solo el 21% cuentan con acceso a internet. </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>La Meta</h3>
                        <p className='text-justify'>Los niños, niñas y jóvenes de Palomino tengan un planteamiento claro de su proyecto de vida, conozcan sus oportunidades, habilidades y necesidades.  Completen su ciclo escolar a través del acompañamiento de diferentes profesionales que tienen claridad del desarrollo integral de la población.
                        </p>
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Problema3} alt='Mi vida mi proyecto' className='proposito-logo mx-auto' />
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Formacion} alt='Fromacion' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-11/12 mx-auto my-auto md:px-10'>
                        <h3 className='text-4xl pb-2 text-[#7290C9] font-bold mx-5'>¿Qué hicimos?</h3>
                        <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Jornadas de formación en la Guajira</h3>
                        <p>Empatados comprometido con la infancia y la juventud, realizó voluntariamente encuentros presenciales en Palomino - En la Fundación SEINCU, fortaleciendo la población atendida allí de igual manera se brindó al colegio rural San Antonio de Palomino - Psicoeducación en Proyecto de Vida.</p>
                    </div>
                </div>
            </section>
            <section className='max-w-[1500px] mx-auto my-14'>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <h3 className='text-4xl pb-2 border-b-2 border-[#7290C9] md:mb-2 text-[#7290C9] font-bold mx-5'>Jornadas de formación en el colegio en La Guajira</h3>
                </div>
                <div className='flex flex-col-reverse justify-center mb-20 md:flex-row md:mb-10 max-w-[1200px] mx-auto md:mt-12'>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Formacion2} alt='Formacion 2' className='proposito-logo mx-auto' />
                    </div>
                    <div className='w-10/12 mx-auto mt-10 md:mt-0'>
                        <img src={Formacion3} alt='Fromacion 3' className='proposito-logo mx-auto' />
                    </div>
                </div>
                <div className='w-10/12 mx-auto my-auto md:px-10'>
                    <p>Ejecución de las actividades planteadas, donde se abordan temáticas en proyecto de vida, además se realiza cine club Palomino con los niños del colegio motivando a la reflexión crítica.</p>
                </div>
            </section>
        </>
    )
}
