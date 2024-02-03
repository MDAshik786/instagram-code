import { userDataType } from "./userType";

export type ImageFiledProps = {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  style?: any;
};

export type RowAndColumnProps = {
  horizontalAlign?: string;
  verticalAlign?: string;
  gap?: string;
  padding?: string;
  className?: string;
  fontSize?: string;
  children: any;
  onClick?: any;
  style?: any;
  width?: any;
};

export type InputFieldTypes = {
  userData: userDataType[];
};

export type ButtonFieldTypes = {
  className?: string;
  onClick?: any;
  disabled?: true;
  type?: "submit" | "reset" | "button";
  children: any;
};

export type profileSuggestionPropsType = {
  profileSuggestionRightAction: any
};
