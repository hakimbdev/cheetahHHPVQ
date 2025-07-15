import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Clock, User, TrendingUp, ArrowRight, X, Share2 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  category: string;
  trending?: boolean;
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

interface BlogCardProps {
  blog: BlogPost;
  darkMode: boolean;
  onAuthorClick?: (authorName: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, darkMode, onAuthorClick }) => {
  const [showModal, setShowModal] = useState(false);

  const relatedArticles: RelatedArticle[] = [
    {
      id: 1,
      title: "Advanced React Patterns",
      excerpt: "Learn advanced React patterns and best practices for building scalable applications.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
      author: "Mike Chen",
      readTime: "8 min read",
      category: "React",
      likes: 156
    },
    {
      id: 2,
      title: "Web3 Security Fundamentals",
      excerpt: "Essential security practices for Web3 developers and blockchain applications.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
      author: "Emma Davis",
      readTime: "12 min read",
      category: "Security",
      likes: 289
    },
    {
      id: 3,
      title: "DeFi Protocol Development",
      excerpt: "Building decentralized finance protocols with modern development tools.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=300&h=200&fit=crop",
      author: "Alex Thompson",
      readTime: "15 min read",
      category: "DeFi",
      likes: 198
    }
  ];

  const fullContent = `This is the full content of "${blog.title}". Here you would find the complete article with detailed information, code examples, and comprehensive explanations.

The article covers various aspects of ${blog.category} development, including best practices, common pitfalls, and advanced techniques. Readers will gain practical knowledge that they can apply to their own projects.

Key topics covered include:
- Fundamental concepts and principles
- Step-by-step implementation guides
- Real-world examples and case studies
- Performance optimization techniques
- Security considerations and best practices

This comprehensive guide is designed to help developers at all levels improve their skills and build better applications.`;

  return (
    <>
      <div className={`group relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1`}>
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {blog.trending && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <TrendingUp className="w-3 h-3" />
              <span>Trending</span>
            </div>
          )}
          <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {blog.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className={`text-lg font-semibold mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-purple-500 transition-colors`}>
            {blog.title}
          </h3>
          
          <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {blog.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              <User className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAuthorClick?.(blog.author);
                }}
                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-600'} transition-colors cursor-pointer`}
              >
                {blog.author}
              </button>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{blog.readTime}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className={`flex items-center space-x-1 transition-colors ${darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
                <Heart className="w-4 h-4" />
                <span className="text-sm">{blog.likes}</span>
              </button>
              <button className={`flex items-center space-x-1 transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'}`}>
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{blog.comments}</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-500'}`}>
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#a855f7] text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-[#9333ea] transition-all duration-300 flex items-center space-x-1"
              >
                <span>Read More</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
                <span className="text-gray-500 text-sm">{blog.readTime}</span>
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
              <h1 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {blog.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAuthorClick?.(blog.author);
                    }}
                    className="hover:text-purple-500 transition-colors cursor-pointer"
                  >
                    {blog.author}
                  </button>
                </div>
                <span>•</span>
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />

              <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
                <p className="text-base leading-relaxed mb-6">
                  {fullContent}
                </p>
              </div>

              {/* Article Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{blog.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{blog.comments}</span>
                  </button>
                  <button className="text-gray-500 hover:text-purple-500 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((article) => (
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
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAuthorClick?.(article.author);
                          }}
                          className="text-gray-400 text-xs hover:text-purple-500 transition-colors cursor-pointer"
                        >
                          {article.author}
                        </button>
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

export default BlogCard;