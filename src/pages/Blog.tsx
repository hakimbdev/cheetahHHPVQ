import React, { useState } from 'react';
import { Search, Bookmark, Share2, Heart, Eye, Clock, User, ArrowRight, X } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  image: string;
  category: string;
  likes: number;
  views: number;
  isFeatured?: boolean;
  isTrending?: boolean;
}

interface RelatedArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  category: string;
  likes: number;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web3 Development",
    excerpt: "Explore the latest trends and technologies shaping the future of decentralized applications and blockchain development.",
    author: "Sarah Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
    category: "Web3",
    likes: 1247,
    views: 8923,
    isFeatured: true
  },
  {
    id: 2,
    title: "Building Scalable Smart Contracts",
    excerpt: "Learn best practices for developing secure and scalable smart contracts on Ethereum and other blockchain platforms.",
    author: "Mike Chen",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-01-14",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=300&fit=crop",
    category: "Blockchain",
    likes: 892,
    views: 5678,
    isTrending: true
  },
  {
    id: 3,
    title: "DeFi Protocols: A Comprehensive Guide",
    excerpt: "Understanding decentralized finance protocols, their mechanisms, and how to interact with them safely.",
    author: "Emma Davis",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-01-13",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=600&h=300&fit=crop",
    category: "DeFi",
    likes: 2156,
    views: 12450,
    isFeatured: true
  },
  {
    id: 4,
    title: "NFT Marketplace Development",
    excerpt: "Step-by-step guide to building your own NFT marketplace with modern web technologies.",
    author: "Alex Thompson",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-01-12",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
    category: "NFTs",
    likes: 1567,
    views: 9876
  },
  {
    id: 5,
    title: "React Performance Optimization",
    excerpt: "Advanced techniques for optimizing React applications for better performance and user experience.",
    author: "Lisa Wang",
    authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ad3769c712?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-01-11",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=300&fit=crop",
    category: "React",
    likes: 2341,
    views: 15678
  },
  {
    id: 6,
    title: "Crypto Security Best Practices",
    excerpt: "Essential security practices for protecting your cryptocurrency assets and private keys.",
    author: "David Kim",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    publishDate: "2024-01-10",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=600&h=300&fit=crop",
    category: "Security",
    likes: 3456,
    views: 23456,
    isTrending: true
  }
];

const relatedPosts: RelatedArticle[] = [
  {
    id: 7,
    title: "TypeScript for Blockchain Development",
    excerpt: "How TypeScript can improve your blockchain development workflow and code quality.",
    author: "Rachel Green",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
    category: "TypeScript",
    likes: 567
  },
  {
    id: 8,
    title: "Web3 Authentication Methods",
    excerpt: "Exploring different authentication methods for Web3 applications and their security implications.",
    author: "Tom Wilson",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
    category: "Authentication",
    likes: 789
  },
  {
    id: 9,
    title: "Testing Smart Contracts",
    excerpt: "Comprehensive guide to testing smart contracts using various frameworks and tools.",
    author: "Maria Garcia",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=300&h=200&fit=crop",
    category: "Testing",
    likes: 432
  }
];

interface BlogProps {
  darkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Set<number>>(new Set());
  const [blogPosts, setBlogPosts] = useState(mockBlogPosts);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const getRelatedArticles = (category: string) => {
    return relatedPosts.filter(post => post.category === category || post.category === 'Web3').slice(0, 3);
  };

  const getFullContent = (post: BlogPost) => {
    return `This is the full content of "${post.title}". Here you would find the complete article with detailed information, code examples, and comprehensive explanations.

The article covers various aspects of ${post.category} development, including best practices, common pitfalls, and advanced techniques. Readers will gain practical knowledge that they can apply to their own projects.

Key topics covered include:
- Fundamental concepts and principles
- Step-by-step implementation guides
- Real-world examples and case studies
- Performance optimization techniques
- Security considerations and best practices

This comprehensive guide is designed to help developers at all levels improve their skills and build better applications.`;
  };

