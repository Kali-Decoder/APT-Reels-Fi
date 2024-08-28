import React from 'react';

interface ProfileCardProps {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
  followers: number;
  following: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  username,
  bio,
  avatarUrl,
  followers,
  following,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-md max-w-xs mx-auto mb-6">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="w-16 h-16 rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-400">@{username}</p>
      <p className="text-xs text-gray-500 mt-2 text-center">{bio}</p>
      <div className="flex mt-4 space-x-4 text-xs text-gray-400">
        <span>{followers} Followers</span>
        <span>{following} Following</span>
      </div>
    </div>
  );
};

export default ProfileCard;
