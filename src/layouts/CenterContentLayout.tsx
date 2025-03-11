import React from 'react';
import { BaseLayoutProps } from '../interfaces/LayoutInterface';
import NotFound from '../components/common/NotFound';
import BaseLayout from './BaseLayout';
import { ComponentMap } from '../components/common/ComponentMap';

function CenterContentLayout({ route }: BaseLayoutProps) {
    return (
      <div
        id={route?.name}
        className={`flex flex-wrap bg-${route?.bgColor} min-h-screen relative`}
      >
        <BaseLayout route={route} />
        <div className="flex max-w-6xl mx-auto my-auto">
            <div className="z-10 w-full mx-auto my-auto">
                <div className={`p-10 text-sm text-left text-${route?.textColor}`}>
                    <div className={`rounded-4xl bg-${route?.bgColor}/50`}>
                        {route?.topIcon && <img src={route?.topIcon} alt='Icono superior' className='mx-auto mb-8 max-h-32' />}
                        <h2 className='text-4xl font-bold text-center uppercase'>{route?.title}</h2>
                        <p className="mt-5 text-xl text-center">{route?.subtitle}</p>
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