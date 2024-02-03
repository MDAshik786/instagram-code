import "./MessageUser.scss";
import Column from "../../../CommonField/ColumnField";
import Row from "../../../CommonField/RowField";
import Layout from "../../../Layout/Layout";
import { userStore } from "../../../Store/UserStore";
import { IoIosArrowDown } from "react-icons/io";
import EditIcon from "../../../Asserts/SVG_Components/EditIcon";
import ProfileSuggestion from "../../ProfileSuggestion/ProfileSuggestion";
import { modelStore } from "../../../Store/ModelStore";

const MeassageUsers = () => {
  const { inputData } = userStore;
  const { setIsModelIsOpen } = modelStore;
  const profileSuggestionRightData = {
    name: <span className="active-icons"></span>,
  };
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <Layout>
      <Column className="message-user-container" gap="1rem">
        <Row
          horizontalAlign="end"
          verticalAlign="space-between"
          padding="0.7rem"
          className="username-container"
        >
          <Row
            horizontalAlign="end"
            gap="0.3rem"
            className="username highlight"
          >
            {inputData.userName}{" "}
            <IoIosArrowDown
              className="icons down-arrow"
              onClick={() => setIsModelIsOpen("switchAccount")}
            />
          </Row>
          <EditIcon onClick={() => setIsModelIsOpen("newMessage")} />
        </Row>
        <Row
          horizontalAlign="center"
          verticalAlign="space-between"
          padding="0.7rem"
        >
          <p className="highlight">Messages</p>
          <p className="gray-conetent request-content">Requests</p>
        </Row>
        <Column className="profile-suggestion-container">
          {array.map((index: number) => (
            <ProfileSuggestion
              profileSuggestionRightAction={profileSuggestionRightData}
              key={index}
            />
          ))}
        </Column>
      </Column>
    </Layout>
  );
};

export default MeassageUsers;
