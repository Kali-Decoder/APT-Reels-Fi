import { useDataContext } from "@/context/DataContext";
import React from "react";

const HomePage = () => {
  const { setTab } = useDataContext();
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
      <div className="px-4 flex gap-4 mt-5">
        <div
          className="stories__single__img-holder__inner"
          style={{
            backgroundImage: `url('https://avatars.githubusercontent.com/u/82640789?s=400&u=b3a861a9ecd3bf9a3be5cb8e7b8318f35f170c6a&v=4')`,
          }}
          onClick={() => setTab("user-dashboard")}
        ></div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Nikku.Dev</h1>
          <p className="text-blue-400">@Kali-Decoder</p>

        </div>
      </div>
      <div className="px-4 flex gap-4 mt-5">
        <h1>Creators</h1>
        </div>
      <section className="stories bg-gray-900 text-white py-6">
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://yt3.googleusercontent.com/ytc/AIdro_mbILV2Ijbz07gfxUlbDTKGTJBltNGMvhm4_9g3FzhLakI=s900-c-k-c0x00ffffff-no-rj')`,
              }}
              onClick={() => setTab("profile")}
            ></div>
          </div>
          <p className="stories__single__description">Ashish</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qEgGolGjSIrH-f9OCrHdxb8t1V7-iHm9bA&s')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Purav Bhai</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://openthemagazine.com/wp-content/uploads/2023/08/Stargazer2.jpg')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Diljit Paaji</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://acadium.com/wp-content/uploads/2020/10/Why-Youtuber-make-great-content-marketers.jpg')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Skater Boy</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKMERlr_5V4O41uLklnKwB1Jz3oBtUia8Cg&s')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Angel Priya</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              onClick={() => setTab("profile")}
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDVCRQ8dya4vAX5W-h34wSRtchVvwW5YXdQ&s')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Bhuvam Bam</p>
        </div>
        <div className="stories__single">
          <div className="stories__single__img-holder">
            <div
              className="stories__single__img-holder__inner"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmJCtY7fshsiAM-Bp-Hz2ZTuT5qOTDINNnw&s')`,
              }}
            ></div>
          </div>
          <p className="stories__single__description">Round to Hell</p>
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
      <div className="px-4 flex gap-4 mt-5">
        <h1>Your Feed</h1>
        </div>
      <section className="bg-gray-900 text-white py-0">
        <div className="post-area px-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="post-main border border-gray-700 rounded-lg shadow-lg bg-gray-800 mt-10"
            >
              <div className="post-header flex items-center p-4">
                <div className="post-left-header flex items-center space-x-3">
                  <div className="post-image">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={post.profileImage}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="post-username text-lg font-semibold">
                      {post.username}
                    </p>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <i className="fa-solid fa-certificate"></i>
                      <span className="one-day">{post.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-main-image">
                <img
                  className="w-full rounded-b-lg"
                  src={post.postImage}
                  alt=""
                />
              </div>
              <div className="post-description p-4">
                <p className="title text-sm font-bold text-gray-300">
                  {post.postText}
                  <br /> read more
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
