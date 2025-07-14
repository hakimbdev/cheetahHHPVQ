import React from 'react';
import { Heart, MessageCircle, Eye, MoreVertical, Edit, Trash2, Share, Calendar, Clock } from 'lucide-react';

interface MyBlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'published' | 'draft' | 'archived';
  date: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  category: string;
}

interface MyBlogCardProps {
  blog: MyBlogPost;
  darkMode: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onShare: (id: string) => void;
}

const MyBlogCard: React.FC<MyBlogCardProps> = ({ blog, darkMode, onEdit, onDelete, onShare }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500';
      case 'draft':
        return 'bg-yellow-500';
      case 'archived':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return 'Published';
      case 'draft':
        return 'Draft';
      case 'archived':
        return 'Archived';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className={`group relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <div className={`absolute top-3 left-3 ${getStatusColor(blog.status)} text-white px-2 py-1 rounded-full text-xs font-medium`}>
          {getStatusText(blog.status)}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {blog.category}
        </div>

        {/* Menu Button */}
        <div className="absolute bottom-3 right-3">
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className={`absolute bottom-full right-0 mb-2 ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-2 min-w-[120px] z-10`}>
                <button
                  onClick={() => {
                    onEdit(blog.id);
                    setShowMenu(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-2 text-sm transition-colors ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => {
                    onShare(blog.id);
                    setShowMenu(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-2 text-sm transition-colors ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Share className="w-4 h-4" />
                  <span>Share</span>
                </button>
                <button
                  onClick={() => {
                    onDelete(blog.id);
                    setShowMenu(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-2 text-sm transition-colors text-red-500 hover:bg-red-50 ${darkMode ? 'hover:bg-red-900/20' : ''}`}
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-lg font-semibold mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {blog.title}
        </h3>
        
        <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {blog.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.readTime}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.comments}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close menu */}
      {showMenu && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
};

export default MyBlogCard;