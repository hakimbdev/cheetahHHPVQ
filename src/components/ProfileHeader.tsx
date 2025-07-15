import React from 'react';

interface ProfileHeaderProps {
  profile: {
    name: string;
    email: string;
    avatar: string;
  };
  onClick?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, onClick }) => {
  return (
    <div
      className="flex items-center space-x-3 bg-[#2a2d47] p-3 rounded-lg cursor-pointer hover:bg-[#3a3d57] transition-colors border border-[#3a3d57]"
      onClick={onClick}
    >
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-12 h-12 rounded-full border-2 border-orange-400 object-cover"
      />
      <div>
        <h3 className="text-white font-medium text-lg">Hi, {profile.name}</h3>
        <p className="text-gray-400 text-sm">{profile.email}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
