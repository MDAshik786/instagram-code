import "./NewMessageModel.scss";
import Model from "../../CommonField/Model/Model";
import { RxCross2 } from "react-icons/rx";
import { modelStore } from "../../Store/ModelStore";
import Row from "../../CommonField/RowField";
import InputField from "../../CommonField/InputFiled";
import Column from "../../CommonField/ColumnField";
import ButtonField from "../../CommonField/ButtonField";
import { notificationStore } from "../../Store/NotificationStore";
import { userDataType } from "../../Types/userType";
import { observer } from "mobx-react-lite";

const NewMessageModel = observer(() => {
  const { setIsModelIsOpen } = modelStore;
  const { searchUser, setSearchUser } = notificationStore;

  const searchUserData: userDataType[] = [
    {
      name: "searchUser",
      type: "text",
      inputClassName: "searchUserInput",
      placeHolder: "Search...",
      value: searchUser,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchUser(e.target.value),
    },
  ];

  return (
    <Model
      modelContainerClassName="new-message-model"
      onClick={() => setIsModelIsOpen("")}
    >
      <>
        <h3 className="heading">New message</h3>

        <RxCross2
          className="cross-icons icons"
          onClick={() => setIsModelIsOpen("")}
        />
        <Row gap="0.7rem" className="meaasage-to-container">
          <span className="highlight">To:</span>
          <InputField userData={searchUserData} />
        </Row>
        <Column className="suggesed-container" padding="0.6rem 1rem">
          <p className="gray-conetent">No account found.</p>
        </Column>
        <ButtonField className="chat-button highlight">Chat</ButtonField>
      </>
    </Model>
  );
});

export default NewMessageModel;
