import "./SignupForm.scss";
import Column from "../../../CommonField/ColumnField";
import { userStore } from "../../../Store/UserStore";
import { observer } from "mobx-react-lite";
import { userDataType } from "../../../Types/userType";
import InputField from "../../../CommonField/InputFiled";
import ButtonField from "../../../CommonField/ButtonField";
import UserTemplate from "../UserTemplate/UserTemplate";
import jsonData from "../../../JsonFiles/user.json";

const SignupForm = observer(() => {
  const {
    inputData: { firstName, lastName, email, phone, userName, password, dob },
    setInputData,
    isPosswordVisibility,
    setIsPosswordVisibility,
  } = userStore;

  const { signupData, userData } = jsonData;
  const {
    emailPlaceHolder,
    firstNamePlaceHolder,
    lastNamePlaceHolder,
    passwordPlaceHolder,
    phonePlaceHolder,
    userNamePlaceHolder,
  } = userData;

  const {
    buttonTitle,
    firstContent,
    secondContent,
    heading,
    linkTags: { cookiesPolicy, privacyPolicy, terms, learnMore },
  } = signupData;

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
      name: "userName",
      type: "text",
      inputClassName: "user-input",
      containerClassName: "user-container",
      placeHolder: userNamePlaceHolder,
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInputData(e),
    },
    {
      name: "firstName",
      type: "text",
      inputClassName: "user-input",
      containerClassName: "user-container",
      placeHolder: firstNamePlaceHolder,
      value: firstName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInputData(e),
    },
    {
      name: "lastName",
      type: "text",
      inputClassName: "user-input",
      containerClassName: "user-container",
      placeHolder: lastNamePlaceHolder,
      value: lastName,
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
    {
      name: "phone",
      type: "text",
      inputClassName: "user-input",
      containerClassName: "user-container",
      placeHolder: phonePlaceHolder,
      value: phone,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInputData(e),
    },
    {
      name: "dob",
      type: "date",
      inputClassName: "user-input",
      containerClassName: "user-container",
      value: dob,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInputData(e),
    },
  ];

  return (
    <UserTemplate>
      <p className="heading">{heading}</p>
      <Column
        verticalAlign="center"
        horizontalAlign="center"
        gap="0.7rem"
        className="form-container"
      >
        <InputField userData={signUpFormData} />

        <p className="content">
          {firstContent} <span className="blue-content">{learnMore}</span>
        </p>
        <p className="content">
          {secondContent}
          <span className="blue-content">T{terms}</span>{" "}
          <span className="blue-content">{privacyPolicy}</span>{" "}
          <span className="blue-content">{cookiesPolicy}</span>
        </p>

        <ButtonField className="signup-button">{buttonTitle}</ButtonField>
      </Column>
    </UserTemplate>
  );
});

export default SignupForm;
