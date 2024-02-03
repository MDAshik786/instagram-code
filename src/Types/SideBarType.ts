//sideBar Store

export type sideBarDataTypes = {
  [key: string]: boolean;
};

export type SideBarNamesType = {
  id: string;
  name: string;
  count?: number;
  onClick: any;
  img: any;
  clickedImg?: any;
};

export type SingleContentPropsType = {
  data: SideBarNamesType;
  windowWidth: () => boolean;
};
