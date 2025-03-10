import logo from '../assets/logos/culturas/culturas-purple.png';
import decorator from '../assets/logos/culturas/culturas-decorator-purple.png';
import LeftTopIconLayout from '../layouts/LeftTopIconLayout';

export default function Introduccion() {
  return (
    <LeftTopIconLayout id='introduccion' img={logo} color='purple'>
      <div className="flex flex-col w-full h-full p-10 text-sm text-left text-yellow">
        <div className='flex flex-col mx-auto'>
            <div>
                <img className='mx-auto' src={decorator} alt="Decorator" />
            </div>
            <div>
                <h2 className="mt-8 text-4xl font-bold uppercase">INTRODUCCIÓN</h2>
            </div>
        </div>
        <div className="flex flex-wrap mx-auto mt-8 sm:gap-8 sm:flex-nowrap">
            <div className="w-full">
              <p className="font-light">
                El Eje Cafetero es una de las regiones más representativas de
                Colombia, ubicada en el corazón de los Andes, comprende los
                departamentos de Caldas, Quindío y Risaralda, y se destaca
                por su geografía montañosa, atravesada por las cordilleras
                Central y Occidental. Esta ubicación estratégica le otorga una
                diversidad de ecosistemas únicos que van desde bosques de
                niebla y páramos hasta valles fértiles, lo que ha facilitado el
                desarrollo de una agricultura pujante, con el café como su
                producto más emblemático. En este sentido, la región es
                conocida como la cuna del café colombiano, y sus paisajes,
                patrimonio cultural y biodiversidad le han valido el
                reconocimiento de la UNESCO como Patrimonio de la
                Humanidad en 2011.
              </p>
              <p className="mt-4 font-light">
                La diversidad de los ecosistemas en el Eje Cafetero favorece
                tanto la agricultura como el turismo de naturaleza, atrayendo
                a millones de turistas interesados en el aviturismo, senderismo
                y el disfrute de sus parques nacionales, como el Parque
                Nacional Natural Los Nevados, que ofrece actividades de alta
                montaña y observación de flora y fauna nativa. La economía
                del Eje Cafetero ha sido históricamente agraria, con el cultivo
                del café como principal motor, pero en la actualidad se ha
                diversificado gracias a sectores como la industria turística:
                ecoturismo, turismo rural y cultural, y turismo de bienestar,
                gracias a sus termales y fincas de café.
              </p>
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <p className="font-light">
                Esta región también tiene raíces históricas profundas, con una
                rica ancestralidad indígena, de la cual se destaca la cultura Quimbaya y su meticulosa orfebrería. La región tuvo dos
                períodos de colonización que definen fuertemente su identidad
                actual: la colonización española, que llegó con la conquista en
                el siglo XVI cuando se fundó Cartago (originalmente localizada
                donde hoy es Pereira), y la colonización antioqueña durante el
                siglo XIX, cuando se fundaron las actuales capitales de los
                departamentos y la mayoría de sus municipios. Esta
                combinación de influencias ancestrales, coloniales y modernas
                ha permitido que el Eje Cafetero se convierta en uno de los
                destinos turísticos más atractivos de Colombia
              </p>
              <p className="mt-4 font-light">
                En cuanto a su infraestructura turística, el Eje Cafetero cuenta
                con una oferta que incluye desde hoteles boutique, glamping
                y ecolodges, hasta fincas cafeteras habilitadas para recibir a
                turistas, complementadas con una sólida red de carreteras
                que facilita el acceso a las principales atracciones turísticas.
                El constante incremento en la llegada de visitantes se debe
                también a la modernización de sus aeropuertos, como el
                Aeropuerto Internacional Matecaña de Pereira, el Aeropuerto
                El Edén en Armenia y la construcción del Aeropuerto del Café
                en Caldas, que fortalecerá aún más la conectividad de la
                región.
              </p>
              <p className="mt-4 font-light">
                En los últimos cinco años, el flujo turístico ha mostrado una
                recuperación notable, particularmente después de la pandemia
                de COVID-19.
              </p>
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <p className="font-light">
                En 2021, municipios como Salento y Filandia
                vieron un aumento en los turistas nacionales, aunque el
                turismo internacional aún no alcanzaba los niveles
                prepandémicos. En 2019 el Quindío recibió alrededor de
                18,060 turistas internacionales, una cifra que disminuyó
                considerablemente en 2020 debido a la pandemia, pero que
                comenzó a recuperarse en 2021, llegando a 11,319 visitantes
                extranjeros.¹ Para 2022, el Eje Cafetero no solo logró recuperar
                el turismo, sino que superó los niveles de 2019 en algunos
                departamentos, destacándose Risaralda y Quindío.²
              </p>
              <p className="mt-4 font-light">
                Comparado con otros destinos turísticos colombianos como
                Cartagena y San Andrés, el Eje Cafetero sigue ganando
                popularidad, consolidando su posición como un destino clave
                para el turismo de naturaleza y cultura.
              </p>
              <p className="mt-4 font-semibold">
                Referencias
              </p>
              <p className="font-light">
                Referencias Semana. (2022, 5 de marzo). Pereira, clave para la
                reactivación del turismo en Colombia. Recuperado de https://
                www.semana.com/mejor-colombia/articulo/pereira-clavepara-la-reactivacion-del-turismo-en-colombia/202200/
                Pulzo. (2022, 23 de abril). Cifras del turismo en Colombia y
                su reactivación económica a niveles prepandémicos.
                Recuperado de https://www.pulzo.com/economia/cifrasturismo-colombia-reactivacion-economica-nivelesprepandemicos-PP1352153A
              </p>
              <p className="mt-4 font-semibold">
                Laura Zapata Ocampo
              </p>
              <p className="font-light">
                Administradora en Turismo Sostenible
              </p>
            </div>
        </div>
      </div>
    </LeftTopIconLayout>
  );
};
