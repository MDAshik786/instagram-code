import "./PostMoreOptionModel.scss";
import Model from "../../CommonField/Model/Model";
import { modelStore } from "../../Store/ModelStore";
import { observer } from "mobx-react-lite";

export type PostMoreOptionModelPropsType = {
  condition: boolean;
};

const PostMoreOptionModel = observer(() => {
  const { setPostMoreOptionModel, setIsModelIsOpen } = modelStore;

  const postMoreOptionData = [
    {
      name: "Report",
    },
    {
      name: "unfollow",
    },
    {
      name: "Add to favourites",
    },
    {
      name: "Go to post",
    },
    {
      name: "About this account",
    },
    {
      name: "Cancel",
      onClick: () => setIsModelIsOpen(""),
    },
  ];

  return (
    <Model
      width="28rem"
      onClick={() => setIsModelIsOpen("")}
      verticalAlign="center"
      horizontalAlign="center"
    >
      {postMoreOptionData &&
        postMoreOptionData.map((data, index: number) => (
          <p className="content-name" key={index} onClick={data.onClick}>
            {data.name}
          </p>
        ))}
    </Model>
  );
});

export default PostMoreOptionModel;
