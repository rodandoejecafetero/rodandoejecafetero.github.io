import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

function DotList({ route }: BaseLayoutProps) {
    return (
        <div className={`text-${route?.content?.color} text-left w-fit mx-auto`}>
            <ul>
            {route?.content?.body?.split(',')?.map((element, index) => {
                return <li key={index}>
                    {element}
                </li>;
            })}
            </ul>
        </div>
    );
};

export default DotList;