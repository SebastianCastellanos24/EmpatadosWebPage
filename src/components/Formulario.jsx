import React, {useState} from 'react'
import { BiMailSend } from "react-icons/bi";
import WhatsApp from '../assets/icons/WhatsApp.svg';
import { Formik, Form } from 'formik';
import ColombiaBandera from '../assets/icons/colombia.svg';
import UKBandera from '../assets/icons/uk.svg';
import MexicoBandera from '../assets/icons/mexico.svg';
import CanadaBandera from '../assets/icons/canada.svg';
import UsaBandera from '../assets/icons/usa.svg';

import { useTranslation } from 'react-i18next'

export const Formulario = () => {
    const [ formularioEnviado, setFormularioEnviado ] = useState(false);
    const [ t, i18n ] = useTranslation("empatate");

    return (
        <div className="w-10/12 md:w-4/5 m-auto mt-12 md:mt-18 max-w-[1200px] mx-auto">
            <div className='mb-12'>
                <h2 className="text-4xl pb-2 border-b-2 border-[#7290C9] mb-5 text-[#7290C9] font-bold">{t("contact.contact-title")}</h2>
            </div>

            <div className="w-full md:w-4/5 m-auto bg-[#7290C9] mb-6 shadow-lg">
                <a className='flex p-3 text-white font-bold justify-between text-xl hover:bg-white hover:text-[#7290C9]' href={t("contact.contact-wp-message")}>{t("contact.contact-wp")}<img src={WhatsApp} alt="whats app logo" className='w-8 h-8 my-auto'/></a>
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
                        errores.nombre = `${t("contact.contact-name-mistake1")}`
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = `${t("contact.contact-name-mistake2")}`
                    }

                    //Validar correo
                    if(!valores.correo) {
                        errores.correo = `${t("contact.contact-email-mistake1")}`
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = `${t("contact.contact-email-mistake2")}`
                    }

                    //Validar celular
                    if(!valores.celular) {
                        errores.celular = `${t("contact.contact-phone-mistake1")}`
                    } else if (!/^(\+57[ ]\d{10}|\+44[ ]\d{10}|\+1[ ]\d{10}|\+1[ ]\d{3}[ ]\d{7})$/.test(valores.celular)) {
                        errores.celular = `${t("contact.contact-phone-mistake2")}`
                    }

                    if(!valores.textarea) {
                        errores.textarea = `${t("contact.contact-message-mistake")}`
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
                        <h3 className="block text-xl font-bold text-[#7290C9]">{t("contact.contact-option")}</h3>
                        <div className="my-5">
                            <label className="block text-xl font-bold text-[#7290C9]" label for="nombre">{t("contact.contact-name")}</label>
                            <input 
                                className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" 
                                type="text" 
                                placeholder={t("contact.contact-name-placeholder")}
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
                                <label className="block text-xl font-bold text-[#7290C9]" label for="correo">{t("contact.contact-email")}</label>
                                <input 
                                    className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" 
                                    type="email" 
                                    placeholder={t("contact.contact-email-placeholder")}
                                    id="correo"
                                    name='correo' 
                                    value={values.correo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                    {touched.correo && errors.correo && <div className='text-md text-red-600 font-bold mt-2 ml-2'>{errors.correo}</div>}
                            </div>
                            <div className="w-full my-1 md:my-0">
                                <label className="block text-xl font-bold text-[#7290C9]" label for="celular">{t("contact.contact-phone")}</label>
                                <input 
                                    className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#7290C9] font-semibold" 
                                    type="phone"  
                                    placeholder={t("contact.contact-phone-placeholder")}
                                    id="celular"
                                    name='celular'
                                    value={values.celular}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                    {touched.celular && errors.celular && <div className='text-md text-red-600 font-bold mt-2 ml-2'>{errors.celular}</div>}
                            </div>
                        </div>
                        <div>
                            <p className='text-[#7290C9]'>{t("contact.contact-phone-info-1")} <span className='font-bold'>{t("contact.contact-phone-info-2")}</span>{t("contact.contact-phone-info-3")}</p>
                            <p className='text-[#7290C9] mt-3'>{t("phone.phone-indicador")}<img className='w-[25px] inline-block' src={ColombiaBandera} alt="bandera de colombia"/> <span className='font-bold'>{t("phone.phone-indicadorCol")}</span></p>
                            <p className='text-[#7290C9]'>{t("phone.phone-indicador")} <img className='w-[25px] inline-block' src={UKBandera} alt="bandera de uk"/> <span className='font-bold'>{t("phone.phone-indicadorRU")}</span></p>
                            <p className='text-[#7290C9]'>{t("phone.phone-indicador")} <img className='w-[25px] inline-block' src={MexicoBandera} alt="bandera de mexico"/> <span className='font-bold'>{t("phone.phone-indicadorME")}</span></p>
                            <p className='text-[#7290C9]'>{t("phone.phone-indicador")} <img className='w-[25px] inline-block' src={CanadaBandera} alt="bandera de canada"/> <span className='font-bold'>{t("phone.phone-indicadorCaUsa-1")}</span> <img className='w-[25px] inline-block' src={UsaBandera} alt="bandera de estados unidos"/> <span className='font-bold'>{t("phone.phone-indicadorCaUsa-2")}</span></p>
                        </div>
                        <div className="my-5">
                            <label className="block text-xl font-bold text-[#7290C9]" label for="textarea">{t("contact.contact-message")}</label>
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
                                <button type='submit'>{t("contact.contact-submit")}</button>
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
