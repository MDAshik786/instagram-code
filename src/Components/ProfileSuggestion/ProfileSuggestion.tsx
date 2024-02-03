import Column from "../../CommonField/ColumnField";
import ImageField from "../../CommonField/ImageField";
import Row from "../../CommonField/RowField";
import img from "../../Asserts/profile.jpg";
import "./ProfileSuggestion.scss";
import { profileSuggestionPropsType } from "../../Types/commonField";

const ProfileSuggestion = ({
  profileSuggestionRightAction,
}: profileSuggestionPropsType) => {
  return (
    <Row
      gap="1rem"
      horizontalAlign="center"
      verticalAlign="space-between"
      className="profile-suggestion"
      padding="1rem"
    >
      <Row gap="1rem" verticalAlign="center">
        <ImageField src={img} alt="Profile" />
        <Column gap="0.4rem" verticalAlign="center">
          <p className="user-name">rio__ashik</p>
          <p className="name">Mohamed Ashik B</p>
        </Column>
      </Row>
      <span
        className={profileSuggestionRightAction.className}
        onClick={profileSuggestionRightAction?.onClick}
      >
        {profileSuggestionRightAction.name}
      </span>
    </Row>
  );
};

export default ProfileSuggestion;
