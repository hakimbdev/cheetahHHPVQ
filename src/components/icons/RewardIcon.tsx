import React from 'react';

interface RewardIconProps {
  className?: string;
}

const RewardIcon: React.FC<RewardIconProps> = ({ className = "w-4 h-4" }) => {
  return (
    <img
      src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752510302/donate_j7nnbe.png"
      alt="Donate"
      className={className}
    />
  );
};

export default RewardIcon;
