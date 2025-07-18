import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Star } from 'lucide-react';
import ProfileHeader from './ProfileHeader';

interface NavbarProps {
  darkMode?: boolean;
  currentPage: string;
  setCurrentPage: (page: 'home' | 'shop' | 'explore-nfts' | 'blog' | 'my-blogs' | 'profile' | 'rewards') => void;
  onSidebarToggle?: () => void;
  profile?: {
    name: string;
    avatar: string;
  };
}

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'Shop', page: 'shop' },
  { label: 'Explore NFTs', page: 'explore-nfts' },
  { label: 'Blog', page: 'blog' },
];

const relatedProducts = [
  {
    id: 7,
    name: "Smart Contract Templates",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
    rating: 4.4,
    reviews: 67,
    category: "Development"
  },
  {
    id: 8,
    name: "NFT Marketplace Tools",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
    rating: 4.6,
    reviews: 112,
    category: "Tools"
  },
  {
    id: 9,
    name: "Crypto Portfolio Tracker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=300&h=200&fit=crop",
    rating: 4.3,
    reviews: 78,
    category: "Tools"
  }
];

const Navbar: React.FC<NavbarProps> = ({ darkMode = false, currentPage, setCurrentPage, onSidebarToggle, profile }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  return (
    <nav className="w-full px-2 sm:px-4 md:px-10 py-3 sm:py-4 flex flex-wrap items-center justify-between bg-gradient-to-r from-[#1a1440] to-[#1a1a2e] shadow-lg relative">
      {/* Left: Logo & Brand */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Sidebar toggle for mobile (only visible on mobile) */}
        <button
          className="md:hidden mr-2 text-white p-2 rounded-lg hover:bg-[#23214a] focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={onSidebarToggle}
          aria-label="Open sidebar menu"
          tabIndex={0}
        >
          <Menu className="w-7 h-7" />
        </button>
        <img
          src="https://res.cloudinary.com/da8ptobvx/image/upload/v1751980304/Header_-_Copy_paqzpv.png"
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain"
        />
        <span className="text-lg sm:text-2xl font-extrabold tracking-wide text-white uppercase">CHEETAHHPVQ</span>
      </div>

      {/* Center: Nav Links & Search (hide on mobile) */}
      <div className="hidden md:flex flex-1 flex-col items-center">
        <div className="flex space-x-4 sm:space-x-8 mb-2 sm:mb-3">
          {navLinks.map(link => (
            <button
              key={link.page}
              onClick={() => setCurrentPage(link.page as any)}
              className={`text-white font-medium hover:text-purple-400 transition relative ${currentPage === link.page ? 'font-bold' : ''}`}
            >
              {link.label}
              {currentPage === link.page && <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-500 rounded-full"></span>}
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-xs sm:max-w-md">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#23214a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-[#2d295e] text-sm sm:text-base"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Right: Icons, Avatar, Greeting (hide on mobile) */}
      <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
        {/* Glowing icon placeholder */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg">
          <img
            src="https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png"
            alt="Icon"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </div>
        {/* Cart icon with related products dropdown */}
        <div className="relative">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#23214a] cursor-pointer hover:bg-[#2d295e] transition"
            onMouseEnter={() => setShowCartDropdown(true)}
            onMouseLeave={() => setShowCartDropdown(false)}
            onClick={() => setShowCartDropdown((v) => !v)}
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          {showCartDropdown && (
            <div
              className="absolute right-0 mt-2 w-80 bg-[#181A2A] border border-[#2d295e] rounded-xl shadow-lg z-50 p-4 animate-fade-in"
              onMouseEnter={() => setShowCartDropdown(true)}
              onMouseLeave={() => setShowCartDropdown(false)}
            >
              <h3 className="text-lg font-bold text-white mb-3">Related Products</h3>
              <div className="space-y-3">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="flex items-center space-x-3 bg-[#23214a] rounded-lg p-2 hover:border-purple-500 border border-[#2d295e] transition-all cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 text-xs text-gray-400 mb-1">
                        <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{product.category}</span>
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white">{product.rating}</span>
                      </div>
                      <div className="font-semibold text-white text-sm">{product.name}</div>
                      <div className="text-xs text-gray-300">${product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Profile Header Component */}
        <ProfileHeader
          profile={{
            name: profile?.name || 'Precious',
            email: 'Precious30@gmail.com',
            avatar: profile?.avatar || "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          }}
          onClick={() => setCurrentPage('profile')}
        />
      </div>

      {/* Mobile Dropdown Menu (not sidebar) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181A2A] z-50 flex flex-col items-center py-4 shadow-lg md:hidden animate-fade-in">
          {navLinks.map(link => (
            <button
              key={link.page}
              onClick={() => {
                setCurrentPage(link.page as any);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-6 py-3 text-white font-medium hover:text-purple-400 transition ${currentPage === link.page ? 'font-bold' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 