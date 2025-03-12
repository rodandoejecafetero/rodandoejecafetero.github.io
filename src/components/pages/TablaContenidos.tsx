import LeftTopIconLayout from '../../layouts/LeftTopIconLayout';
import { DEFAULT_URL } from '../../Constant';
import BaseLayout from '../../layouts/BaseLayout';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

export default function TablaContenidos({route}: BaseLayoutProps) {
  const handleClick = (section: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: { section } }));
  };

  return (
    <LeftTopIconLayout id='tabla-de-contenido' color='green'>
      <BaseLayout route={route} />
      <div className="flex flex-col w-full h-full px-10 pt-24 pb-10 text-sm text-left text-purple">
        <div className='flex flex-wrap justify-between w-full'>
            <div>
                <h2 className="text-4xl font-bold uppercase sm:mt-32">TABLA DE CONTENIDO</h2>
            </div>
            <div className='mt-auto'>
                <img src={`${DEFAULT_URL}assets/logos/culturas/culturas-decorator-green.png`} alt="Decorator" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 md:grid-cols-3">
            <div className="w-full">
                <a href="#agradecimientos" className="font-semibold uppercase" onClick={(e) => handleClick('agradecimientos', e)}>AGRADECIMIENTOS</a>
                <hr className="my-4 border-purple" />
                <a href="#prologo" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>PRÓLOGO</a>
                <hr className="my-4 border-purple" />
                <a href="#introduccion" className="font-semibold uppercase" onClick={(e) => handleClick('introduccion', e)}>INTRODUCCIÓN</a>
                <hr className="my-4 border-purple" />
                <a href="#playlist" className="font-semibold uppercase" onClick={(e) => handleClick('playlist', e)}>ESCUCHA LA PLAYLIST</a>
                <hr className="my-4 border-purple" />
            </div>
            <div className="w-full">
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('destinos-silenciosos-memoria-paramo', e)}>1. DESTINOS SILENCIOSOS EN “MEMORIA” Y “EL PÁRAMO”</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('destinos-encanto', e)}>2. DESTINOS ANIMADOS EN “ENCANTO”</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>3. DESTINOS DE TELENOVEL A EN “CAFÉ CON AROMA DE MUJER 2021”, “L AS HERMANITAS CALLE” Y “DOÑA BELLA”</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>4. DESTINOS CAMPESINOS EN “LA PASIÓN DE GABRIEL”</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>5. DESTINOS DE AÑORANZA EN “CAFÉ CON AROMA DE MUJER 1994” Y “MILAGRO EN ROMA”</a>
                <hr className="my-4 border-purple" />
            </div>
            <div className="w-full">
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>ANEXO DE MAPAS</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>DIRECTORIO DE SERVICIOS TURÍSTICOS</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>GUÍAS DE TURISMO</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>EXPERIENCIAS TURÍSTICAS</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>SERVICIO DE HOSPEDAJE</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>SERVICIO GASTRÓNOMICO</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase" onClick={(e) => handleClick('prologo', e)}>REFERENCIAS</a>
                <hr className="my-4 border-purple" />
            </div>
        </div>
      </div>
    </LeftTopIconLayout>
  );
};
