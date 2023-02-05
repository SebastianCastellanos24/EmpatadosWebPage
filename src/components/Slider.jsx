import React from 'react'
import { useState } from 'react';
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Slider01 from '../assets/img/Slider01.jpg';
import Slider02 from '../assets/img/Slider02.jpg';
import Slider03 from '../assets/img/Slider03.jpg';
import Slider04 from '../assets/img/Slider04.jpg';
import Slider05 from '../assets/img/Slider05.jpg';
import Slider06 from '../assets/img/Slider06.jpg';
import Slider07 from '../assets/img/Slider07.jpg';

export const Slider = () => {
    const slides = [
        { url: Slider01 },{ url: Slider02 }, { url: Slider03 },{ url: Slider04 },{ url: Slider05 },{ url: Slider06 },{ url: Slider07},
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isFirstSlide = currentIndex === slides.length - 1;
        const newIndex = isFirstSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <>
            <div className='max-w-[1400px] h-[450px] md:h-[800px] lg:h-[1000px] w-full m-auto md:py-10 md:px-4 relative group'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded bg-center bg-cover duration-500">
                    {/* Flecha Izquierda */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={40} />
                    </div>
                    {/* Flecha Derecha */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={40} />
                    </div>
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                            <RxDotFilled className='text-[#7290C9]'/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
