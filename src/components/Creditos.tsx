import banner from '../assets/credits/banner.png';
import LeftImageLayout from '../layouts/LeftImageLayout';

export default function Creditos() {
  return (
    <LeftImageLayout id='creditos' img={banner} color='purple'>
      <div className="p-10 text-sm text-left text-yellow">
        <h2 className="text-4xl font-bold uppercase">Créditos</h2>
        <p className="mt-5">Gutiérrez Carvajal, Alberto Antonio; Martínez Vélez, Juan Carlos; Vargas Betancour, Sebastián (Clementino Lara); Franco Gutiérrez, Viviana (Quinaya Qumir); Marín Díaz, Iván; Zapata Ocampo, Laura Dahiana; Achicanoy Gómez, Luisa María.</p>
        <h3 className="text-sm text-white uppercase">Autores</h3>
        <hr className="mt-4 border-white" />
        <div className="flex w-full gap-4 mt-2">
            <div className="w-1/2">
                <p className="uppercase">Rodando por el Eje Cafetero. Guía de Turismo Cinematográfico y Audiovisual por la Región Cafetera</p>
                <hr className="my-2 border-yellow" />
                <p className="uppercase">La Caja Cine Club</p>
                <p className="uppercase">La Falla Destino Fílmico</p>
                <p className="uppercase">Ministerio de las Culturas, las Artes y los Saberes</p>
                <hr className="my-2 border-yellow" />
                <p>Alberto Antonio Gutiérrez</p>
                <p>Juan Carlos Martínez</p>
                <p className="text-white uppercase">DIRECCION GENERAL LA CAJA CINE CLUB</p>
                <hr className="my-2 border-yellow" />
                <p>Clementino Lara Grajales</p>
                <p className="text-white uppercase">DIRECCIÓN GENERAL LA FALLA DESTINO FÍLMICO</p>
                <hr className="my-2 border-yellow" />
                <p>Quinaya Qumir</p>
                <p className="text-white uppercase">TEXTOS Y REVISIÓN</p>
                <hr className="mt-4 border-yellow" />
            </div>
            <div className="w-1/2">
                <p>Alberto Antonio Gutiérrez</p>
                <p>Clementino Lara</p>
                <p>Quinaya Qumir</p>
                <p className="text-white uppercase">FOTOGRAFÍAS</p>
                <hr className="my-2 border-yellow" />
                <p>Alberto Antonio Gutiérrez</p>
                <p>Juan Carlos Martínez</p>
                <p>Ivan Marín Díaz</p>
                <p>Clementino Lara</p>
                <p>Quinaya Qumir</p>
                <p className="text-white uppercase">INVESTIGACIÓN AUDIOVISUAL</p>
                <hr className="my-2 border-yellow" />
                <p>Humberto Jurado</p>
                <p>Iván Marín Díaz</p>
                <p className="text-white uppercase">DISEÑO Y DIAGRAMACIÓN</p>
                <hr className="my-2 border-yellow" />
                <p>Artes Visuales, establecimiento comercial</p>
                <p className="text-white uppercase">PÁGINA WEB</p>
                <hr className="mt-4 border-yellow" />
            </div>
        </div>
      </div>
    </LeftImageLayout>
  );
};
