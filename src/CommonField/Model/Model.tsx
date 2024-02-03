import { css } from "@emotion/css";
import Column from "../ColumnField";
import ReactDOM from "react-dom";
import { modelStore } from "../../Store/ModelStore";
import { observer } from "mobx-react-lite";

const Model = observer(
  ({
    children,
    onClick,
    overlayWrapperCss,
    modelContainerCss,
    modelContainerClassName,
  }: any) => {
    const { isModelIsOpen } = modelStore;
    if (isModelIsOpen.length === 0) return null;

    const overlayWrapper = css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    `;

    const modelContainer = css({
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      "z-index": 1000,
      borderRadius: "0.5rem",
      padding: " 1rem 0",
    });

    return ReactDOM.createPortal(
      <>
        <div
          className={overlayWrapperCss ? overlayWrapperCss : overlayWrapper}
          onClick={onClick}
        ></div>
        <Column
          className={
            modelContainerCss
              ? `${modelContainerCss} ${modelContainerClassName}`
              : `${modelContainer} ${modelContainerClassName}`
          }
          onClick={() => console.log("model-container")}
        >
          {children}
        </Column>
      </>,
      document.getElementById("portal")!
    );
  }
);

export default Model;
