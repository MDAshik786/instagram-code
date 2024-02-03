import "./CreateNewPostModel.scss";
import CreatePostIcons from "../../Asserts/SVG_Components/CreatePostIcons";
import ButtonField from "../../CommonField/ButtonField";
import Column from "../../CommonField/ColumnField";
import { RxCross2 } from "react-icons/rx";
import Model from "../../CommonField/Model/Model";
import { modelStore } from "../../Store/ModelStore";
import { sideBarStore } from "../../Store/SideBarStore";
import { locationPathName } from "../../CommonField/Location";
import { useLocation } from "react-router-dom";

const CreateNewPostModel = () => {
  const { setIsModelIsOpen } = modelStore;
  const { setSideBarData } = sideBarStore;
  const location = useLocation();
  return (
    <Model
      modelContainerClassName="create-new-post"
      onClick={() => {
        setIsModelIsOpen("");
        setSideBarData(locationPathName(location.pathname));
      }}
    >
      <>
        <h3 className="heading">Create new Post</h3>
        <RxCross2
          className="cross-icons icons"
          onClick={() => setIsModelIsOpen("")}
        />
        <Column
          className="new-post-container"
          verticalAlign="center"
          horizontalAlign="center"
          gap="1.2rem"
        >
          <CreatePostIcons />
          <p className="newpost-content">Drag photos and videos here</p>
          <ButtonField className="select-button highlight">
            Select From Computer
          </ButtonField>
        </Column>
      </>
    </Model>
  );
};

export default CreateNewPostModel;
