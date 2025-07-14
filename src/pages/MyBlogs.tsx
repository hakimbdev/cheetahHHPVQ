import React, { useState } from 'react';
import { Plus, Search, Filter, Grid, List } from 'lucide-react';
import MyBlogCard from '../components/MyBlogCard';
import { myBlogsData } from '../data/myBlogsData';

interface MyBlogsProps {
  darkMode: boolean;
}

const MyBlogs: React.FC<MyBlogsProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'draft' | 'archived'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const tabs = [
    { id: 'all', label: 'All Posts', count: myBlogsData.length },
    { id: 'published', label: 'Published', count: myBlogsData.filter(blog => blog.status === 'published').length },
    { id: 'draft', label: 'Drafts', count: myBlogsData.filter(blog => blog.status === 'draft').length },
    { id: 'archived', label: 'Archived', count: myBlogsData.filter(blog => blog.status === 'archived').length },
  ];

  const filteredBlogs = myBlogsData.filter(blog => {
    const matchesTab = activeTab === 'all' || blog.status === activeTab;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleEdit = (id: string) => {
    console.log('Edit blog:', id);
    // Handle edit functionality
  };

  const handleDelete = (id: string) => {
    console.log('Delete blog:', id);
    // Handle delete functionality
  };

  const handleShare = (id: string) => {
    console.log('Share blog:', id);
    // Handle share functionality
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Blogs
          </h1>
          <p className={`text-lg mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Manage and track your blog posts
          </p>
        </div>
        <button className="bg-[#a855f7] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9333ea] transition-all duration-300 flex items-center space-x-2 group">
          <Plus className="w-5 h-5" />
          <span>New Post</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search your blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-purple-500'
            } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors`}
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <button className={`p-3 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700' 
              : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50'
          }`}>
            <Filter className="w-4 h-4" />
          </button>
          
          <div className={`flex rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-200'} overflow-hidden`}>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-purple-600 text-white'
                  : `${darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-white text-gray-500 hover:text-gray-900'}`
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 transition-colors ${
                viewMode === 'list'
                  ? 'bg-purple-600 text-white'
                  : `${darkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-white text-gray-500 hover:text-gray-900'}`
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`
            }`}
          >
            <span>{tab.label}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              activeTab === tab.id
                ? 'bg-white/20'
                : `${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Blog Grid/List */}
      {filteredBlogs.length > 0 ? (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredBlogs.map((blog) => (
            <MyBlogCard
              key={blog.id}
              blog={blog}
              darkMode={darkMode}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onShare={handleShare}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className={`text-6xl mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>📝</div>
          <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            No blogs found
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-6`}>
            {searchQuery ? 'Try adjusting your search terms' : 'Start creating your first blog post'}
          </p>
          <button className="bg-[#a855f7] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9333ea] transition-all duration-300 flex items-center space-x-2 mx-auto">
            <Plus className="w-5 h-5" />
            <span>Create Your First Post</span>
          </button>
        </div>
      )}

      {/* Related Content Section */}
      <div className="mt-12">
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Suggested Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Web3 Development", description: "Learn blockchain and smart contract development", category: "Development" },
            { title: "React Best Practices", description: "Advanced React patterns and optimization", category: "React" },
            { title: "UI/UX Design", description: "Create beautiful and accessible user interfaces", category: "Design" }
          ].map((topic, index) => (
            <div key={index} className={`rounded-lg p-4 border transition-all duration-300 group ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 hover:border-purple-500' 
                : 'bg-white border-gray-200 hover:border-purple-500'
            }`}>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{topic.category}</span>
                </div>
                <h3 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{topic.title}</h3>
                <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{topic.description}</p>
                <button className={`w-full py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Start Writing
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;