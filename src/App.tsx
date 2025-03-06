import './App.css'
import RodandoEjeCafetero from './components/RodandoEjeCafetero'
import TablaContenidos from './components/TablaContenidos'
import Creditos from './components/Creditos'
import LaPasionGabriel from './components/banners/LaPasionGabriel'
import Agradecimientos from './components/Agradecimientos'
import Prologo from './components/Prologo'

function App() {
  return (
    <>
      <RodandoEjeCafetero />
      <Creditos />
      <TablaContenidos />
      <LaPasionGabriel />
      <Agradecimientos />
      <Prologo />
    </>
  )
}

export default App
