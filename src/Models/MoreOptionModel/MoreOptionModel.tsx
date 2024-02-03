import { useNavigate } from "react-router-dom";
import Model from "../../CommonField/Model/Model";
import "./MoreOptionModel.scss";

const MoreOptionModel = () => {
  const moreOptionData = [
    {
      icons: "aa",
      name: "Settings",
      onClick: () => useNavigate,
      className: "more-option-content",
    },
    {
      icons: "aa",
      name: "Your Activity",
      onClick: () => useNavigate,
      className: "more-option-content",
    },
    {
      icons: "aa",
      name: "Saved",
      onClick: () => useNavigate,
      className: "more-option-content",
    },
    {
      icons: "aa",
      name: "Switch appearance",
      onClick: () => useNavigate,
      className: "more-option-content",
    },
    {
      icons: "aa",
      name: "Report a problem",
      onClick: () => useNavigate,
      className: "more-option-content",
    },
  ];

  return (<Model>
    
  </Model>);
};

export default MoreOptionModel;
