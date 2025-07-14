import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BlogCard from './components/BlogCard';
import FeaturedBlog from './components/FeaturedBlog';
import MyBlogs from './pages/MyBlogs';
import Rewards from './pages/Rewards';
import Shop from './pages/Shop';
import ExploreNFTs from './pages/ExploreNFTs';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { mockBlogs } from './data/mockBlogs';
import { Plus, ArrowDown } from 'lucide-react';
import Slider from './components/Slider';
import CreatePostModal from './components/CreatePostModal';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'my-blogs' | 'rewards' | 'shop' | 'explore-nfts' | 'blog' | 'profile'>('home');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [blogs, setBlogs] = useState(mockBlogs);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMoreArticles, setShowMoreArticles] = useState(false);

  // LIFTED PROFILE STATE
  const [profile, setProfile] = useState({
    name: 'Precious',
    email: 'Precious30@gmail.com',
    bio: 'Passionate Web3 developer and blockchain enthusiast. Building the future of decentralized applications.',
    location: 'San Francisco, CA',
    joined: 'Jan 2023',
    avatar: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752071208/Header_-_Copy_2_tbflho.png',
  });

  // Additional articles for "Load More" functionality
  const additionalArticles = [
    {
      id: '101',
      title: "Advanced React Hooks Patterns",
      description: "Master advanced React hooks patterns for better state management and component composition.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      author: "Mike Chen",
      date: "1 day ago",
      readTime: "8 min read",
      likes: 156,
      comments: 23,
      category: "React"
    },
    {
      id: '102',
      title: "Web3 Security Best Practices",
      description: "Essential security practices for Web3 developers and blockchain applications.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      author: "Emma Davis",
      date: "2 days ago",
      readTime: "12 min read",
      likes: 289,
      comments: 45,
      category: "Security"
    },
    {
      id: '103',
      title: "DeFi Protocol Development Guide",
      description: "Building decentralized finance protocols with modern development tools and frameworks.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=400&h=300&fit=crop",
      author: "Alex Thompson",
      date: "3 days ago",
      readTime: "15 min read",
      likes: 198,
      comments: 34,
      category: "DeFi"
    },
    {
      id: '104',
      title: "NFT Marketplace Architecture",
      description: "Understanding the architecture and development patterns for building NFT marketplaces.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      author: "Sarah Johnson",
      date: "4 days ago",
      readTime: "10 min read",
      likes: 234,
      comments: 28,
      category: "NFTs"
    },
    {
      id: '105',
      title: "Blockchain Scalability Solutions",
      description: "Exploring Layer 2 solutions and other scalability approaches for blockchain networks.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      author: "David Kim",
      date: "5 days ago",
      readTime: "14 min read",
      likes: 167,
      comments: 19,
      category: "Blockchain"
    },
    {
      id: '106',
      title: "Smart Contract Testing Strategies",
      description: "Comprehensive testing strategies for smart contracts to ensure security and reliability.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=400&h=300&fit=crop",
      author: "Lisa Wang",
      date: "6 days ago",
      readTime: "11 min read",
      likes: 145,
      comments: 22,
      category: "Testing"
    }
  ];

  // Related content for different categories
  const relatedContent = {
    react: [
      {
        id: 'r1',
        title: "React Performance Optimization",
        description: "Advanced techniques for optimizing React applications for better performance.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
        author: "Mike Chen",
        category: "React",
        likes: 89
      },
      {
        id: 'r2',
        title: "State Management with Redux Toolkit",
        description: "Modern state management patterns using Redux Toolkit for React applications.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
        author: "Emma Davis",
        category: "React",
        likes: 134
      },
      {
        id: 'r3',
        title: "React Server Components",
        description: "Understanding React Server Components and their impact on modern web development.",
        image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=300&h=200&fit=crop",
        author: "Alex Thompson",
        category: "React",
        likes: 67
      }
    ],
    web3: [
      {
        id: 'w1',
        title: "Web3 Authentication Methods",
        description: "Exploring different authentication methods for Web3 applications.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
        author: "Sarah Johnson",
        category: "Web3",
        likes: 156
      },
      {
        id: 'w2',
        title: "Decentralized Storage Solutions",
        description: "Understanding IPFS and other decentralized storage solutions for Web3 apps.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
        author: "Mike Chen",
        category: "Web3",
        likes: 98
      },
      {
        id: 'w3',
        title: "Web3 Development Tools",
        description: "Essential tools and frameworks for modern Web3 development.",
        image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=300&h=200&fit=crop",
        author: "Emma Davis",
        category: "Web3",
        likes: 123
      }
    ],
    blockchain: [
      {
        id: 'b1',
        title: "Consensus Mechanisms Explained",
        description: "Understanding different consensus mechanisms in blockchain networks.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
        author: "David Kim",
        category: "Blockchain",
        likes: 178
      },
      {
        id: 'b2',
        title: "Cross-Chain Interoperability",
        description: "Techniques for achieving interoperability between different blockchain networks.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
        author: "Alex Thompson",
        category: "Blockchain",
        likes: 145
      },
      {
        id: 'b3',
        title: "Blockchain Governance Models",
        description: "Understanding different governance models in decentralized networks.",
        image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=300&h=200&fit=crop",
        author: "Sarah Johnson",
        category: "Blockchain",
        likes: 89
      }
    ]
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLoadMore = () => {
    setShowMoreArticles(true);
  };

  const displayedBlogs = showMoreArticles ? [...blogs, ...additionalArticles] : blogs;

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navbar at the top - OUTSIDE flex row */}
      <Navbar darkMode={false} currentPage={currentPage} setCurrentPage={setCurrentPage} onSidebarToggle={() => setSidebarOpen(true)} profile={{ name: profile.name, avatar: profile.avatar }} />
      {/* Mobile Sidebar (only on mobile) */}
      <div className="md:hidden">
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </div>
      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={(post) => {
          setBlogs([
            {
              id: (blogs.length + 1).toString(),
              title: post.title,
              description: post.description,
              image: post.image || 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
              author: 'Precious',
              date: 'Just now',
              readTime: '5 min read',
              likes: 0,
              comments: 0,
              category: post.category,
            },
            ...blogs,
          ]);
        }}
      />
      {/* Layout wrapper: sidebar + main content (sidebar is now part of the flex row, not fixed) */}
      <div className="flex w-full max-w-full">
        {/* Sidebar, merged with main body (desktop only) */}
        <div className="hidden md:block">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} currentPage={currentPage} setCurrentPage={setCurrentPage} fixed={false} />
        </div>
        {/* Main Content */}
        <main className="flex-1 w-0 bg-gradient-to-b from-[#181A2A] to-[#23214a] pt-6 md:pt-8 pb-0 px-2 md:px-4">
          {currentPage === 'home' ? (
            <div>
              {/* Slider above header */}
              <div className="mb-4">
                <Slider />
              </div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-white">Discover Stories</h1>
                  <p className="text-lg mt-2 text-gray-300">Explore the latest articles and insights from our community</p>
                </div>
                <button
                  className="bg-[#a855f7] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9333ea] transition-all duration-300 flex items-center space-x-2 group shadow-lg"
                  onClick={() => setShowCreateModal(true)}
                >
                  <Plus className="w-5 h-5" />
                  <span>Create Post</span>
                </button>
              </div>

              {/* Featured Blog */}
              <div>
                <FeaturedBlog darkMode={darkMode} />
              </div>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['All', 'React', 'Web3', 'CSS', 'Blockchain', 'Next.js', 'Testing', 'API'].map((tag) => (
                  <button
                    key={tag}
                    className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      tag === 'All'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none'
                        : 'bg-[#23214a] text-gray-200 border-[#2d295e] hover:bg-[#181A2A]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {displayedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} darkMode={darkMode} />
                ))}
              </div>

              {/* Load More Button */}
              {!showMoreArticles && (
                <div className="text-center mt-8">
                  <button 
                    onClick={handleLoadMore}
                    className="px-8 py-3 rounded-lg font-medium transition-colors shadow border bg-[#23214a] text-gray-200 hover:bg-[#181A2A] border-[#2d295e] flex items-center space-x-2 mx-auto"
                  >
                    <span>Load More Articles</span>
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Related Content Sections */}
              {showMoreArticles && (
                <div className="mt-12 space-y-12">
                  {/* React Related Content */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">React Development</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {relatedContent.react.map((article) => (
                        <div key={article.id} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-400">
                              <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{article.category}</span>
                            </div>
                            <h3 className="font-semibold text-white text-sm">{article.title}</h3>
                            <p className="text-gray-300 text-xs line-clamp-2">{article.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-white text-xs">{article.author}</span>
                              <div className="flex items-center space-x-1">
                                <span className="text-gray-400 text-xs">❤️ {article.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Web3 Related Content */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Web3 & Blockchain</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {relatedContent.web3.map((article) => (
                        <div key={article.id} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-400">
                              <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{article.category}</span>
                            </div>
                            <h3 className="font-semibold text-white text-sm">{article.title}</h3>
                            <p className="text-gray-300 text-xs line-clamp-2">{article.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-white text-xs">{article.author}</span>
                              <div className="flex items-center space-x-1">
                                <span className="text-gray-400 text-xs">❤️ {article.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Blockchain Related Content */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Blockchain Technology</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {relatedContent.blockchain.map((article) => (
                        <div key={article.id} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-400">
                              <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{article.category}</span>
                            </div>
                            <h3 className="font-semibold text-white text-sm">{article.title}</h3>
                            <p className="text-gray-300 text-xs line-clamp-2">{article.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-white text-xs">{article.author}</span>
                              <div className="flex items-center space-x-1">
                                <span className="text-gray-400 text-xs">❤️ {article.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Original Related Content Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Related Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {blogs.slice(0, 3).map((blog) => (
                    <div key={`related-${blog.id}`} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                          <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{blog.category}</span>
                          <span>•</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-white text-sm">{blog.title}</h3>
                        <p className="text-gray-300 text-xs line-clamp-2">{blog.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-xs">{blog.author}</span>
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-400 text-xs">❤️ {blog.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : currentPage === 'my-blogs' ? (
            <MyBlogs darkMode={darkMode} />
          ) : currentPage === 'shop' ? (
            <Shop darkMode={darkMode} />
          ) : currentPage === 'explore-nfts' ? (
            <ExploreNFTs darkMode={darkMode} />
          ) : currentPage === 'blog' ? (
            <Blog darkMode={darkMode} />
          ) : currentPage === 'profile' ? (
            <Profile darkMode={darkMode} profile={profile} setProfile={setProfile} />
          ) : (
            <Rewards />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;