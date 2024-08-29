import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import Modal from "./InvestModal";
import { useDataContext } from "@/context/DataContext";


interface ProfileStats {
  posts: string;
  investors: string;
  growth: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    borderColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
    data: number[];
  }[];
}

interface ProfileData {
  avatarUrl: string;
  name: string;
  description: string;
  stats: ProfileStats;
  chartData: ChartData;
  photos: string[];
}

const profileData: ProfileData = {
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDVCRQ8dya4vAX5W-h34wSRtchVvwW5YXdQ&s",
  name: "Bhuvam Bam",
  description: "Taaza Khabar S2 Announcement ⬇️ ❤️",
  stats: {
    posts: "1,635",
    investors: "19.4 M",
    growth: "+225",
  },
  chartData: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "posts",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        data: [40, 55, 30, 65, 50, 45, 70, 60, 35],
      },
      {
        label: "engagement",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        pointBackgroundColor: "rgba(153, 102, 255, 1)",
        pointBorderColor: "#fff",
        data: [115, 140, 100, 135, 120, 110, 155, 130, 90],
      },
    ],
    
    
  },
  photos: [
    "https://static.toiimg.com/thumb/imgsize-199369,msid-68636148,width-400,resizemode-4/68636148.jpg",
    "https://www.cityairnews.com/uploads/images/image-750x-2024-06-20-12:51:01pm-6673d85de46cc.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIRgMz9hLd4t785oHIk3dEqXq_tDd-svmbw&s",
    "https://img.mensxp.com/media/content/2020/Jul/Exclusive-Bhuvan-Bam-On-His-Music-and-Creating-Content-In-A-Lockdown--1200x900_5f190a9506f15.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GR0s5CjNv6jL_qlIeSesjAV8krWCMI0C0w&s",
    "https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/15133610/BhuvanBam-65.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xEcR7nu4OeOWd6EQT3XDplcfGJWmYP8HXQ&s",
    "https://pbs.twimg.com/profile_images/856580774220357634/H35WMMje_400x400.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvz4c20poGY2lEGNHX_zjoDKITulYdNmfpA&s",
    "https://i.pinimg.com/736x/cf/ec/65/cfec65e14ade1eca176edc1f2dd2f9ce.jpg",
  ],
};

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
 
  return (
    <div className="container-insta w-full text-white">
      <section className="stats mt-4 flex items-center">
        <div
          className="stats__img-holder border-2 border-gray-600 w-24 h-24 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('${profileData.avatarUrl}')` }}
        ></div>
        <div className="stats__data ml-4 flex">
          {Object.entries(profileData.stats).map(([key, value]) => (
            <div key={key} className="stats__data__point mr-4">
              <div className="stats__data__point__value text-lg font-semibold text-white">
                {value}
              </div>
              <div className="stats__data__point__description text-gray-400">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="description mt-4">
        <h2 className="description__title text-xl font-bold text-white">
          {profileData.name}
        </h2>
        <p className="text-white">{profileData.description}</p>
      </section>

      <section className="px-4 mt-4 flex items-center justify-between space-x-2">
        <button
          onClick={openModal}
          className="bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Invest Amount
        </button>
        <button className="bg-gray-700 text-gray-300 py-2 px-4 rounded-lg">
          Message
        </button>
      </section>

      <div className="rounded-lg mt-20 px-4  shadow-lg">
        <CChart
          type="line"
          data={profileData.chartData}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#E5E7EB", 
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: "#4B5563", 
                },
                ticks: {
                  color: "#93C5FD", 
                },
              },
              y: {
                grid: {
                  color: "#4B5563", 
                },
                ticks: {
                  color: "#F87171", 
                },
              },
            },
          }}
        />
      </div>

      <section className="grid grid-cols-2 gap-2 mt-10">
        {profileData.photos.map((photoUrl, index) => (
          <a
            key={index}
            href="#"
            className="grid__photo bg-cover bg-center h-32 rounded-lg border border-gray-700"
            style={{ backgroundImage: `url('${photoUrl}')` }}
          ></a>
        ))}
      </section>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Profile;
