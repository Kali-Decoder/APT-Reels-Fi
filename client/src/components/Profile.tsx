import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import Modal from "./InvestModal";


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
  avatarUrl: "https://avatars.githubusercontent.com/u/82640789?v=4",
  name: "NikkuDev.eth",
  description: "Bringing you closer to the people and things you love. ❤️",
  stats: {
    posts: "6,126",
    investors: "317 M",
    growth: "+225",
  },
  chartData: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        pointBackgroundColor: "rgba(153, 102, 255, 1)",
        pointBorderColor: "#fff",
        data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
      },
    ],
  },
  photos: [
    "https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
        <p className="text-gray-400">{profileData.description}</p>
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

      <div className="rounded-lg p-4 mt-10 bg-gray-800 shadow-lg">
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
