import { ReactNode } from 'react';

export default function LeftImageLayout({ children, img, color = 'purple' }: { children: ReactNode, img: string, color?: string }) {
    return (
      <div
        style={{
          minWidth: '100vw',
          minHeight: '100vh',
        }}
        className={`flex flex-wrap bg-${color}`}
      >
        <div className="flex w-full h-56 overflow-hidden md:w-1/2 md:h-[100vh]"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top left',
          }}>
        </div>
        <div className="w-full md:w-1/2">
          {children}
        </div>
      </div>
    );
};