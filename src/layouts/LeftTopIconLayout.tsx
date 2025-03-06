import { ReactNode } from 'react';

export default function LeftTopIconLayout({ children, img, color = 'yellow' }: { children: ReactNode, img: string, color?: string }) {
    return (
        <div className={`flex min-h-[100vh] min-w-[100vw] relative justify-center items-center bg-${color}`}>
            {children}
            <div className="absolute w-24 h-24 top-1 left-5 sm:w-32 sm:h-32 sm:top-8 sm:left-10">
                <img src={img} alt="Logo" className='object-contain w-full h-full'/>
            </div>
        </div>
    );
};