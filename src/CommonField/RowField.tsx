import { css } from "@emotion/css";
import { RowAndColumnProps } from "../Types/commonField";


const Row = ({
  horizontalAlign,
  verticalAlign,
  gap,
  fontSize,
  className,
  children,
  padding,
  onClick,
  style,
}: RowAndColumnProps) => {
  const rowStyle = css({
    display: "flex",
    ...(horizontalAlign && { alignItems: horizontalAlign }),
    ...(verticalAlign && { justifyContent: verticalAlign }),
    ...(gap && { gap }),
    ...(fontSize && { fontSize }),
    ...(padding && { padding }),
  });

  return (
    <div
      className={className ? `${className} ${rowStyle}` : rowStyle}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Row;
