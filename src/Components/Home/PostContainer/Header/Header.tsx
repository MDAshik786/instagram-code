import "./Header.scss";
import Row from "../../../../CommonField/RowField";
import { userStore } from "../../../../Store/UserStore";
import StoryBar from "../../StoryBar/StoryBar";
import { BsThreeDots } from "react-icons/bs";
import { observer } from "mobx-react-lite";
import { modelStore } from "../../../../Store/ModelStore";

const Header = observer(() => {
  const {
    inputData: { userName },
  } = userStore;
  const { setPostMoreOptionModel, setIsModelIsOpen } = modelStore;

  return (
    <Row
      verticalAlign="space-between"
      padding="0.5rem 0.3rem"
      horizontalAlign="center"
    >
      <Row horizontalAlign="center" gap="0.5rem" className="header">
        <StoryBar value={false} />
        <p className="user-name">{userName}</p>
        <p className="timeing">• 3 m</p>
      </Row>
      <BsThreeDots onClick={() => setIsModelIsOpen("postMoreOption")} className="icons" />
    </Row>
  );
});

export default Header;
