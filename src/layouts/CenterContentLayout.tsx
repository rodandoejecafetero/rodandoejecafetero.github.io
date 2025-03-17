import React from 'react';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import NotFound from '../components/common/NotFound';
import BaseLayout from './BaseLayout';
import { ComponentMap } from '../components/common/ComponentMap';
import { DEFAULT_URL } from '../Constant';

function CenterContentLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className="flex mx-auto my-auto max-w-7xl">
            <div className="z-10 w-full mx-auto my-auto">
                <div className={`p-10 text-sm text-left text-${route?.textColor}`}>
                    <div className={`rounded-4xl bg-${route?.bgColor}/50 font-bold`}>
                        {route?.topIcon && <img src={`${DEFAULT_URL}${route.topIcon}`} alt='Icono superior' className='w-24 mx-auto mb-8 max-h-32' loading='lazy' />}
                        <h1 className='mb-8 text-4xl text-center uppercase'>{route?.title}</h1>
                        {route?.subtitle && <h2 className="mb-8 text-xl text-center">{route?.subtitle}</h2>}
                        {route?.content?.component && React.cloneElement(
                            ComponentMap[route?.content?.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
                            { route: route, }
                            )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default CenterContentLayout;