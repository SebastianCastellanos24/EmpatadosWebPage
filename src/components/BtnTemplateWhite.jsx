import React from 'react'
import { Link } from "react-router-dom";
import '../index.css'

export const BtnTemplateWhite = ({ path, text }) => {
    return (
        <Link to={path}>
            <button className='btn btn-white uppercase rounded'>
                {text}
            </button>
        </Link>
    )
}

