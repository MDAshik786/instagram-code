import { observer } from "mobx-react-lite";
import "./ProfileDetails.scss";
import ProfileSettingIcons from "../../../Asserts/SVG_Components/ProfileIcons/ProfileSettingIcons";
import ButtonField from "../../../CommonField/ButtonField";
import Column from "../../../CommonField/ColumnField";
import Row from "../../../CommonField/RowField";
import { userStore } from "../../../Store/UserStore";
import StoryBar from "../../Home/StoryBar/StoryBar";

const ProfileDetails = observer(() => {
  const {
    inputData: { userName, name },
  } = userStore;
  return (
    <Row horizontalAlign="center" padding="2rem 1rem">
      <StoryBar value={true} />
      <Column gap="1.2rem" verticalAlign="center">
        {" "}
        <Row horizontalAlign="center" gap="1.2rem">
          <p className="user-name">{userName}</p>
          <ButtonField className="profile-button">Edit Profile</ButtonField>
          <ButtonField className="profile-button">View archive</ButtonField>
          <ProfileSettingIcons />
        </Row>
        <Row horizontalAlign="center" gap="1.5rem">
          <span className="counts">
            <b>6</b>
            Post
          </span>
          <span className="counts">
            <b>691</b>
            Followers
          </span>
          <span className="counts">
            <b>441</b>
            Following
          </span>
        </Row>
        <p>{name || "Ashik"}</p>
        <Column gap="0.3rem" verticalAlign="center" className="bio-container">
          <p>Nov 30🥀👣 </p>
          <p>#KCEIAN🖤👨‍🎓</p>
          <p> All Praises Gões Tó Göd👆</p>
        </Column>
      </Column>
    </Row>
  );
});

export default ProfileDetails;
