import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from './traducciones/Español/home.json';
import global_en from './traducciones/Inglés/home.json';

import navbar_es from './traducciones/Español/navbar.json';
import navbar_en from './traducciones/Inglés/navbar.json';

import aboutUs_es from './traducciones/Español/aboutUs.json';
import aboutUs_en from './traducciones/Inglés/aboutUs.json';

import empatate_es from './traducciones/Español/empatate.json';
import empatate_en from './traducciones/Inglés/empatate.json';

import proyectos_es from './traducciones/Español/proyectos.json';
import proyectos_en from './traducciones/Inglés/proyectos.json';

import testimonios_es from './traducciones/Español/testimonios.json';
import testimonios_en from './traducciones/Inglés/testimonios.json';

import enlazados_es from './traducciones/Español/enlazados.json';
import enlazados_en from './traducciones/Inglés/enlazados.json';

import mivida_es from './traducciones/Español/mivida.json';
import mivida_en from './traducciones/Inglés/mivida.json';


i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      home: global_es,
      navbar: navbar_es,
      aboutUs: aboutUs_es,
      empatate: empatate_es,
      proyectos: proyectos_es,
      testimonios: testimonios_es,
      enlazados: enlazados_es,
      mivida: mivida_es,
    },
    en: {
      home: global_en,
      navbar: navbar_en,
      aboutUs: aboutUs_en,
      empatate: empatate_en,
      proyectos: proyectos_en,
      testimonios: testimonios_en,
      enlazados: enlazados_en,
      mivida: mivida_en,
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
)
