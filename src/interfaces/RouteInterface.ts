import { LinkTag, MetaTag } from './LayoutInterface';

interface RouteInterface {
  data: RouteFromJson;
  element: React.ReactElement;
}

interface RouteFromJson {
  page: number;
  name: string;
  component: string;
  title: string;
  description: string;
  descriptiveSummary: string;
  img?: string;
  bgColor?: string;
  culture?: string;
  pageColor?: string;
  meta?: MetaTag[];
  link?: LinkTag[];
}

export type { RouteInterface, RouteFromJson };
