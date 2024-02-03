import "./StoryBar.scss";

import profile from "../../../Asserts/profile.jpg";
import Row from "../../../CommonField/RowField";
import Column from "../../../CommonField/ColumnField";

type storyBarType = {
  value: boolean;
};

const StoryBar = ({ value }: storyBarType) => {
  return (
    <>
      {value ? (
        <Column
          className="story-container item"
          verticalAlign="center"
          horizontalAlign="center"
          gap="0.3rem"
          padding="0.2rem"
        >
          <Row
            className="story-wrapper"
            verticalAlign="center"
            horizontalAlign="center"
          >
            <Row
              className="img-container"
              verticalAlign="center"
              horizontalAlign="center"
            >
              <img src={profile} alt="" />
            </Row>
          </Row>
          <p className="name">mkjbjukknk </p>
        </Column>
      ) : (
        <Row
          className="story-wrapper"
          verticalAlign="center"
          horizontalAlign="center"
        >
          <Row
            className="img-container"
            verticalAlign="center"
            horizontalAlign="center"
          >
            <img src={profile} alt="" />
          </Row>
        </Row>
      )}
    </>
  );
};

export default StoryBar;
