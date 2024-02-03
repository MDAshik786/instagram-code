import react from "react";
import Column from "../../CommonField/ColumnField";
import SignupForm from "../../Components/UserContainer/SignupForm/SignupForm";
import SigninForm from "../../Components/UserContainer/SigninForm/SignupForm";
import { observer } from "mobx-react-lite";
import { userStore } from "../../Store/UserStore";

const UserPage = observer(() => {
  const { userExistOrNot } = userStore;

  return (
    <>
      <Column>{userExistOrNot ? <SigninForm /> : <SignupForm />}</Column>
    </>
  );
});

export default UserPage;
