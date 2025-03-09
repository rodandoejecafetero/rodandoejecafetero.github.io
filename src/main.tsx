import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RodandoEjeCafetero from './components/RodandoEjeCafetero'
import Creditos from './components/Creditos'
import TablaContenidos from './components/TablaContenidos'
import LaPasionGabriel from './components/banners/LaPasionGabriel'
import Agradecimientos from './components/Agradecimientos'
import Prologo from './components/Prologo'
import Introduccion from './components/Introduccion'
import Playlist from './components/Playlist'
import RedirectTo404 from './components/RedirectTo404.tsx'

// path="/" + rodandoporeleje/"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portada" element={<RodandoEjeCafetero />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/tabla-de-contenido" element={<TablaContenidos />} />
        <Route path="/banner-la-pasion-de-gabriel" element={<LaPasionGabriel />} />
        <Route path="/agradecimientos" element={<Agradecimientos />} />
        <Route path="/prologo" element={<Prologo />} />
        <Route path="/introduccion" element={<Introduccion />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/destinos-silenciosos" element={<Playlist />} />
        <Route path="*" element={<RedirectTo404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
