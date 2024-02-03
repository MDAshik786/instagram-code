import "./UserTemplate.scss";
import Column from "../../../CommonField/ColumnField";
import ImageField from "../../../CommonField/ImageField";
import logoImg from "../../../Asserts/instagram-text.svg";
import Row from "../../../CommonField/RowField";
import { observer } from "mobx-react-lite";
import { userStore } from "../../../Store/UserStore";
import jsonFile from "../../../JsonFiles/user.json";

const UserTemplate = observer(({ children }: any) => {
  const { userExistOrNot, setUserExistOrNot } = userStore;
  const { signinData, signupData } = jsonFile;
  const { accountContent, buttonTitle } = userExistOrNot
    ? signinData
    : signupData;
  return (
    <Column
      verticalAlign="center"
      horizontalAlign="center"
      gap="1rem"
      className="user-main"
    >
      <form action="">
        <Column
          verticalAlign="center"
          horizontalAlign="center"
          gap="1rem"
          padding="1rem"
          className="user-form-container"
        >
          <ImageField src={logoImg} alt="Instagram" />
          {children}
        </Column>
      </form>
      <Row
        verticalAlign="center"
        gap="0.2rem"
        padding="1.5rem"
        className="already-account"
      >
        <p className="content">{accountContent}</p>{" "}
        <span
          className="blue-content"
          onClick={() => setUserExistOrNot(!userExistOrNot)}
        >
          {buttonTitle}
        </span>
      </Row>
    </Column>
  );
});

export default UserTemplate;
