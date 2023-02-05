import React from 'react'
import { Link } from "react-router-dom";
import '../index.css'

export const Button = () => {
    return (
        <Link to="/empatate">
            <button className='btn rounded-sm shadow-lg button btn-blue'>
                Empátate
            </button>
        </Link>
    )
}
