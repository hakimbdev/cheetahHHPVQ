import React from 'react';
import { Search, Bell, User, Settings } from 'lucide-react';

interface TopbarProps {
  darkMode: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ darkMode }) => {
  return (
    <div className={`fixed top-0 left-64 right-0 h-16 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between px-6 z-30 transition-colors duration-300`}>
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search blogs..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-purple-500'
            } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors`}
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
          <Bell className="w-5 h-5" />
        </button>
        <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;