export type inputDataType = {
  [key: string]: string;
};

export type userDataType = {
  name: string;
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "radio"
    | "checkbox"
    | "date";
  inputClassName: string;
  placeHolder?: string;
  value: string;
  onChange?: any;
  containerClassName?: string;
  labelContent?: string;
  labelClassName?: string;
  onClick?: any;
  radioContent?: string;
  autoComplete?: string;
  id?: string;
  spanClassName?: string;
  errorMessage?: string;
  passordVisibility?: string | undefined;
  passwordClassName?: string;
  passwordOnClick?: () => void;
};
