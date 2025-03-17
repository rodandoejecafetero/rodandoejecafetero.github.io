import { DEFAULT_URL } from '../../Constant';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function FourthImageTable({ route }: BaseLayoutProps) {
    return (
        <>
            <div className="grid w-full grid-cols-2 gap-4 mt-2">
                <div className="grid-cols-1">
                    <img src={`${DEFAULT_URL}${route?.content?.firstImage}`} alt="Imagen 1" className='w-full mb-4' loading='lazy' />
                    <img src={`${DEFAULT_URL}${route?.content?.secondImage}`} alt="Imagen 2" className='w-full' loading='lazy' />
                </div>
                <div className="grid-cols-1">
                    <img src={`${DEFAULT_URL}${route?.content?.thirdImage}`} alt="Imagen 3" className='w-full mb-4' loading='lazy' />
                    <img src={`${DEFAULT_URL}${route?.content?.fourthImage}`} alt="Imagen 4" className='w-full' loading='lazy' />
                </div>
            </div>
        </>
    );
};

export default FourthImageTable;