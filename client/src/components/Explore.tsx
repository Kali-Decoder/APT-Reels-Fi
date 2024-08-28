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
  { id: 'A', title: "Design changes", date: "22 DEC 7:20 PM" },
  { id: 'B', title: "New order #1832412", date: "21 DEC 11 PM" },
  { id: 'C', title: "Server payments for April", date: "21 DEC 9:34 PM" },
  { id: 'D', title: "Server payments for April", date: "21 DEC 9:34 PM" },
  { id: 'E', title: "Server payments for April", date: "21 DEC 9:34 PM" },
  { id: 'F', title: "Server payments for April", date: "21 DEC 9:34 PM" }
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
  { id: 1, name: "Alice Johnson", username: "alice_j", bio: "Blogger and content creator", avatarUrl: "https://via.placeholder.com/150", followers: 1200, following: 300, role: "bloggers" },
  { id: 2, name: "Bob Smith", username: "bob_smith", bio: "Brand ambassador for tech companies", avatarUrl: "https://via.placeholder.com/150", followers: 3400, following: 400, role: "brand ambassadors" },
  { id: 3, name: "Clara Lee", username: "clara_lee", bio: "Freelance copywriter", avatarUrl: "https://via.placeholder.com/150", followers: 2300, following: 350, role: "copywriters" },
  { id: 4, name: "David Kim", username: "david_kim", bio: "Graphic designer with 5 years of experience", avatarUrl: "https://via.placeholder.com/150", followers: 5400, following: 450, role: "graphic designers" },
  { id: 5, name: "Ella Brown", username: "ella_brown", bio: "Influencer in the beauty industry", avatarUrl: "https://via.placeholder.com/150", followers: 7500, following: 500, role: "influencers" },
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
                  <p className="text-xs text-gray-400">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[85%] max-w-3xl mt-8 bg-gray-800 rounded-lg border border-gray-700 py-2 px-3 shadow-md relative">
        <button
          onClick={handleDropdownToggle}
          className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center justify-between"
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
