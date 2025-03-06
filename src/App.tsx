import './App.css'
import RodandoEjeCafetero from './components/RodandoEjeCafetero'
import TablaContenidos from './components/TablaContenidos'
import Creditos from './components/Creditos'
import LaPasionGabriel from './components/banners/LaPasionGabriel'
import Agradecimientos from './components/Agradecimientos'
import Prologo from './components/Prologo'
import Introduccion from './components/Introduccion'
import Playlist from './components/Playlist'

function App() {
  return (
    <>
      <RodandoEjeCafetero />
      <Creditos />
      <TablaContenidos />
      <LaPasionGabriel />
      <Agradecimientos />
      <Prologo />
      <Introduccion />
      <Playlist />
    </>
  )
}

export default App
