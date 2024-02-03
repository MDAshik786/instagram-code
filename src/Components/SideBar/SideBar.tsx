import "./Sidebar.scss";
import textLogo from "../../Asserts/instagram-text.svg";
import ImageField from "../../CommonField/ImageField";
import Column from "../../CommonField/ColumnField";
import homeLogo from "../../Asserts/home.svg";
import searchLogo from "../../Asserts/search.svg";
import exporeLogo from "../../Asserts/explore.svg";
import reelLogo from "../../Asserts/reel.svg";
import messageLogo from "../../Asserts/message.svg";
import notificationLogo from "../../Asserts/notification.svg";
import createLogo from "../../Asserts/create.svg";
import emptyProfileLogo from "../../Asserts/empty-profile.png";
import threadLogo from "../../Asserts/thread.png";
import moreLogo from "../../Asserts/more-logo.png";
import homeHoverLogo from "../../Asserts/HoverLogo/home.png";
import searchHoverLogo from "../../Asserts/HoverLogo/magnifying-glass.png";
import exporeHoverLogo from "../../Asserts/HoverLogo/explore.png";
import reelHoverLogo from "../../Asserts/HoverLogo/video.png";
import messageHoverLogo from "../../Asserts/HoverLogo/chat.png";
import notificationHoverLogo from "../../Asserts/HoverLogo/like.png";
import createHoverLogo from "../../Asserts/HoverLogo/page.png";
import threadHoverLogo from "../../Asserts/HoverLogo/threads.png";
import moreHoverLogo from "../../Asserts/HoverLogo/more.png";
import instagramLogo from "../../Asserts/instagram-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import SingleContent from "./SingleContent";
import { SideBarNamesType } from "../../Types/SideBarType";
import { useEffect, useState } from "react";
import { sideBarStore } from "../../Store/SideBarStore";
import { modelStore } from "../../Store/ModelStore";
import { locationPathName } from "../../CommonField/Location";

const SideBar = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const { sideBarData, setSideBarData } = sideBarStore;
  const { isModelIsOpen, setIsModelIsOpen } = modelStore;

  const sideBarDatas: SideBarNamesType[] = [
    {
      id: "home",
      name: "Home",
      img: homeLogo,
      clickedImg: homeHoverLogo,
      onClick: () => {
        setSideBarData("home");
        setIsModelIsOpen("");
        navigate("/");
      },
    },
    {
      id: "search",
      name: "Search",
      img: searchLogo,
      clickedImg: searchHoverLogo,
      onClick: () => {
        setIsModelIsOpen(isModelIsOpen === "search" ? "" : "search");
        setSideBarData("search");
      },
    },
    {
      id: "explore",
      name: "Explore",
      img: exporeLogo,
      clickedImg: exporeHoverLogo,
      onClick: () => navigate,
    },
    {
      id: "reels",
      name: "Reels",
      img: reelLogo,
      clickedImg: reelHoverLogo,
      onClick: () => navigate,
    },
    {
      id: "notification",
      name: "Notifications",
      img: notificationLogo,
      clickedImg: notificationHoverLogo,
      count: 2,
      onClick: () => navigate,
    },
    {
      id: "message",
      name: "Messages",
      img: messageLogo,
      clickedImg: messageHoverLogo,
      count: 2,
      onClick: () => {
        navigate("/message");
        setSideBarData("message");
      },
    },
    {
      id: "create",
      name: "Create",
      img: createLogo,
      clickedImg: createHoverLogo,
      onClick: () => {
        setIsModelIsOpen("newPost");
        setSideBarData("create");
      },
    },
    {
      id: "profile",
      name: "Profile",
      img: emptyProfileLogo,
      clickedImg: createHoverLogo,
      onClick: () => {
        navigate("/profile");
        setSideBarData("profile");
      },
    },
  ];

  const bottomSideBarContent: SideBarNamesType[] = [
    {
      id: "thread",
      name: "thread",
      img: threadLogo,
      clickedImg: threadHoverLogo,
      onClick: () => navigate,
    },
    {
      id: "more",
      name: "More",
      img: moreLogo,
      clickedImg: moreHoverLogo,
      onClick: () => navigate,
    },
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleSideBarSize = () => {
    if (
      isModelIsOpen === "search" ||
      sideBarData["message"] ||
      windowWidth < 1250 ||
      locationPathName(location.pathname) === "message"
    )
      return false;
    return true;
  };

  return (
    <>
      <Column
        className="sidebar-container"
        padding="1.5rem 1rem"
        verticalAlign="space-between"
        style={
          locationPathName(location.pathname) === "message"
            ? { width: "5.5rem" }
            : { width: "15rem" }
        }
      >
        <Column verticalAlign="center" gap="1.8rem">
          <ImageField
            src={handleSideBarSize() ? textLogo : instagramLogo}
            style={
              handleSideBarSize() ? { width: "6.5rem" } : { width: "2.5rem" }
            }
            alt="Instagram"
            className="logo"
          />
          <Column className="top" gap="0.2rem">
            {sideBarDatas &&
              sideBarDatas.map((data, index) => (
                <SingleContent
                  data={data}
                  key={index}
                  windowWidth={handleSideBarSize}
                />
              ))}
          </Column>
        </Column>
        <Column>
          {bottomSideBarContent &&
            bottomSideBarContent.map((data, index) => (
              <SingleContent
                data={data}
                key={index}
                windowWidth={handleSideBarSize}
              />
            ))}
        </Column>
      </Column>
    </>
  );
});

export default SideBar;
