import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

const BlogDetails2 = () => {
  const params = useParams();
  console.log("params", params);
  const [postData, setPostData] = useState(null);
  const List = [
    {
      id: "user1",
      image:
        "https://newbreedtraining.com/wp-content/uploads/2023/02/Sticker-Blog-GI-Joe.png",
      title: "G.I. Joe and the APEST Armed Forces",
      date: "February 24, 2023",
      des: "Because NewBreed trains teams for multiplication instead of the solo hero leader, for Exponential this year, NewBreed is going to be giving away famous team-up stickers. These aren’t your Nana’s stickers either. These are stickers with a purpose. They’re stickers about teams, true, but they’re also stickers about APEST. Have you ever thought about the…",
    },
    {
      id: "user2",
      image:
        "https://newbreedtraining.com/wp-content/uploads/2023/02/Sticker-Blog-LOTR.png",
      title: "APEST Fellowship",
      date: "February 23, 2023",
      des: "Because NewBreed trains teams for multiplication instead of the solo hero leader, for Exponential this year, NewBreed is going to be giving away famous team-up stickers. These aren’t your Nana’s stickers either. These are stickers with a purpose. They’re stickers about teams, true, but they’re also stickers about APEST.  Have you ever thought about the…",
    },
    {
      id: "user3",
      image:
        "https://newbreedtraining.com/wp-content/uploads/2023/02/spark-blog.png",
      title: "The Spark that Sets the World Ablaze",
      date: "February 18, 2023",
      des: "Each believer has the potential to light a spark that sets the world ablaze. That’s why you’re dangerous. That’s probably why it’s easier, less messy, and more convenient to keep you packed like a lemming into predictable rows of pews week after week. Acts is the story of the Spirit of God raging like a…",
    },
  ];

  useEffect(() => {
    let filtered = List.filter(function (val) {
      return val.id === params.id;
    });
    setPostData(filtered);
  }, []);
  return (
    <div>
      <h1>Blog Details 2</h1>
      {postData !== null && (
        <div>
          <img src={postData[0].image} style={{ width: "100%" }} />
          <h1>{postData[0].title}</h1>
          <h6>{postData[0].date}</h6>
          <p>{postData[0].des}</p>
          <FacebookShareButton
            url={"https://www.npmjs.com/package/react-share-social"}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <EmailShareButton
            url={"https://www.npmjs.com/package/react-share-social"}
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      )}
    </div>
  );
};
export default BlogDetails2;
