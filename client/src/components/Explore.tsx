import React, { useState } from 'react';
import { IoIosAirplane, IoIosCheckmarkCircle } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineSportsCricket } from "react-icons/md";
import ProfileCard from './UserProfileCard';

interface PlatformStep {
  id: string;
  title: string;
  date: string;
}

interface Role {
  id: number;
  title: string;
  icon: JSX.Element;
}

interface Profile {
  id: number;
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
  followers: number;
  following: number;
  role: string;
}

const platformSteps: PlatformStep[] = [
  { id: 'A', title: "Make your Account", date: "22 DEC 7:20 PM" },
  { id: 'B', title: "Scroll Your Feeds", date: "21 DEC 11 PM" },
  { id: 'C', title: "Explore Content Creator Profile", date: "21 DEC 9:34 PM" },
  { id: 'D', title: "Invest Your Amount", date: "21 DEC 9:34 PM" },
  { id: 'E', title: "Wait for Engagement", date: "21 DEC 9:34 PM" },
  { id: 'F', title: "Claim your Yield . That's It", date: "21 DEC 9:34 PM" }
];

const roles: Role[] = [
  { id: 0, title: "All", icon: <IoIosCheckmarkCircle size={30}/> },
  { id: 1, title: "bloggers", icon: <IoIosAirplane size={30}/> },
  { id: 2, title: "brand ambassadors", icon: <FaRegLightbulb size={30}/> },
  { id: 3, title: "copywriters", icon: <AiOutlineCheckCircle size={30}/> },
  { id: 4, title: "graphic designers", icon: <HiOutlineLightBulb size={30}/> },
  { id: 5, title: "influencers", icon: <MdOutlineSportsCricket size={30}/> },
  { id: 6, title: "photographers", icon: <HiOutlineLightBulb size={30}/> },
  { id: 7, title: "podcasters", icon: <IoIosCheckmarkCircle size={30}/> },
  { id: 8, title: "social media managers", icon: <IoIosCheckmarkCircle size={30}/> },
  { id: 9, title: "streamers", icon: <IoIosCheckmarkCircle size={30}/> },
  { id: 10, title: "videographers", icon: <IoIosCheckmarkCircle size={30}/> },
  { id: 11, title: "vloggers", icon: <IoIosCheckmarkCircle size={30}/> },
];

const profiles: Profile[] = [
  { 
    id: 1, 
    name: "Ashish", 
    username: "ashish_k", 
    bio: "Tech enthusiast and content creator", 
    avatarUrl: "https://yt3.googleusercontent.com/ytc/AIdro_mbILV2Ijbz07gfxUlbDTKGTJBltNGMvhm4_9g3FzhLakI=s900-c-k-c0x00ffffff-no-rj", 
    followers: 1200, 
    following: 300, 
    role: "content creators" 
  },
  { 
    id: 2, 
    name: "Purav Bhai", 
    username: "purav_bhai", 
    bio: "Lifestyle blogger and influencer", 
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qEgGolGjSIrH-f9OCrHdxb8t1V7-iHm9bA&s", 
    followers: 3400, 
    following: 400, 
    role: "influencers" 
  },
  { 
    id: 3, 
    name: "Diljit Paaji", 
    username: "diljit_paaji", 
    bio: "Musician and actor", 
    avatarUrl: "https://openthemagazine.com/wp-content/uploads/2023/08/Stargazer2.jpg", 
    followers: 2300, 
    following: 350, 
    role: "musicians" 
  },
  { 
    id: 4, 
    name: "Skater Boy", 
    username: "skater_boy", 
    bio: "Extreme sports athlete", 
    avatarUrl: "https://acadium.com/wp-content/uploads/2020/10/Why-Youtuber-make-great-content-marketers.jpg", 
    followers: 5400, 
    following: 450, 
    role: "athletes" 
  },
  { 
    id: 5, 
    name: "Angel Priya", 
    username: "angel_priya", 
    bio: "Social media influencer", 
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKMERlr_5V4O41uLklnKwB1Jz3oBtUia8Cg&s", 
    followers: 7500, 
    following: 500, 
    role: "influencers" 
  },
  { 
    id: 6, 
    name: "Bhuvam Bam", 
    username: "bhuvam_bam", 
    bio: "Comedian and content creator", 
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDVCRQ8dya4vAX5W-h34wSRtchVvwW5YXdQ&s", 
    followers: 5400, 
    following: 450, 
    role: "comedians" 
  },
  { 
    id: 7, 
    name: "Round to Hell", 
    username: "round_to_hell", 
    bio: "YouTube comedy channel", 
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmJCtY7fshsiAM-Bp-Hz2ZTuT5qOTDINNnw&s", 
    followers: 7500, 
    following: 500, 
    role: "comedians" 
  },
  { 
    id: 8, 
    name: "#Skater Girl", 
    username: "skater_girl", 
    bio: "Skateboarding champion", 
    avatarUrl: "https://images.unsplash.com/photo-1518144591331-17a5dd71c477?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    followers: 4300, 
    following: 350, 
    role: "athletes" 
  },
];

const Explore = () => {
  const [selectedRole, setSelectedRole] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role.title);
    setIsDropdownOpen(false);
  };

  const filteredProfiles = selectedRole === "All"
    ? profiles
    : profiles.filter(profile => profile.role === selectedRole);

  return (
    <div className="flex flex-col items-center py-8 bg-gray-900 text-white">
      <div className="w-[85%] max-w-3xl border border-gray-700 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="border-b p-6 bg-gray-700">
          <h6 className="text-lg font-semibold text-white">How the Platform Works</h6>
        </div>
        <div className="p-6">
          <div className="relative flex flex-col space-y-4">
            {platformSteps.map(step => (
              <div key={step.id} className="relative flex items-start space-x-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                  {step.id}
                </span>
                <div>
                  <h6 className="text-sm font-semibold text-white">{step.title}</h6>
           
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[85%] max-w-3xl mt-8 bg-transparent rounded-lg  shadow-md relative">
        <button
          onClick={handleDropdownToggle}
          className="block w-full bg-blue-500 text-white py-4 px-4 rounded-md text-sm font-medium flex items-center justify-between"
        >
          {selectedRole}
          <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10">
            {roles.map(role => (
              <button
                key={role.id}
                className={`flex items-center w-full text-left px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-700 ${selectedRole === role.title ? 'bg-gray-700' : ''}`}
                onClick={() => handleRoleSelect(role)}
              >
                <span className="mr-2">{role.icon}</span>
                {role.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="w-[85%] mt-7 max-w-3xl  bg-[#111827] rounded-lg shadow-lg overflow-hidden">
        {filteredProfiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            username={profile.username}
            bio={profile.bio}
            avatarUrl={profile.avatarUrl}
            followers={profile.followers}
            following={profile.following}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
