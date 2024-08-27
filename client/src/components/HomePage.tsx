import React from "react";
import { FcLike } from "react-icons/fc";
import { FaCommentAlt } from "react-icons/fa";
const HomePage = () => {
  const posts = [
    {
      username: "Vin Diesel",
      profileImage:
        "https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      timeAgo: "1h",
      postImage:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      likedBy: ["sarasshree", "others"],
      postText:
        "Monsoon fury rained havoc in various parts of Himachal Pradesh this year with the death toll crossing 260. The rains...",
    },
    {
      username: "Miley Cyrus",
      profileImage:
        "https://plus.unsplash.com/premium_photo-1684953583774-ccdded89e093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      timeAgo: "1d",
      postImage:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      likedBy: ["sarasshree", "others"],
      postText:
        "The Union Cabinet on Monday (September 18) approved the Women Reservation Bill that grants 33 percent reservation for...",
    },
    {
      username: "Katy Perry",
      profileImage:
        "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg",
      timeAgo: "5h",
      postImage:
        "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      likedBy: ["sarasshree", "others"],
      postText: "Pal Yaad Aayenge Wo Pal!...",
    },
    {
      username: "Lady Gaga",
      profileImage:
        "https://images.unsplash.com/photo-1567591370504-80142b28f1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      timeAgo: "5d",
      postImage:
        "https://images.unsplash.com/photo-1694676517357-25cd4d8f67f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
      likedBy: ["sarasshree", "others"],
      postText:
        "Monsoon fury rained havoc in various parts of Himachal Pradesh this year with the death toll crossing 260. The rains...",
    },
    {
      username: "Nicki Minaj",
      profileImage:
        "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_1280.jpg",
      timeAgo: "1w",
      postImage:
        "https://images.unsplash.com/photo-1692885228334-e3cdcb9cfad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      likedBy: ["sarasshree", "others"],
      postText:
        "A blog post title’s quality also depends on your goals. What works for increasing click-through rates might not work for social shares...",
    },
  ];

  return (
    <>
      <section className="stories">
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Game On</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Take a Stand</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">You got this</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">#skater girl</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Game On</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Take a Stand</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">You got this</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518144591331-17a5dd71c477?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">#skater girl</p>
        </div>
      </section>
     
      <section className="">
        <div className="post-area px-4">
          {posts.map((post) => {
            return (
              <div className="post-main  border rounded-lg shadow-lg mt-10">
                <div className="post-header">
                  <div className="post-left-header">
                    <div className="post-image">
                      <img src={post.profileImage} alt="" />
                    </div>
                    <p className="post-username">{post.username}</p>
                    <i className="fa-solid fa-certificate"></i>
                    <span className="one-day">{post.timeAgo} </span>
                  </div>
                </div>
                <div className="post-main-image">
                  <img src={post.postImage} alt="" />
                </div>

                <div className="post-description p-2">
                  <p className="title text-sm font-bold">
                    {post.postText}
                    <br /> read more
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomePage;
