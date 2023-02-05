import React from 'react'
import { useState } from 'react';
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Slider = () => {
    const slides = [
        {
            url: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/151811594_445598733533891_4624045612502362350_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=f9PWD5KJtBEAX--5xWD&_nc_ht=scontent-bog1-1.xx&oh=00_AfARDpT1bIJ8jtZXDpkHRw4IIoX295rRyt-Ilv8Dq_lHDQ&oe=63F5664B"
        },
        {
            url: "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/309754559_826794078747686_8104671464553676089_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4fbAJAjOiykAX9pDshw&_nc_ht=scontent-bog1-1.xx&oh=00_AfAAEldI27J6zr-Qa8XzU8tN956VpnXpCe7tljI3XptEVw&oe=63D3057A"
        },
        {
            url: "https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/150911050_445690153524749_7593416775605084103_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zLh28DY8p-kAX8L2IdI&tn=i2XYH9Fh2UFqV8am&_nc_ht=scontent-bog1-1.xx&oh=00_AfDRh5oLlcJ16EPyjpM20ip_1C1--arg39JB2aV7hnB21Q&oe=63F54224"
        },
        {
            url: "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/279292682_716469099780185_8644142573667574251_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cfHjitDOOCEAX9Z4mxB&_nc_ht=scontent-bog1-1.xx&oh=00_AfDHWifR0tYmEzbi-KlAvqkkrdgSpMVGZlV_mBvAff9f2A&oe=63D264C9"
        },
        {
            url: "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/251662606_615035729923523_3601964847402187445_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=S-Ok6RlVnREAX-WBkOm&_nc_ht=scontent-bog1-1.xx&oh=00_AfAsac-YvUuR_oUPYqrJcXas49wPYmQ_KasZMLzTybdLYQ&oe=63D27614"
        },
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
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative group'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
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
