import React from 'react'
import { Link } from "react-router-dom";
import '../index.css';
import { useTranslation } from 'react-i18next';

export const Button = () => {
    const [ t, i18n ] = useTranslation("navbar");

    return (
        <Link to="/empatate">
            <button className='btn rounded-sm shadow-lg button btn-blue'>
                {t("navbar.navbar-title5")}
            </button>
        </Link>
    )
}
