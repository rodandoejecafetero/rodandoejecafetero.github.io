import logo from '../assets/logos/culturas/culturas-purple.png';
import decorator from '../assets/logos/culturas/culturas-decorator-purple.png';
import LeftTopIconLayout from '../layouts/LeftTopIconLayout';

export default function Agradecimientos() {
  return (
    <LeftTopIconLayout id='agradecimientos' img={logo} color='purple'>
      <div className="flex flex-col w-full h-full p-10 text-sm text-left text-yellow">
        <div className='flex flex-col mx-auto'>
            <div>
                <img className='mx-auto' src={decorator} alt="Decorator" />
            </div>
            <div>
                <h2 className="mt-8 text-4xl font-bold uppercase">AGRADECIMIENTOS</h2>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8 sm:flex-nowrap">
            <div className="w-full">
              <div className="ml-auto w-fit">
                <p className="font-semibold">Instituciones que apoyan:</p>
                <p className="font-light">Ministerio de cultura y DACMI: Luz Adriana Quigua Gonzáles</p>
                <p className="font-light">DACMI: Annie Lorena Buitrago. Líder de Convocatorias de la dirección para el área de PNE</p>
                <p className="font-light">Fondo Mixto de Cultura de Boyacá: Juliana Agudelo Olguín</p>
                <p className="mt-4 font-semibold">Producciones audiovisuales</p>
                <p className="font-light">La Pasión de Gabriel - Jorge López Abella - Quinto Color</p>
                <p className="font-light">El Páramo - Federico Durán Amorocho - Rhayuela Films</p>
                <p className="font-light">Memoria - Diana María Bustamante Escobar - Burning</p>
                <p className="font-light">Las hermanitas Calle - Ángela María Vergara Marulanda - Caracol Televisión S.A.</p>
                <p className="font-light">Milagro en Roma - RTVE Radio y Televisión Española - Lisandro Duque Naranjo, director.</p>
                <p className="font-light">Café con Aroma de Mujer (1994), Café con Aroma de Mujer (2021) y Doña Bella - Luz Marina Toro Suárez - RCN Televisión S.A.</p>
                <p className="mt-4 font-semibold">Consejos de Audiovisuales, cine y medios interactivos del Eje Cafetero:</p>
                <p className="font-light">Consejos de Audiovisuales, cine y medios interactivos de Risaralda.</p>
                <p className="font-light">Consejos de Audiovisuales, cine y medios interactivos de Caldas.</p>
                <p className="font-light">Consejos de Audiovisuales, cine y medios interactivos de Quindío.</p>
                <p className="mt-4 font-semibold">Prologuista:</p>
                <p className="font-light">Diana María Rodríguez Herrera - Profesora Escuela de Turismo Sostenible - Facultad de Ciencias Ambientales - Universidad Tecnológica de Pereira</p>
              </div>
            </div>
            <div className="w-full">
              <p className="font-semibold">Operadores turísticos:</p>
              <p className="font-semibold">Quindío:</p>
              <p className="font-light">Hotel Shalom La Dorada - Javier Alonso Ortiz</p>
              <p className="font-light">Hacienda Bambusa</p>
              <p className="font-light">Pijao - Mónica Flórez - La Pequeña Casa. Hospedaje cittaslow</p>
              <p className="font-light">Filandia - Oficina de turismo municipal</p>
              <p className="font-light">Filandia - Francia Inés Bautista Jurado - Pedales Coloniales</p>
              <p className="font-light">Calarcá - Corporación Cívica Fiesta Nacional del Café </p>
              <p className="mt-4 font-semibold">Caldas:</p>
              <p className="font-light">Don Leo</p>
              <p className="font-light">Base Militar Cerró Gualí - Sargento Israel Cuéllar Páez</p>
              <p className="font-light">Hacienda Venecia - Alejandra Corrales Escobar López Osorio (Gerente comercial). Juan Pablo Echeverry Londoño (Gerente general)</p>
              <p className="font-light">Riosucio - Juan Esteban Becerra - Fotos de Carnaval de Riosucio</p>
              <p className="mt-4 font-semibold">Risaralda:</p>
              <p className="font-light">Apía - Oficina de Turismo de la Alcaldía Municipal</p>
              <p className="mt-4 font-semibold">Difusión:</p>
              <p className="font-light">Universidad Católica de Pereira</p>
              <p className="font-light">Festival Cine en las montañas - Juan Francisco Bautista - Director general</p>
            </div>
        </div>
      </div>
    </LeftTopIconLayout>
  );
};
