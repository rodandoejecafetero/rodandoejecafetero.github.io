import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ListOnScrollProps, VariableSizeList } from 'react-window';
import { RouteInterface } from './interfaces/RouteInterface';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

interface AppProps {
  routes: RouteInterface[];
}

function App({ routes }: AppProps) {
  const { height, width } = getWindowDimensions();
  // Referencia para la lista (usada para resetear los tamaños cuando se actualiza una medición)
  const listRef = useRef<VariableSizeList>(null);
  // Guarda en este objeto las alturas de cada fila (índice: alto)
  const rowHeights = useRef<{ [key: number]: number }>({});

  // Estado para indicar que ya se midieron los elementos
  const [measurementsCompleted, setMeasurementsCompleted] = useState(false);
  // Ref para el contenedor oculto
  const hiddenContainerRef = useRef<HTMLDivElement>(null);
  
  // Estado para indicar que ya se mostro la tabla de contenidos
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  // Función que obtiene el tamaño del item, utilizando la altura medida o un valor por defecto.
  const getItemSize = (index: number) => {
    return rowHeights.current[index] || 50; // 50 es el alto por defecto en px
  };

  // Componente Row. Utiliza un ref con useCallback para medir su altura.
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    // Callback para asignar el ref que medirá la altura
    const rowRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (node !== null) {
          const height = node.getBoundingClientRect().height;
          // Si la altura cambió, actualizamos y forzamos a VariableSizeList a recalcular a partir de este índice
          if (rowHeights.current[index] !== height) {
            rowHeights.current[index] = height;
            listRef.current?.resetAfterIndex(index);
          }
        }
      },
      [index]
    );

    return (
      <div style={style} ref={rowRef} className='relative'>
        {routes[index].element}
      </div>
    );
  };

  // Cada que el scroll cambia
  const onScroll = (e: ListOnScrollProps) => {
    if (e.scrollOffset > height * 3) {
      setShowTableOfContents(true);
    } else {
      setShowTableOfContents(false);
    }
  }

  // Efecto para medir cada componente renderizado en el contenedor oculto
  useEffect(() => {
    if (hiddenContainerRef.current) {
      routes.forEach((_, index) => {
        const el = hiddenContainerRef.current!.querySelector<HTMLElement>(`#measure-${index}`);
        if (el) {
          // Mide la altura y la guarda (o asigna 50 como valor por defecto)
          rowHeights.current[index] = el.getBoundingClientRect().height || 50;
        }
      });
      setMeasurementsCompleted(true);
    }
  }, [routes]);

  // Mientras no se completen las mediciones, renderizamos el contenedor oculto
  if (!measurementsCompleted) {
    return (
      <div
        ref={hiddenContainerRef}
        style={{ visibility: 'hidden', position: 'absolute', top: 0, left: 0 }}
      >
        {routes.map((route, index) => (
          <div key={index} id={`measure-${index}`}>
            {route.element}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='relative'>
      {showTableOfContents && <a className="fixed z-20 p-2 rounded-lg cursor-pointer top-2 right-5 bg-white/50 hover:scale-105" href='#tabla-de-contenido'>Volver</a>}
      <VariableSizeList
        height={height} // Altura del contenedor de la lista
        width={width} // Ancho de la lista
        itemCount={routes.length}
        itemSize={getItemSize}
        ref={listRef}
        onScroll={onScroll}
        style={{ overflowX: 'hidden' }}
      >
        {Row}
      </VariableSizeList>
    </div>
  );
}

export default App;