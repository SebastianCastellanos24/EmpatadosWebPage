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

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      home: global_es,
      navbar: navbar_es,
      aboutUs: aboutUs_es,
      empatate: empatate_es
    },
    en: {
      home: global_en,
      navbar: navbar_en,
      aboutUs: aboutUs_en,
      empatate: empatate_en
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
