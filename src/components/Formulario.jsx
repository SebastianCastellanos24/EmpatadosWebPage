import React, {useState} from 'react'
import { BiMailSend } from "react-icons/bi";
import WhatsApp from '../assets/img/WhatsApp.png';
import { Formik, Form } from 'formik';
import ColombiaBandera from '../assets/icons/colombia.png';
import UKBandera from '../assets/icons/uk.png';
import MexicoBandera from '../assets/icons/mexico.png';
import CanadaBandera from '../assets/icons/canada.png';
import UsaBandera from '../assets/icons/usa.png';

export const Formulario = () => {

    const [ formularioEnviado, setFormularioEnviado ] = useState(false);

    return (
        <div className="w-10/12 md:w-4/5 m-auto mt-12 md:mt-18 max-w-[1200px] mx-auto">
            <div className='mb-12'>
                <h2 className="text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold">Contáctanos</h2>
            </div>

            <div className="w-full md:w-4/5 m-auto bg-[#7290C9] mb-6 shadow-lg">
                <a className='flex p-3 text-white font-bold justify-between text-xl hover:bg-white hover:text-[#7290C9]' href='https://wa.me/3124222257?text=Cordial saludo, estoy interesado en la fundación y me gustaría recibir más información.'>Escribenos a nuesto Whatsapp<img src={WhatsApp} alt="whats app logo" className='w-8 h-8 my-auto'/></a>
            </div>

            <Formik
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    setFormularioEnviado(true);
                    setTimeout(function () {
                        window.location.reload()
                    }, 2000);
                }}
                validate={(valores) => {
                    let errores = {};
                    
                    //Validar nombre
                    if(!valores.nombre) {
                        errores.nombre = "Porfavor ingresa un nombre."
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = "El nombre solo puede contener letras y espacios."
                    }

                    //Validar correo
                    if(!valores.correo) {
                        errores.correo = "Porfavor ingresa un correo."
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = "Ingrese porfavor un formato de correo valido."
                    }

                    //Validar celular
                    if(!valores.celular) {
                        errores.celular = "Porfavor ingresa un numero de celular."
                    } else if (!/^(\+57[ ]\d{10}|\+44[ ]\d{10}|\+1[ ]\d{10}|\+1[ ]\d{3}[ ]\d{7})$/.test(valores.celular)) {
                        errores.celular = "Ingrese porfavor tu celular en el formato adecuado."
                    }

                    if(!valores.textarea) {
                        errores.textarea = "Porfavor ingresa un tu mensaje."
                    }

                    return errores;
                }}
                initialValues={{
                    nombre: "",
                    correo: "",
                    celular: "",
                    textarea: ""
                }}
            >
                {( {handleSubmit, values, handleChange, handleBlur, errors, touched}) => (
                    <Form className="w-full md:w-4/5 m-auto rounded" onSubmit={handleSubmit}>
                        <h3 className="block text-xl font-bold text-[#7290C9]">O escribenos un mail:</h3>
                        <div className="my-5">
                            <label className="block text-xl font-bold text-[#7290C9]" label for="nombre">Nombre:</label>
                            <input 
                                className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" 
                                type="text" 
                                placeholder="Digita aquí tu nombre completo…"
                                id="nombre"
                                name='nombre'
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                {touched.nombre && errors.nombre && <div className='text-md text-red-600 font-bold mt-2 ml-2'>{errors.nombre}</div>}
                        </div>
                        <div className="my-5 flex justify-center gap-x-4 flex-wrap md:flex-nowrap">
                            <div className="w-full my-1 md:my-0">
                                <label className="block text-xl font-bold text-[#7290C9]" label for="correo">Correo electrónico:</label>
                                <input 
                                    className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" 
                                    type="email" 
                                    placeholder="Digita aquí tu correo electrónico…"
                                    id="correo"
                                    name='correo' 
                                    value={values.correo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                    {touched.correo && errors.correo && <div className='text-md text-red-600 font-bold mt-2 ml-2'>{errors.correo}</div>}
                            </div>
                            <div className="w-full my-1 md:my-0">
                                <label className="block text-xl font-bold text-[#7290C9]" label for="celular">Número de celular:</label>
                                <input 
                                    className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" 
                                    type="phone"  
                                    placeholder="Digita aquí tu número de celular…"
                                    id="celular"
                                    name='celular'
                                    value={values.celular}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                    {touched.celular && errors.celular && <div className='text-md text-red-600 font-bold mt-2 ml-2'>{errors.celular}</div>}
                            </div>
                        </div>
                        <div>
                            <p className='text-[#7290C9]'>El formato adecuado para números de celular es: <span className='font-bold'>+ (El indicativo de tu país) + (espacio) + (número de celular), </span>ejemplo: <span className='underline'>+57 3057319782.</span></p>
                            <p className='text-[#7290C9] mt-3'>Si te ubicas en <img className='w-[25px] inline-block' src={ColombiaBandera} alt="bandera de colombia"/> <span className='font-bold'>Colombia tu indicativo es +57</span></p>
                            <p className='text-[#7290C9]'>Si te ubicas en <img className='w-[25px] inline-block' src={UKBandera} alt="bandera de uk"/> <span className='font-bold'>Reino Unido tu indicativo es +44</span></p>
                            <p className='text-[#7290C9]'>Si te ubicas en <img className='w-[25px] inline-block' src={MexicoBandera} alt="bandera de mexico"/> <span className='font-bold'>Mexico tu indicativo es +52</span></p>
                            <p className='text-[#7290C9]'>Si te ubicas en <img className='w-[25px] inline-block' src={CanadaBandera} alt="bandera de canada"/> <span className='font-bold'>Canadá o <img className='w-[25px] inline-block' src={UsaBandera} alt="bandera de estados unidos"/> <span className='font-bold'> Estados Unidos</span> tu indicativo es +1 seguido de un espacio y el código de tu ciudad.</span></p>
                        </div>
                        <div className="my-5">
                            <label className="block text-xl font-bold text-[#7290C9]" label for="textarea">Mensaje:</label>
                            <textarea 
                                className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" 
                                rows="10" cols="20"
                                id='textarea'
                                name='textarea'
                                value={values.textarea}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                                {touched.textarea && errors.textarea && <div className='text-md text-red-600 font-bold mt-2 ml-2'>{errors.textarea}</div>}
                        </div>
                        <div className="flex justify-center mt-12 lg:justify-end mb-20">
                            <div className="bg-[#7290C9] text-[#F5F9FF] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex min-w-max hover:text-[#7290C9] hover:bg-[#F5F9FF] ease-in shadow-lg">
                                <BiMailSend className="min-w-max mr-1"/>
                                <button type='submit'>Enviar email</button>
                                {formularioEnviado && 
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Mensaje enviado con éxito',
                                        showConfirmButton: false,
                                        timer: 2000
                                    })
                                }
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
