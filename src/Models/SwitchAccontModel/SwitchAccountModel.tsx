import "./SwitchAccountModel.scss";
import Model from "../../CommonField/Model/Model";
import Column from "../../CommonField/ColumnField";
import ProfileSuggestion from "../../Components/ProfileSuggestion/ProfileSuggestion";
import { RxCross2 } from "react-icons/rx";
import { modelStore } from "../../Store/ModelStore";

const SwitchAccountModel = () => {
  const { setIsModelIsOpen } = modelStore;

  const profileSuggestionRightAction = {
    name: "Verified",
    className: "profile-suggestion-verified",
  };

  return (
    <Model
      modelContainerClassName="switch-account-model"
      onClick={() => setIsModelIsOpen("")}
    >
      <RxCross2
        className="cross-icons icons"
        onClick={() => setIsModelIsOpen("")}
      />
      <h3>Switch accounts</h3>
      <Column className="profile-cotainer" horizontalAlign="center">
        <ProfileSuggestion
          profileSuggestionRightAction={profileSuggestionRightAction}
        />
      </Column>
      <p className="blue-link">Log in to an Existing Account</p>
    </Model>
  );
};

export default SwitchAccountModel;
