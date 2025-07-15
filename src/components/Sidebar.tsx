import React from 'react';
import { ShoppingBag, Image, FileText, User, X } from 'lucide-react';
import HomeIcon from './icons/HomeIcon';
import BlogIcon from './icons/BlogIcon';
import RewardIcon from './icons/RewardIcon';

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: 'home' | 'my-blogs' | 'rewards' | 'shop' | 'explore-nfts' | 'blog' | 'profile') => void;
  fixed?: boolean;
  isOpen?: boolean; // for mobile
  onClose?: () => void; // for mobile
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, setDarkMode, currentPage, setCurrentPage, isOpen = false, onClose }) => {
  const menuItems = [
    { icon: HomeIcon, label: 'Home', page: 'home' as const },
    { icon: BlogIcon, label: 'My Blogs', page: 'my-blogs' as const },
    { icon: RewardIcon, label: 'Rewards', page: 'rewards' as const },
  ];

  // Mobile sidebar overlay
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex">
        <div className="w-[70vw] max-w-xs h-full bg-[#1a1a2e] border-r border-[#23244a] shadow-xl pt-6 flex flex-col animate-slide-in-left">
          <div className="flex justify-end px-4 pb-2">
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.page);
                      if (onClose) onClose();
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium shadow-sm
                      ${currentPage === item.page
                        ? 'bg-[#a855f7] text-white shadow-lg'
                        : 'text-white hover:bg-[#a855f7] hover:text-white'}
                    `}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-1 bg-black bg-opacity-40" onClick={onClose}></div>
      </div>
    );
  }

  // Desktop sidebar
  return (
    <aside
      className="hidden md:flex w-[170px] h-full bg-[#1a1a2e] border-r border-[#23244a] shadow-xl pt-6 z-40 transition-colors duration-300 flex-col"
    >
      <div className="flex flex-col w-full h-full">
        {/* Navigation */}
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => {
                    setCurrentPage(item.page);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium shadow-sm
                    ${currentPage === item.page
                      ? 'bg-[#a855f7] text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-[#23244a]'}
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;