import React, { useCallback, useRef, useState } from 'react';
import { ListOnScrollProps, FixedSizeList } from 'react-window';
import { RouteFromJson, RouteInterface } from './interfaces/RouteInterface';
import TagsLayout from './layouts/TagsLayout';

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
  const listRef = useRef<FixedSizeList>(null);
  // Guarda en este objeto las alturas de cada fila (índice: alto)
  const rowHeights = useRef<{ [key: number]: number }>({});
  
  // Estado para indicar que ya se mostro la tabla de contenidos
  const [showTableOfContents, setShowTableOfContents] = useState(false);

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

  return (
    <TagsLayout route={{ name: 'app', title: 'App - Rodando por el eje cafetero' } as RouteFromJson}>
      {showTableOfContents && <a className="fixed z-20 p-2 rounded-lg cursor-pointer top-2 right-5 bg-white/50 hover:scale-105" href='#tabla-de-contenido'>Volver</a>}
      <FixedSizeList
        height={height} // Altura del contenedor de la lista
        width={width} // Ancho de la lista
        itemCount={routes.length}
        itemSize={height}
        ref={listRef}
        onScroll={onScroll}
        style={{ overflowX: 'hidden' }}
      >
        {Row}
      </FixedSizeList>
    </TagsLayout>
  );
}

export default App;