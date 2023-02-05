import {Navbar} from './routes/Navbar'
import { Routes, Route} from "react-router-dom";
import { Home } from './routes/Home';
import { Nosotros } from './routes/Nosotros';
import { Proyectos } from './routes/Proyectos';
import { Testimonios } from './routes/Testimonios';
import { Empatate } from './routes/Empatate';
import { Enlazados } from './routes/Enlazados';
import { MiVidaMiProyecto } from './routes/MiVidaMiProyecto';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
        <Route path="/testimonios" element={<Testimonios/>} />
        <Route path="/empatate" element={<Empatate/>} />
        <Route path="/enlazados" element={<Enlazados/>} />
        <Route path="/mividamiproyecto" element={<MiVidaMiProyecto/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
