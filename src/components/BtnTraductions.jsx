import React from 'react'
import { useTranslation } from 'react-i18next';
import ColombiaBandera from '../assets/icons/colombia.png';
import UKBandera from '../assets/icons/uk.png';
import FranciaBandera from '../assets/icons/france.png';

export const BtnTraductions = () => {
    const [t, i18n] = useTranslation("home")

    return (
        <div className='max-w-[1200px] mx-auto flex justify-center gap-x-5 gap-y-2 md:gap-y-5 flex-wrap text-[#7290C9] font-bold mb-4'>  
            <p className='uppercase'>Select your language:</p>
            <button className='uppercase hover:scale-110 hover:shadow-lg' onClick={() => i18n.changeLanguage("en")}><img className='w-[25px] inline-block mr-1' src={UKBandera} alt="bandera de uk"/>English</button>
            <button className='uppercase hover:scale-110 hover:shadow-lg' ><img className='w-[25px] inline-block mr-1' src={FranciaBandera} alt="bandera de francia"/>French</button>
            <button className='uppercase hover:scale-110 hover:shadow-lg' onClick={() => i18n.changeLanguage("es")}><img className='w-[25px] inline-block mr-1' src={ColombiaBandera} alt="bandera de colombia"/>Spanish</button>
        </div>
    )
}
