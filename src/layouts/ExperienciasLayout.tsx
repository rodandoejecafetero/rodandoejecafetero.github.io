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
                      {route?.content?.body?.split('**')[0].split('*').map((row) => (<td className="p-3 border-b border-white">{row}</td>))}
                  </tr>
                  {route?.content?.body?.split('**').slice(1).map((_row, index) => (<tr className="">
                      <td className="p-3"></td>
                      {route?.content?.body?.split('**').slice(1)[index].split('*').map((row2) => (<td className="p-3 border-b border-white">{row2}</td>))}
                  </tr>))}
              </tbody>
            </table>))}
            {route?.content2?.title && route?.content2?.title?.split('*').map((column) => (<table className="w-full font-light text-white">
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
                      {route?.content2?.body?.split('**')[0].split('*').map((row) => (<td className="p-3 border-b border-white">{row}</td>))}
                  </tr>
                  {route?.content2?.body?.split('**').slice(1).map((_row, index) => (<tr className="">
                      <td className="p-3"></td>
                      {route?.content2?.body?.split('**').slice(1)[index].split('*').map((row2) => (<td className="p-3 border-b border-white">{row2}</td>))}
                  </tr>))}
              </tbody>
            </table>))}
          </div>
        </div>
      </div>
    );
};

export default ExperienciasLayout;