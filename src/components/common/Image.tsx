import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function FourthImageTable({ route }: BaseLayoutProps) {
    return (
        <>
            <img src={route?.content?.firstImage} alt="Imagen 1" className='w-full my-10' />
        </>
    );
};

export default FourthImageTable;