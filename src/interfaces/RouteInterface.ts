import { LinkTag, MetaTag } from './LayoutInterface';

interface RouteInterface {
  data: RouteFromJson;
  element: React.ReactElement;
}

interface ColumnContent {
  content: string;
  color?: string;
  lineColor?: string;
  uppercase?: boolean;
  fontWeight?: string;
}

interface PageContent {
  component: string;
  title?: string;
  uppercase?: boolean;
  color?: string;
  lineColor?: string;
  body?: string;
  firstColumn?: ColumnContent[];
  secondColumn?: ColumnContent[];
  thirdColumn?: ColumnContent[];
  firstImage?: string;
  secondImage?: string;
  thirdImage?: string;
  fourthImage?: string;
}

interface RouteFromJson {
  page: number;
  name: string;
  component: string;
  title: string;
  description: string;
  descriptiveSummary: string;
  img?: string;
  img2?: string;
  bgColor?: string;
  bgColor2?: string;
  culture?: string;
  textColor?: string;
  textColor2?: string;
  subtitle?: string;
  content?: PageContent;
  rightIcon?: string;
  topIcon?: string;
  body?: string;
  meta?: MetaTag[];
  link?: LinkTag[];
}

export type { RouteInterface, RouteFromJson, PageContent, ColumnContent };
