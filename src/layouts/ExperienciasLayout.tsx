import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function ExperienciasLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex justify-center items-center bg-${route?.bgColor} text-${route?.textColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className={`mx-auto max-w-screen overflow-x-auto`}>
          <div className={`max-w-6xl p-5 md:p-10 min-w-4xl`}>
            <h1 className={`text-4xl font-semibold uppercase mb-8`}>{route?.title}</h1>
            {route?.content?.title && route?.content?.title?.split('*').map((column) => (<table className="w-full font-light text-white">
              <thead>
                  <tr className={`text-left border-b border-yellow font-semibold`}>
                      <th className="p-3 ">NOMBRE</th>
                      <th className="p-3 ">TIPO DE EXPERIENCIA</th>
                      <th className="p-3 ">NOMBRE</th>
                      <th className="p-3 ">CONTACTO</th>
                      <th className="p-3 ">TARIFA EXPERIENCIAS TURÍSTICAS</th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="">
                      <td className="p-3 text-yellow">{column}</td>
                      {}
                      <td className="p-3 border-b border-white">Parapente turismo de aventura</td>
                      <td className="p-3 border-b border-white">Club Escuela de vuelo libre Vientos</td>
                      <td className="p-3 border-b border-white">3147144333</td>
                      <td className="p-3 border-b border-white">Aprox $170.000 COP por persona</td>
                  </tr>
                  <tr className="">
                      <td className="p-3"></td>
                      <td className="p-3 border-b border-white">Tour de café, experiencia agroturística, museo al aire libre</td>
                      <td className="p-3 border-b border-white">Granja San Isidro</td>
                      <td className="p-3 border-b border-white">3012738710 / 3207267908</td>
                      <td className="p-3 border-b border-white">Desde $50.000 COP por persona, varía de acuerdo a la experiencia y cantidad de personas</td>
                  </tr>
                  <tr className="">
                      <td className="p-3"></td>
                      <td className="p-3 border-b border-white">Visita a cascadas, senderismo en tres parques naturales...</td>
                      <td className="p-3 border-b border-white">Guía Alejandro Bermúdez Raigosa</td>
                      <td className="p-3 border-b border-white">3147144333</td>
                      <td className="p-3 border-b border-white">Desde $70.000 a $250.000 COP por persona, varía de acuerdo a la experiencia y cantidad de personas</td>
                  </tr>
                  <tr className="">
                      <td className="p-3"></td>
                      <td className="p-3 border-b border-white">Recorridos de aviturismo</td>
                      <td className="p-3 border-b border-white">Organización Ambiental Vida Silvestre</td>
                      <td className="p-3 border-b border-white">3136333829</td>
                      <td className="p-3 border-b border-white">Aprox $80.000 COP por persona</td>
                  </tr>
                  <tr className="">
                      <td className="p-3"></td>
                      <td className="p-3 border-b border-white">Biciturismo, rutas en bicicleta y agroturismo</td>
                      <td className="p-3 border-b border-white">Bicitours rutas del viento</td>
                      <td className="p-3 border-b border-white">3004272010</td>
                      <td className="p-3 border-b border-white">Desde $90.000 COP por persona, varía de acuerdo a la experiencia y cantidad de personas</td>
                  </tr>
                  <tr className="">
                      <td className="p-3"></td>
                      <td className="p-3 border-b border-white">Observación de aves ruta corta 1km para observar ave endémicas</td>
                      <td className="p-3 border-b border-white">Apía Birding Ecolodge</td>
                      <td className="p-3 border-b border-white">3116876569</td>
                      <td className="p-3 border-b border-white">Entre $30.000 y $100.000 COP por persona</td>
                  </tr>
              </tbody>
            </table>))}
          </div>
        </div>
      </div>
    );
};

export default ExperienciasLayout;