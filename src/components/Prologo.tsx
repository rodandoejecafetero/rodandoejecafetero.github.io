import logo from '../assets/logos/culturas/culturas-yellow.png';
import decorator from '../assets/logos/culturas/culturas-decorator-yellow.png';
import LeftTopIconLayout from '../layouts/LeftTopIconLayout';

export default function Prologo() {
  return (
    <LeftTopIconLayout id='prologo' img={logo} color='yellow'>
      <div className="flex flex-col w-full h-full p-10 text-sm text-left text-purple">
        <div className='flex flex-col mx-auto text-center'>
            <div>
                <img className='mx-auto' src={decorator} alt="Decorator" />
            </div>
            <div>
                <h2 className="mt-8 text-4xl font-bold uppercase">PRÓLOGO</h2>
            </div>
            <div>
                <h2 className="mt-8 text-2xl font-bold uppercase">CURIOSIDAD, ARTE Y CREATIVIDAD EN LA ESCENA</h2>
            </div>
        </div>
        <div className="flex flex-wrap mx-auto mt-8 sm:gap-8 sm:flex-nowrap">
            <div className="w-full">
              <p className="font-light">
                Siendo la región del Eje Cafetero un destino turístico en
                formación, con grandes desafíos en materia de sostenibilidad,
                la presente guía de turismo cinematográfico y audiovisual nos
                propone la hipótesis de que la región puede convertirse en un
                destino turístico de carácter fílmico. Y no solo lo propone, sino
                que da los primeros pasos en su construcción; mapeando
                lugares, agentes, procesos y contenidos; así como convocando
                instituciones, autores y comunidades que participaron en la
                construcción de este trabajo.
              </p>
              <p className="mt-4 font-light">
                Valga decir que para conformar un destino turístico se requiere
                algo más que poseer lugares bellos, emblemáticos o
                pintorescos. Se requiere ofrecer una serie de servicios
                encadenados y estandarizados (hoteles, restaurantes,
                excursiones, atracciones, comunicaciones), los cuales permiten
                a los turistas disfrutar de su estancia. La promoción, el
                aseguramiento de la calidad y el desarrollo de un destino
                turístico suelen estar gestionados por entidades
                gubernamentales, empresas privadas, habitantes y/o
                asociaciones locales, que idealmente se unen con el objetivo
                de atraer turistas bajo principios de sostenibilidad.
              </p>
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <p className="font-light">
                Si bien, se trata de una primera edición, la intención detrás de
                la guía va más allá de hacer un recorrido por locaciones
                fílmicas. Es una provocación y un proyecto para reflexionar
                sobre la importancia de la curiosidad, arte y creatividad en la
                construcción de territorialidades turísticas mucho más
                conscientes y coherentes. En concreto, invita a considerar el
                cine y las producciones audiovisuales como poderosas
                herramientas para generar cohesión social y transformación
                territorial.
              </p>
              <p className="mt-4 font-light">
                A medida que nos adentremos en sus páginas será inevitable
                formularnos estas preguntas:¿De qué manera las historias
                que se cuentan en la pantalla pueden inspirar un turismo más
                responsable y con sentido? ¿Cómo puede una película o una
                producción audiovisual cambiar nuestra percepción de un
                paisaje? ¿Qué tipo de historias queremos que se cuenten en
                estos lugares? ¿En qué medida la apertura a nuevos consumos
                turísticos respeta la autonomía de las comunidades locales?
              </p>
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <p className="font-light">
                “Rodar por el Eje Cafetero” nos recuerda la experiencia de los
                antiguos andariegos provenientes de Antioquia y del Cauca,
                que en el siglo XIX colonizaron la región que hoy llamamos
                “Eje Cafetero”. Según la memoria oral ellos “rodaban” de un
                lugar a otro hasta encontrar un lugar propio. “Rodar” nos
                habla de un paisaje en movimiento, de la indeterminación, de
                las múltiples posibilidades y del extrañamiento, propios de
                las grandes aventuras. Como la narrativa que aquí inicia.
              </p>
              <p className="mt-4 font-light">
                Pereira, Febrero 5 de 2025
              </p>
              <p className="mt-4 font-semibold">
                Diana María Rodríguez Herrera
              </p>
              <p className="font-light">
                Profesora Escuela de Turismo Sostenible
              </p>
              <p className="font-light">
                Departamento de Estudios Interdisciplinarios
              </p>
              <p className="font-light">
                Facultad de Ciencias Ambientales
              </p>
              <p className="font-light">
                Universidad Tecnológica de Pereira
              </p>
            </div>
        </div>
      </div>
    </LeftTopIconLayout>
  );
};
