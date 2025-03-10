import { useEffect, useState, useRef } from 'react';
import TagsLayout from './layouts/TagsLayout';
import { RouteFromJson, RouteInterface } from './interfaces/RouteInterface';
import BackButton from './components/common/BackButton';

function App({ routes }: { routes: RouteInterface[] }) {
  // Estado para controlar cuántos componentes (rutas) se renderizarán inicialmente
  const [visibleCount, setVisibleCount] = useState<number>(3); // por ejemplo, 3 componentes
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  // Calcula la posición de la tabla de contenido al renderizar
  const [topContentTable, setTopContentTable] = useState<number>(0);

  useEffect(() => {
    // Calcula la posición de la tabla de contenido al renderizar
    const tablaElement = document.getElementById('tabla-de-contenido');
    const top = tablaElement 
      ? tablaElement.getBoundingClientRect().top + tablaElement.offsetHeight 
      : 0;
    setTopContentTable(top);

    // Listener para actualizar la posición de scroll en el estado
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para detectar el sentinel (último elemento) y cargar más rutas.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Si el sentinel es visible incrementamos el count
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 3, routes.length));
        }
      },
      { threshold: 0.2 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [routes]);

  const handleHash = () => {
    const { hash } = window.location;
    if (hash) {
      if (visibleCount < routes.length) {
        setVisibleCount(routes.length);
      }
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        console.log("element", element, element?.getBoundingClientRect().top, window.pageYOffset);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleSectionChange = (e: Event) => {
    e.preventDefault();
    const customEvent = e as CustomEvent<{ section: string }>;
    const { section } = customEvent.detail;
    if (visibleCount < routes.length) {
      setVisibleCount(routes.length);
    }
    setTimeout(() => {
      window.history.replaceState(null, '', `#${section}`);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    handleHash();
    window.addEventListener('sectionChange', handleSectionChange);
    return () => window.removeEventListener('sectionChange', handleSectionChange);
  }, []);

  return (
    <TagsLayout route={{ name: 'app', title: 'App - Rodando por el eje cafetero' } as RouteFromJson}>
      {scrollPosition > topContentTable && <BackButton />}
      {routes.slice(0, visibleCount).map((route, index) => (
          <div key={index}>{route.element}</div>
        ))}
      {routes.slice(visibleCount, routes.length).map((route, index) => (
          <div key={`hidden-${index}`} className='absolute top-0 opacity-0 -z-10'>{route.element}</div>
        ))}
      {visibleCount < routes.length && <div ref={sentinelRef} style={{ height: '1px' }} />}
    </TagsLayout>
  );
}

export default App;