import MiddleLayout from '../../layouts/MiddleLayout';
import { DEFAULT_URL } from '../../Constant';

export default function Portada() {
  return (
    <MiddleLayout id='portada' color='yellow'>
      <div className="p-10">
        <div className="w-full mx-auto sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
          <img
            src={`${DEFAULT_URL}assets/logos/logo.png`}
            alt="Logo"
            className="w-full"
          />
          <img
            src={`${DEFAULT_URL}assets/logos/culturas/logo-decorator.png`}
            alt="Logo Decorator"
            className="w-1/2 mx-auto mt-8"
          />
        </div>

        <p className="mt-8 text-base font-medium text-center uppercase text-purple">
          Guía de turismo cinematográfico y audiovisual por la región cafetera
        </p>

        <div className="w-full mx-auto sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
          <img
            src={`${DEFAULT_URL}assets/logos/logo-decorator-2.png`}
            alt="Logo Decorator 2"
            className="w-1/2 mx-auto mt-8"
          />
        </div>
      </div>
    </MiddleLayout>
  );
};
