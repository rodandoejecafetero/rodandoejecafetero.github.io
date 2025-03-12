import React from 'react';
import { DEFAULT_URL } from '../Constant';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import NotFound from '../components/common/NotFound';
import BaseLayout from './BaseLayout';
import { ComponentMap } from '../components/common/ComponentMap';

function RightPrimaryBannerLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className="z-10 w-full max-w-6xl mx-auto my-auto md:w-2/5">
            <div className={`p-10 text-sm text-left text-${route?.textColor}`}>
                <div className={`rounded-4xl bg-${route?.bgColor}/50 text-center`}>
                    {route?.img2 && <img src={route?.img2} alt="Secondary img" className='w-2/3 mx-auto mb-8' />}
                    <h2 className='text-4xl font-bold uppercase'>{route?.content?.title}</h2>
                    <p className="mt-5">{route?.subtitle}</p>
                    {route?.content?.component && React.cloneElement(
                        ComponentMap[route?.content?.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
                        { route: route, }
                        )}
                </div>
            </div>
        </div>
        <div className="flex w-full h-[34vh] overflow-hidden md:w-3/5 md:h-[100vh]"
          style={{
            backgroundImage: `url(${`${DEFAULT_URL}${route?.img}`})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top left',
          }}>
        </div>
      </div>
    );
};

export default RightPrimaryBannerLayout;