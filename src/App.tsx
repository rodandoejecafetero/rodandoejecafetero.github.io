import './App.css'
import RodandoEjeCafetero from './components/RodandoEjeCafetero'
import TablaContenidos from './components/TablaContenidos'
import Creditos from './components/Creditos'
import LaPasionGabriel from './components/banners/LaPasionGabriel'
import Agradecimientos from './components/Agradecimientos'

function App() {
  return (
    <>
      <RodandoEjeCafetero />
      <Creditos />
      <TablaContenidos />
      <LaPasionGabriel />
      <Agradecimientos />
    </>
  )
}

export default App
