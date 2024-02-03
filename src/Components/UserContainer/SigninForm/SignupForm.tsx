import "./SigninForm.scss";
import { userDataType } from "../../../Types/userType";
import { userStore } from "../../../Store/UserStore";
import Column from "../../../CommonField/ColumnField";
import InputField from "../../../CommonField/InputFiled";
import ButtonField from "../../../CommonField/ButtonField";
import Row from "../../../CommonField/RowField";
import UserTemplate from "../UserTemplate/UserTemplate";
import { observer } from "mobx-react-lite";
import jsonData from "../../../JsonFiles/user.json";

const SignupForm = observer(() => {
  const {
    inputData: { email, password },
    isPosswordVisibility,
    setInputData,
    setIsPosswordVisibility,
  } = userStore;

  const { userData, signinData } = jsonData;
  const { emailPlaceHolder, passwordPlaceHolder } = userData;
  const { buttonTitle, forgotPassword, orTitle } = signinData;

  const signUpFormData: userDataType[] = [
    {
      name: "email",
      type: "text",
      inputClassName: "user-input",
      containerClassName: "user-container",
      placeHolder: emailPlaceHolder,
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInputData(e),
    },
    {
      name: "password",
      type: isPosswordVisibility ? "text" : "password",
      inputClassName: "user-input",
      containerClassName: "user-container passeord-input",
      placeHolder: passwordPlaceHolder,
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInputData(e),
      autoComplete: "off",
      passordVisibility:
        password?.length === 0
          ? undefined
          : isPosswordVisibility
          ? "Show"
          : "Hide",
      passwordClassName: "password-content",
      passwordOnClick: setIsPosswordVisibility,
    },
  ];
  return (
    <UserTemplate>
      <Column
        verticalAlign="center"
        horizontalAlign="center"
        gap="1rem"
        className="form-container"
      >
        <InputField userData={signUpFormData} />

        <ButtonField className="signip-button">{buttonTitle}</ButtonField>
        <Row verticalAlign="center" horizontalAlign="center" gap="0.5rem">
          <span className="border-line"></span> <span>{orTitle}</span>{" "}
          <span className="border-line"></span>
        </Row>
        <span className="blue-content">{forgotPassword}</span>
      </Column>
    </UserTemplate>
  );
});

export default SignupForm;
