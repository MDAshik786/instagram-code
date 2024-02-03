import "./SendNewMessage.scss";
import Column from "../../../CommonField/ColumnField";
import MessageIcon from "../../../Asserts/SVG_Components/MessageIcon";
import ButtonField from "../../../CommonField/ButtonField";

const SendNewMessage = () => {
  return (
    <Column
      verticalAlign="center"
      horizontalAlign="center"
      gap="1rem"
      className="send-new-message"
    >
      <MessageIcon />
      <p className="heading">Your messages</p>
      <p className="gray-conetent">
        Send private photos and messages to a friend or group.
      </p>
      <ButtonField className="send-button">Send Message</ButtonField>
    </Column>
  );
};

export default SendNewMessage;
