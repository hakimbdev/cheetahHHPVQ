import React from 'react';

interface BlogIconProps {
  className?: string;
}

const BlogIcon: React.FC<BlogIconProps> = ({ className = "w-4 h-4" }) => {
  return (
    <img
      src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752510078/Document_pkgusp.png"
      alt="Document"
      className={className}
    />
  );
};

export default BlogIcon;
