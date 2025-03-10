import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RedirectTo404 from './components/common/RedirectTo404.tsx'
import { HelmetProvider } from 'react-helmet-async'
import TagsLayout from './layouts/TagsLayout.tsx'

import routesJson from './routes.json';
import { RouteFromJson, RouteInterface } from './interfaces/RouteInterface.ts'
import { BaseLayoutProps } from './interfaces/LayoutInterface.ts'
import React from 'react'
import BackButton from './components/common/BackButton.tsx'
import NotFound from './components/common/NotFound.tsx'
import BannerLayout from './layouts/BannerLayout.tsx'
import CenterImageLayout from './layouts/CenterImageLayout.tsx'
import TwoColumnLayout from './layouts/TwoColumnLayout.tsx'

const Portada = lazy(() => import('./components/pages/Portada.tsx'));
const Creditos = lazy(() => import('./components/pages/Creditos.tsx'));
const TablaContenidos = lazy(() => import('./components/pages/TablaContenidos.tsx'));
const LaPasionGabriel = lazy(() => import('./components/pages/LaPasionGabriel.tsx'));
const Agradecimientos = lazy(() => import('./components/pages/Agradecimientos.tsx'));
const Prologo = lazy(() => import('./components/pages/Prologo.tsx'));
const Introduccion = lazy(() => import('./components/pages/Introduccion.tsx'));
const Playlist = lazy(() => import('./components/pages/Playlist.tsx'));

const componentMap: { [key: string]: React.ReactElement<BaseLayoutProps> } = {
  Portada: <Portada />,
  Creditos: <Creditos />,
  TablaContenidos: <TablaContenidos />,
  LaPasionGabriel: <LaPasionGabriel />,
  Agradecimientos: <Agradecimientos />,
  Prologo: <Prologo />,
  Introduccion: <Introduccion />,
  Playlist: <Playlist />,
  BannerLayout: <BannerLayout />,
  CenterImageLayout: <CenterImageLayout />,
  TwoColumnLayout: <TwoColumnLayout />,
};

// Mapear el JSON a un array de RouteInterface. Si el componente no existe se utiliza RedirectTo404.
const routes: RouteInterface[] = (routesJson as RouteFromJson[]).map((route: RouteFromJson) => {
  let element = <NotFound name={route.name} />;
  try {
    element = React.cloneElement(
      componentMap[route.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
      { route: route, }
    );
  } catch (error) {
    console.error(`Error al cargar el componente ${route.component}: ${error}`);
  }
  return {
    data: route,
    element: element,
  };
});

// path="/" + rodandoporeleje/"
const basePath = import.meta.env.VITE_BASE_PATH;
console.log('basePath:', basePath);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={basePath} element={<App routes={routes} />} />
          {routes.map((route, index) => (
            <Route key={index} path={`${basePath}${route.data.name}`} element={
              <Suspense fallback={<Portada />}>
                <TagsLayout route={route.data}><BackButton section={route.data.name} />{route.element}</TagsLayout>
              </Suspense>} />
          ))}
          <Route path="*" element={<RedirectTo404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
