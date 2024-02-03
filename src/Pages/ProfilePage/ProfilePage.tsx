import "./ProfilePae.scss";
import Column from "../../CommonField/ColumnField";
import ProfileDetails from "../../Components/Profile/ProfileDetails/ProfileDetails";
import Layout from "../../Layout/Layout";
import UserConditionBox from "../../Components/Profile/UserConditionBox/UserConditionBox";

const ProfilePage = () => {
  return (
    <Layout>
      <Column className="profile-container" padding="1rem">
        <ProfileDetails />
        <UserConditionBox />
      </Column>
    </Layout>
  );
};

export default ProfilePage;
