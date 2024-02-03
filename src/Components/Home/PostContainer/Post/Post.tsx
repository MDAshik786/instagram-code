import "./Post.scss";
import Header from "../Header/Header";
import Column from "../../../../CommonField/ColumnField";
import ImageField from "../../../../CommonField/ImageField";
import img1 from "../../../../Asserts/natural.jpg";
import img2 from "../../../../Asserts/natural2.jpg";
import img3 from "../../../../Asserts/natural3.jpg";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChatText } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import Row from "../../../../CommonField/RowField";
import ButtonField from "../../../../CommonField/ButtonField";
import likeGif from "../../../../Asserts/like-heart-4-unscreen.gif";
import { modelStore } from "../../../../Store/ModelStore";
import { observer } from "mobx-react-lite";
import LikeIcons from "../../../../Asserts/SVG_Components/PostIcons/LikeIcon";

const Post = observer(() => {
  const imgData = [img1, img2, img3];

  const [imgState, setImgState] = useState<number>(0);
  const { likeGifModel } = modelStore;

  const handlePostImage = (value: number) => {
    if (value === -1 && imgState === 0) setImgState(() => imgData.length - 1);
    else if (value === 1 && imgState === imgData.length - 1)
      setImgState(() => 0);
    else setImgState(() => imgState + value);
  };

  return (
    <Column className="single-post">
      <Header />
      <Row className="post-button-container">
        <Row className="post-img-container">
          {imgData &&
            imgData.map((img, index: number) => (
              <ImageField
                src={img}
                alt={"post"}
                className="post-img"
                style={{ translate: `${-100 * imgState}%` }}
                key={index}
              />
            ))}
        </Row>
        {likeGifModel && (
          <ImageField src={likeGif} alt="like" className="like-gif" />
        )}
        {imgState !== 0 && (
          <ButtonField
            className="arrow-button left-arrow-button"
            onClick={() => handlePostImage(-1)}
          >
            <FaAngleLeft className="left icons" />
          </ButtonField>
        )}
        {imgState !== imgData.length - 1 && (
          <ButtonField
            className="arrow-button right-arrow-button"
            onClick={() => handlePostImage(1)}
          >
            <FaAngleRight className="right icons" />
          </ButtonField>
        )}
      </Row>
      <Row
        padding="0.5rem 0.1rem"
        verticalAlign="space-between"
        horizontalAlign="center"
        className="like-comment-container"
      >
        <Row gap="1rem" verticalAlign="center" horizontalAlign="center">
          <LikeIcons />
          <BsChatText className="comment icons" />
          <LuSend className="send icons" />
        </Row>
        <IoBookmarkOutline className="save icons" />
      </Row>
      <Column gap="0.5rem" verticalAlign="center">
        <p className="like-container">
          1000 <span className="likes">likes</span>
        </p>
        <Row className="post-content" gap="0.5rem">
          <p className="user-name">rio__ashik</p>
          <p>First post for the year had to be this🤍</p>
        </Row>
        <p className="gray-text">... more</p>
        <p className="gray-text">view all 12 comments</p>
        <p className="gray-text">Add a comment...</p>
      </Column>
    </Column>
  );
});

export default Post;
