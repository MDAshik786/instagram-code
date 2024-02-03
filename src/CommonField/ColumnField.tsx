import { css } from "@emotion/css";
import { RowAndColumnProps } from "../Types/commonField";
import { classes } from "istanbul-lib-coverage";

const Column = ({
  horizontalAlign,
  verticalAlign,
  gap,
  padding,
  fontSize,
  className,
  children,
  style,
  width,
}: RowAndColumnProps) => {

  

  const columnStyle = css({
    display: "flex",
    flexDirection: "column",
    ...(horizontalAlign && { alignItems: horizontalAlign }),
    ...(verticalAlign && { justifyContent: verticalAlign }),
    ...(gap && { gap }),
    ...(fontSize && { fontSize }),
    ...(width && { width }),
    ...(padding && { padding }),
  });

  return (
    <div
      className={
        className && className.length > 0
          ? `${className} ${columnStyle}`
          : columnStyle
      }
      style={style}
    >
      {children}
    </div>
  );
};

export default Column;
