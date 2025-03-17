import { DEFAULT_URL } from '../../Constant';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function FourthImageTable({ route }: BaseLayoutProps) {
    return (
        <>
            <img src={`${DEFAULT_URL}${route?.content?.firstImage}`} alt="Imagen 1" className='w-full my-10' loading='lazy' />
        </>
    );
};

export default FourthImageTable;