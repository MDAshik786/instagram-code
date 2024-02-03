import { ImageFiledProps } from "../Types/commonField";
const ImageField = ({ src, alt, className, style }: ImageFiledProps) => {
  return <img src={src} alt={alt} className={className} style={style} />;
};

export default ImageField;
