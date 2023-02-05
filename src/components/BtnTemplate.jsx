import React from 'react'
import { Link } from "react-router-dom";
import '../index.css'

export const BtnTemplate = ({ path, text }) => {
    return (
        <Link to={path}>
            <button className='btn btn-blue uppercase rounded'>
                {text}
            </button>
        </Link>
    )
}
