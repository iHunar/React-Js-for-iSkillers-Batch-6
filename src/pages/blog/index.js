import React from "react";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
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
  return (
    <div>
      <h1>Blog</h1>
      {List.map((v, i) => {
        return (
          <div
            key={i}
            style={{ border: "2px solid red", padding: "20px", margin: "20px" }}
          >
            <img src={v.image} style={{ width: "100%" }} />
            <h1>{v.title}</h1>
            <h6>{v.date}</h6>
            <p>{v.des}</p>
            <button onClick={() => navigate("/blog-details", { state: v })}>
              View more
            </button>
            <button onClick={() => navigate(`/blog-details-2/${v.id}`)}>
              View
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
