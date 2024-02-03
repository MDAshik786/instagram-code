import React from "react";
import Row from "../CommonField/RowField";
import SideBar from "../Components/SideBar/SideBar";
import { observer } from "mobx-react-lite";
import PostMoreOptionModel from "../Models/PostMoreOptionModel.tsx/PostMoreOptionModel";
import { modelStore } from "../Store/ModelStore";

const Layout = observer(({ children }: any) => {

const {postMoreOptionModel} = modelStore;

  return (
    <>
      <Row>
        <SideBar />
        {children}
      </Row>
      {/* <PostMoreOptionModel condition={postMoreOptionModel} /> */}
    </>
  );
});

export default Layout;
