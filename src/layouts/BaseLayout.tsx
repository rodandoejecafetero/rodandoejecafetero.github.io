import { CULTURE_IMG_DESCRIPTION } from "../Constant";
import { BaseLayoutProps } from "../interfaces/LayoutInterface";

function BaseLayout({route}: BaseLayoutProps) {
return (
    <>
        {route?.culture && (<img src={route.culture} alt={CULTURE_IMG_DESCRIPTION} className='absolute top-0 left-0' />)}
        {route?.pageColor && (<div className="absolute left-0 right-0 text-center bottom-4"><span className={`text-lg text-${route.pageColor}`}>{route.page}</span></div>)}
    </>
);
};

export default BaseLayout;