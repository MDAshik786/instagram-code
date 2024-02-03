import React from "react";
import ImageField from "../../CommonField/ImageField";
import Row from "../../CommonField/RowField";
import { sideBarStore } from "../../Store/SideBarStore";
import { SingleContentPropsType } from "../../Types/SideBarType";
import { observer } from "mobx-react-lite";
import { modelStore } from "../../Store/ModelStore";
import { locationPathName } from "../../CommonField/Location";
import { useLocation } from "react-router-dom";

const SingleContent = observer(
  ({ data, windowWidth }: SingleContentPropsType) => {
    const { sideBarData } = sideBarStore;
    const { isModelIsOpen } = modelStore;
    const location = useLocation();

    return (
      <Row
        onClick={data.onClick}
        gap="0.7rem"
        padding="1rem"
        horizontalAlign="center"
        className={sideBarData[data.id] ? "content visible-content" : "content"}
        style={windowWidth() ? { width: "100%" } : { width: "3.5rem" }}
      >
        <ImageField
          src={!sideBarData[data.id] ? data.img : data.clickedImg}
          alt={data.name}
        />
        {data.count && <span className="count">{data.count}</span>}
        {windowWidth() && <p>{data.name}</p>}
      </Row>
    );
  }
);

export default SingleContent;
