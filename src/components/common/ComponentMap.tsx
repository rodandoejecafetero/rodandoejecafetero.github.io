import { BaseLayoutProps } from "../../interfaces/LayoutInterface";
import OneColumnTable from './OneColumnTable';
import TwoColumnTable from './TwoColumnTable';
import ThreeColumnTable from './ThreeColumnTable';
import FourthImageTable from './FourthImageTable';
import DotList from './DotList';


export const ComponentMap: { [key: string]: React.ReactElement<BaseLayoutProps> } = {
    OneColumnTable: <OneColumnTable />,
    TwoColumnTable: <TwoColumnTable />,
    ThreeColumnTable: <ThreeColumnTable />,
    FourthImageTable: <FourthImageTable />,
    DotList: <DotList />,
};
