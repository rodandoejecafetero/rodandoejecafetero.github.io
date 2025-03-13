import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import BaseLayout from './BaseLayout';

function RisaraldaLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} text-${route?.textColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className={`flex justify-center items-end w-full md:w-3/5 md:min-h-screen bg-${route?.bgColor2}`}>
            <div className='px-5 pt-28 h-fit md:hidden'>
              <h1 className='text-4xl font-bold text-left uppercase' style={{ whiteSpace: 'pre-line' }}>{route?.content?.title}</h1>
            </div>
        </div>
        <div className="w-full md:w-2/5">
          <div className='z-10 flex items-center justify-center md:absolute md:top-0 md:left-0 md:right-0 md:bottom-0'>
            <div className='relative flex flex-col py-10 mx-auto max-w-7xl md:py-0'>
              <div className={`text-sm flex flex-col sm:flex-row w-fit mx-auto mb-4`}>
                <div className='flex justify-center sm:justify-end w-[80vw] sm:w-3/5 relative'>
                  <img src={route?.img} className='bottom-0 right-0 flex object-contain mr-1 h-36'/>
                  <img src={route?.img2} className='bottom-0 right-0 flex object-contain h-36'/>
                </div>
                <div className='w-[80vw] sm:w-2/5 px-4'>
                  <div className={`bg-${route?.bgColor}/50 rounded-lg p-4 h-fit`}>
                    <h2 className={`text-${route?.content?.color}`}>{route?.content?.title2}</h2>
                    <p className={`text-${route?.content?.color2} font-light`}>{route?.content?.body}</p>
                  </div>
                </div>
              </div>
              <div className='z-10 hidden md:flex md:absolute md:top-1/2 md:left-5 md:transform md:-translate-y-full h-fit'>
                <h1 className={`text-4xl font-bold text-left uppercase rounded-lg bg-${route?.bgColor2}/50`} style={{ whiteSpace: 'pre-line' }}>{route?.content?.title}</h1>
              </div>
              <div className={`text-sm flex flex-col sm:flex-row w-fit mx-auto mb-4`}>
                <div className='flex justify-center sm:justify-end w-[80vw] sm:w-3/5 relative'>
                  <img src={route?.img3} className='bottom-0 right-0 flex object-contain mr-1 h-36'/>
                  <img src={route?.img4} className='bottom-0 right-0 flex object-contain h-36'/>
                </div>
                <div className='w-[80vw] sm:w-2/5 px-4'>
                  <div className={`bg-${route?.bgColor}/50 rounded-lg p-4 h-fit`}>
                    <h2 className={`text-${route?.content?.color}`}>{route?.content?.title3}</h2>
                    <p className={`text-${route?.content?.color2} font-light`}>{route?.content?.body2}</p>
                  </div>
                </div>
              </div>
              <div className={`text-sm flex flex-col sm:flex-row w-fit mx-auto`}>
                <div className='flex justify-center sm:justify-end w-[80vw] sm:w-3/5'>
                  <img src={route?.img5} className='object-contain h-56'/>
                </div>
                <div className='w-[80vw] sm:w-2/5 px-4'>
                  <div className={`bg-${route?.bgColor}/50 rounded-lg p-4 h-fit`}>
                    <h2 className={`text-${route?.content?.color}`}>{route?.content?.title3}</h2>
                    <p className={`text-${route?.content?.color2} font-light`}>{route?.content?.body2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RisaraldaLayout;