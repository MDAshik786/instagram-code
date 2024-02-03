
import { modelStore } from "../Store/ModelStore";
import PostMoreOptionModel from "../Models/PostMoreOptionModel.tsx/PostMoreOptionModel";
import { observer } from "mobx-react-lite";
import SearchBar from "../Components/SearchBar/SearchBar";
import SwitchAccountModel from "../Models/SwitchAccontModel/SwitchAccountModel";
import NewMessageModel from "../Models/NewMessageModel/NewMessageModel";
import CreateNewPostModel from "../Models/CreateNewPostModel/CreateNewPostModel";

const PopupModel = observer(() => {
  const { isModelIsOpen } = modelStore;

  return (
    <>
      {isModelIsOpen === "postMoreOption" ? (
        <PostMoreOptionModel />
      ) : isModelIsOpen === "search" ? (
        <SearchBar />
      ) : isModelIsOpen === "switchAccount" ? (
        <SwitchAccountModel />
      ) : isModelIsOpen === "newMessage" ? (
        <NewMessageModel />
      ) : isModelIsOpen === "newPost" ? (
        <CreateNewPostModel />
      ) : null}
    </>
  );
});

export default PopupModel;
