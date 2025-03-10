import LeftTopIconLayout from '../../layouts/LeftTopIconLayout';
import { DEFAULT_URL } from '../../Constant';

export default function Agradecimientos() {
  return (
    <LeftTopIconLayout id='agradecimientos' img={`${DEFAULT_URL}assets/logos/culturas/culturas-purple.png`} color='purple'>
      <div className="flex flex-col w-full h-full p-10 text-sm text-left text-yellow">
        <div className='flex flex-col mx-auto'>
            <div>
                <img className='mx-auto' src={`${DEFAULT_URL}assets/logos/culturas/culturas-decorator-purple.png`} alt="Decorator" />
            </div>
            <div>
                <h2 className="mt-8 text-4xl font-bold uppercase">AGRADECIMIENTOS</h2>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8 sm:flex-nowrap">
            <div className="w-full">
              <div className="ml-auto font-light w-fit">
                <p className="font-semibold">Instituciones que apoyan:</p>
                <p>Ministerio de cultura y DACMI: Luz Adriana Quigua Gonzáles</p>
                <p>DACMI: Annie Lorena Buitrago. Líder de Convocatorias de la dirección para el área de PNE</p>
                <p>Fondo Mixto de Cultura de Boyacá: Juliana Agudelo Olguín</p>
                <p className="mt-4 font-semibold">Producciones audiovisuales</p>
                <p>La Pasión de Gabriel - Jorge López Abella - Quinto Color</p>
                <p>El Páramo - Federico Durán Amorocho - Rhayuela Films</p>
                <p>Memoria - Diana María Bustamante Escobar - Burning</p>
                <p>Las hermanitas Calle - Ángela María Vergara Marulanda - Caracol Televisión S.A.</p>
                <p>Milagro en Roma - RTVE Radio y Televisión Española - Lisandro Duque Naranjo, director.</p>
                <p>Café con Aroma de Mujer (1994), Café con Aroma de Mujer (2021) y Doña Bella - Luz Marina Toro Suárez - RCN Televisión S.A.</p>
                <p className="mt-4 font-semibold">Consejos de Audiovisuales, cine y medios interactivos del Eje Cafetero:</p>
                <p>Consejos de Audiovisuales, cine y medios interactivos de Risaralda.</p>
                <p>Consejos de Audiovisuales, cine y medios interactivos de Caldas.</p>
                <p>Consejos de Audiovisuales, cine y medios interactivos de Quindío.</p>
                <p className="mt-4 font-semibold">Prologuista:</p>
                <p>Diana María Rodríguez Herrera - Profesora Escuela de Turismo Sostenible - Facultad de Ciencias Ambientales - Universidad Tecnológica de Pereira</p>
              </div>
            </div>
            <div className="w-full font-light">
              <p className="font-semibold">Operadores turísticos:</p>
              <p className="font-semibold">Quindío:</p>
              <p>Hotel Shalom La Dorada - Javier Alonso Ortiz</p>
              <p>Hacienda Bambusa</p>
              <p>Pijao - Mónica Flórez - La Pequeña Casa. Hospedaje cittaslow</p>
              <p>Filandia - Oficina de turismo municipal</p>
              <p>Filandia - Francia Inés Bautista Jurado - Pedales Coloniales</p>
              <p>Calarcá - Corporación Cívica Fiesta Nacional del Café </p>
              <p className="mt-4 font-semibold">Caldas:</p>
              <p>Don Leo</p>
              <p>Base Militar Cerró Gualí - Sargento Israel Cuéllar Páez</p>
              <p>Hacienda Venecia - Alejandra Corrales Escobar López Osorio (Gerente comercial). Juan Pablo Echeverry Londoño (Gerente general)</p>
              <p>Riosucio - Juan Esteban Becerra - Fotos de Carnaval de Riosucio</p>
              <p className="mt-4 font-semibold">Risaralda:</p>
              <p>Apía - Oficina de Turismo de la Alcaldía Municipal</p>
              <p className="mt-4 font-semibold">Difusión:</p>
              <p>Universidad Católica de Pereira</p>
              <p>Festival Cine en las montañas - Juan Francisco Bautista - Director general</p>
            </div>
        </div>
      </div>
    </LeftTopIconLayout>
  );
};
