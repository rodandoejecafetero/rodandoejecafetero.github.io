import logo from '../assets/logo/logo.png';
import logoDecorator from '../assets/logo/logo-decorator.png';
import logoDecorator2 from '../assets/logo/logo-decorator-2.png';
import MiddleLayout from '../layouts/MiddleLayout';

export default function RodandoEjeCafetero() {
  return (
    <MiddleLayout color='yellow'>
      <div className="p-10">
        <div className="w-full mx-auto sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
          <img
            src={logo}
            alt="Logo"
            className="w-full"
          />
          <img
            src={logoDecorator}
            alt="Logo Decorator"
            className="w-1/2 mx-auto mt-8"
          />
        </div>

        <p className="mt-8 text-base font-medium text-center uppercase text-purple">
          Guía de turismo cinematográfico y audiovisual por la región cafetera
        </p>

        <div className="w-full mx-auto sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
          <img
            src={logoDecorator2}
            alt="Logo Decorator 2"
            className="w-1/2 mx-auto mt-8"
          />
        </div>
      </div>
    </MiddleLayout>
  );
};
