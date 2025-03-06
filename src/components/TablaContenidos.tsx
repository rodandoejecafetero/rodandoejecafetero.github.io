import logo from '../assets/logos/culturas/culturas-green.png';
import decorator from '../assets/logos/culturas/culturas-decorator-green.png';
import LeftTopIconLayout from '../layouts/LeftTopIconLayout';

export default function TablaContenidos() {
  return (
    <LeftTopIconLayout id='tabla-contenidos' img={logo} color='green'>
      <div className="flex flex-col w-full h-full px-10 pt-24 pb-10 text-sm text-left text-purple">
        <div className='flex flex-wrap justify-between w-full'>
            <div>
                <h2 className="text-4xl font-bold uppercase sm:mt-32">TABLA DE CONTENIDO</h2>
            </div>
            <div className='mt-auto'>
                <img src={decorator} alt="Decorator" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 md:grid-cols-3">
            <div className="w-full">
                <a href="#agradecimientos" className="font-semibold uppercase">AGRADECIMIENTOS</a>
                <hr className="my-4 border-purple" />
                <a href="#prologo" className="font-semibold uppercase">PRÓLOGO</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">INTRODUCCIÓN</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">ESCUCHA LA PLAYLIST</a>
                <hr className="my-4 border-purple" />
            </div>
            <div className="w-full">
                <a href="#" className="font-semibold uppercase">1. DESTINOS SILENCIOSOS EN “MEMORIA” Y “EL PÁRAMO”</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">2. DESTINOS ANIMADOS EN “ENCANTO”</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">3. DESTINOS DE TELENOVEL A EN “CAFÉ CON AROMA DE MUJER 2021”, “L AS HERMANITAS CALLE” Y “DOÑA BELLA”</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">4. DESTINOS CAMPESINOS EN “LA PASIÓN DE GABRIEL”</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">5. DESTINOS DE AÑORANZA EN “CAFÉ CON AROMA DE MUJER 1994” Y “MILAGRO EN ROMA”</a>
                <hr className="my-4 border-purple" />
            </div>
            <div className="w-full">
                <a href="#" className="font-semibold uppercase">ANEXO DE MAPAS</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">DIRECTORIO DE SERVICIOS TURÍSTICOS</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">GUÍAS DE TURISMO</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">EXPERIENCIAS TURÍSTICAS</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">SERVICIO DE HOSPEDAJE</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">SERVICIO GASTRÓNOMICO</a>
                <hr className="my-4 border-purple" />
                <a href="#" className="font-semibold uppercase">REFERENCIAS</a>
                <hr className="my-4 border-purple" />
            </div>
        </div>
      </div>
    </LeftTopIconLayout>
  );
};
