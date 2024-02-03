import "./HamePage.scss";
import Layout from "../../Layout/Layout";
import StoryBar from "../../Components/Home/StoryBar/StoryBar";
import Row from "../../CommonField/RowField";
import { storyData } from "../../Datas/StoreData";
import Column from "../../CommonField/ColumnField";
import Post from "../../Components/Home/PostContainer/Post/Post";
import ProfileSuggestion from "../../Components/ProfileSuggestion/ProfileSuggestion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { modelStore } from "../../Store/ModelStore";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 8 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 8 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const { setIsModelIsOpen } = modelStore;

  const profileSuggestionRightAction = {
    name: "Switch",
    onClick: () => setIsModelIsOpen("switchAccount"),
    className: "switch-link icons",
  };

  return (
    <Layout>
      <Row className="homepage" gap="1.5rem">
        <Column className="store-and-post-container">
          <Row
            gap="0.7rem"
            className="home-storyBar"
            horizontalAlign="center"
            padding="1rem"
          >
            <Carousel
              className="home-storyBar"
              responsive={responsive}
              swipeable={true}
              draggable={true}
              showDots={false}
              ssr={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={"desktop"}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {storyData &&
                storyData.map((story, index) => (
                  <StoryBar value={true} key={index} />
                ))}
            </Carousel>
          </Row>
          <Column>
            <Post />
          </Column>
        </Column>
        <Column padding="1rem">
          <ProfileSuggestion
            profileSuggestionRightAction={profileSuggestionRightAction}
          />
        </Column>
      </Row>
    </Layout>
  );
};

export default HomePage;