  // Blog interaction handlers
  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
        setBlogPosts(prevPosts =>
          prevPosts.map(post =>
            post.id === postId
              ? { ...post, likes: Math.max(0, post.likes - 1) }
              : post
          )
        );
      } else {
        newLiked.add(postId);
        setBlogPosts(prevPosts =>
          prevPosts.map(post =>
            post.id === postId
              ? { ...post, likes: post.likes + 1 }
              : post
          )
        );
      }
      return newLiked;
    });
  };

  const handleBookmark = (postId: number) => {
    setBookmarkedPosts(prev => {
      const newBookmarked = new Set(prev);
      if (newBookmarked.has(postId)) {
        newBookmarked.delete(postId);
      } else {
        newBookmarked.add(postId);
      }
      return newBookmarked;
    });
  };

  return (
    <>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Blog</h1>
            <p className="text-lg mt-2 text-gray-300">Insights, tutorials, and stories from the Web3 community</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-[#23214a] text-white pl-10 pr-4 py-2 rounded-lg border border-[#2d295e] focus:border-purple-500 focus:outline-none"
              />
            </div>
            <button className="bg-[#23214a] text-gray-300 px-4 py-2 rounded-lg border border-[#2d295e] hover:bg-[#181A2A] transition-colors">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Web3', 'Blockchain', 'DeFi', 'NFTs', 'React', 'Security', 'TypeScript'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                category === 'All'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none'
                  : 'bg-[#23214a] text-gray-200 border-[#2d295e] hover:bg-[#181A2A]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockBlogPosts.filter(post => post.isFeatured).map((post) => (
              <div key={post.id} className="bg-[#23214a] rounded-xl p-6 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmark(post.id);
                    }}
                    className={`absolute top-2 right-2 bg-[#181A2A] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                      bookmarkedPosts.has(post.id) ? 'text-purple-500' : 'text-gray-400'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedPosts.has(post.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="font-bold text-white text-xl">{post.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <p className="text-gray-400 text-xs">{new Date(post.publishDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(post.id);
                        }}
                        className={`flex items-center space-x-1 transition-colors ${
                          likedPosts.has(post.id) ? 'text-red-500' : 'text-red-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-gray-300">{post.likes}</span>
                      </button>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{post.views}</span>
                      </div>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleReadMore(post)}
                    className="w-full bg-[#a855f7] text-white py-2 rounded-lg font-medium hover:bg-[#9333ea] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Blog Posts */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-[#23214a] rounded-xl p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.isTrending && (
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Trending
                    </span>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmark(post.id);
                    }}
                    className={`absolute top-2 right-2 bg-[#181A2A] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                      bookmarkedPosts.has(post.id) ? 'text-purple-500' : 'text-gray-400'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedPosts.has(post.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-semibold text-white text-lg">{post.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-white text-xs">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-xs">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(post.id);
                        }}
                        className={`flex items-center space-x-1 transition-colors ${
                          likedPosts.has(post.id) ? 'text-red-500' : 'text-red-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-3 h-3 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-gray-300">{post.likes}</span>
                      </button>
                      <Eye className="w-3 h-3 text-blue-400" />
                      <span className="text-gray-300">{post.views}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleReadMore(post)}
                    className="w-full bg-[#a855f7] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#9333ea] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Content Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((post) => (
              <div key={post.id} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-white text-sm">{post.title}</h3>
                  <p className="text-gray-300 text-xs line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xs">{post.author}</span>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3 text-red-400" />
                      <span className="text-white text-xs">{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
                <span className="text-gray-500 text-sm">{selectedPost.readTime}</span>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <span>•</span>
                <span>{new Date(selectedPost.publishDate).toLocaleDateString()}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
                <p className="text-lg leading-relaxed mb-6">
                  {getFullContent(selectedPost)}
                </p>
              </div>

              {/* Article Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(selectedPost.id);
                    }}
                    className={`flex items-center space-x-2 transition-colors ${
                      likedPosts.has(selectedPost.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.has(selectedPost.id) ? 'fill-current' : ''}`} />
                    <span>{selectedPost.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <Eye className="w-5 h-5" />
                    <span>{selectedPost.views}</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmark(selectedPost.id);
                    }}
                    className={`transition-colors ${
                      bookmarkedPosts.has(selectedPost.id) ? 'text-purple-500' : 'text-gray-500 hover:text-purple-500'
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${bookmarkedPosts.has(selectedPost.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {getRelatedArticles(selectedPost.category).map((article) => (
                  <div key={article.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-24 object-cover rounded-lg mb-3"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span className="bg-purple-500 text-white px-2 py-1 rounded-full">{article.category}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{article.title}</h4>
                      <p className="text-gray-500 text-xs line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">{article.author}</span>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3 text-red-400" />
                          <span className="text-gray-400 text-xs">{article.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog; 