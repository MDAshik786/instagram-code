import "./SearchBar.scss";
import React from "react";
import Column from "../../CommonField/ColumnField";
import InputField from "../../CommonField/InputFiled";
import { searchStote } from "../../Store/SearchStore";
import { userDataType } from "../../Types/userType";
import Row from "../../CommonField/RowField";
import { RxCross1 } from "react-icons/rx";
import ProfileSuggestion from "../ProfileSuggestion/ProfileSuggestion";
import Model from "../../CommonField/Model/Model";
import { css } from "@emotion/css";
import { observer } from "mobx-react-lite";
import ButtonField from "../../CommonField/ButtonField";
import { RxCross2 } from "react-icons/rx";
import { sideBarStore } from "../../Store/SideBarStore";
import { modelStore } from "../../Store/ModelStore";
import { useLocation } from "react-router-dom";
import { locationPathName } from "../../CommonField/Location";

const SearchBar = observer(() => {
  const { searchInput, setSearchInput } = searchStote;
  const { sideBarData, setSideBarData } = sideBarStore;
  const { isModelIsOpen, setIsModelIsOpen } = modelStore;
  const location = useLocation();

  const serachBarData: userDataType[] = [
    {
      name: "SearchBar",
      type: "text",
      inputClassName: "search-input",
      placeHolder: "Search",
      value: searchInput,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchInput(e.target.value),
    },
  ];

  const array = [1, 2, 3, 4, 5, 58, 6, 7, 8, 9];

  const overlayWrapperCss = css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  `;

  const modelContainerCss = css`
    position: fixed;
    top: 0;
    left: 5%;
    bottom: 0;
    width: 25rem;
    background-color: white;
    z-index: 1000;
    border-radius: 0.5rem;
    padding: 2rem 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  `;

  const profileSugestionRightData = {
    name: <RxCross1 />,
    className: "",
  };

  return (
    <Model
      modelContainerCss={modelContainerCss}
      overlayWrapperCss={overlayWrapperCss}
      onClick={() => {
        setIsModelIsOpen("");
        setSideBarData(locationPathName(location.pathname));
      }}
    >
      <Column className="search-container" gap="1rem">
        <h3 className="search-heading">Search</h3>
        <Row className="input-container">
          <InputField userData={serachBarData} />
          <ButtonField className="cancel-button">
            <RxCross2 />
          </ButtonField>
        </Row>
        <Column className="result-container">
          {array.map((index: number) => (
            <ProfileSuggestion
              profileSuggestionRightAction={profileSugestionRightData}
              key={index}
            />
          ))}
        </Column>
      </Column>
    </Model>
  );
});

export default SearchBar;
