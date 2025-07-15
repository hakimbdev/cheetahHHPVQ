import React from 'react';

interface HomeIconProps {
  className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ className = "w-4 h-4" }) => {
  return (
    <img
      src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752509820/dasboard_qco5fs.png"
      alt="Dashboard"
      className={className}
    />
  );
};

export default HomeIcon;
