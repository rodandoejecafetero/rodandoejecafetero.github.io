import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function FourthImageTable({ route }: BaseLayoutProps) {
    return (
        <>
            <div className="grid w-full grid-cols-2 gap-4 mt-2">
                <div className="grid-cols-1">
                    <img src={route?.content?.firstImage} alt="Imagen 1" className='w-full mb-4' />
                    <img src={route?.content?.secondImage} alt="Imagen 2" className='w-full' />
                </div>
                <div className="grid-cols-1">
                    <img src={route?.content?.thirdImage} alt="Imagen 3" className='w-full mb-4' />
                    <img src={route?.content?.fourthImage} alt="Imagen 4" className='w-full' />
                </div>
            </div>
        </>
    );
};

export default FourthImageTable;