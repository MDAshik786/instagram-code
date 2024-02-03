import "./UserConditionBox.scss";
import ProfilePostIcon from "../../../Asserts/SVG_Components/ProfileIcons/ProfilePostIcon";
import ProfileSavedIcon from "../../../Asserts/SVG_Components/ProfileIcons/ProfileSavedIcon";
import ProfileTagedIcon from "../../../Asserts/SVG_Components/ProfileIcons/ProfileTagedIcon";
import Row from "../../../CommonField/RowField";
import Post from "../Post/Post";
const UserConditionBox = () => {
  return (
    <>
      <Row
        gap="1.5rem"
        horizontalAlign="center"
        verticalAlign="center"
        className="name-container"
      >
        <Row
          className="condition-box"
          gap="0.2rem"
          horizontalAlign="center"
          padding="1rem 0.5rem"
        >
          <ProfilePostIcon />
          <span className="name">POSTS</span>
        </Row>
        <Row
          className="condition-box"
          gap="0.2rem"
          horizontalAlign="center"
          padding="1rem 0.5rem"
        >
          <ProfileSavedIcon />
          <span className="name">SAVED</span>
        </Row>
        <Row
          className="condition-box"
          gap="0.2rem"
          horizontalAlign="center"
          padding="1rem 0.5rem"
        >
          <ProfileTagedIcon />
          <span className="name">TAGGED</span>
        </Row>
      </Row>
      <Post />
    </>
  );
};

export default UserConditionBox;
