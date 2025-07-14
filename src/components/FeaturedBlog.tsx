import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Clock, User, TrendingUp, ArrowRight, X, Share2 } from 'lucide-react';

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

interface FeaturedBlogProps {
  darkMode: boolean;
}

const FeaturedBlog: React.FC<FeaturedBlogProps> = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);

  const featuredBlog = {
    title: "The Future of Web3 Development: Building Decentralized Applications",
    description: "Explore the latest trends and technologies in Web3 development. Learn how to build scalable decentralized applications with modern frameworks and tools.",
    fullContent: `The landscape of web development is rapidly evolving, and Web3 represents the next frontier in this evolution. As we move towards a more decentralized internet, developers are faced with new challenges and opportunities.

Web3 development encompasses a wide range of technologies, from blockchain platforms like Ethereum and Solana to decentralized storage solutions like IPFS. The key difference from traditional web development lies in the fundamental architecture - instead of centralized servers, Web3 applications run on distributed networks.

One of the most exciting aspects of Web3 development is the emergence of smart contracts. These self-executing contracts with the terms of the agreement directly written into code have opened up new possibilities for creating trustless applications. From decentralized finance (DeFi) protocols to non-fungible token (NFT) marketplaces, smart contracts are the building blocks of the new internet.

However, Web3 development also comes with its own set of challenges. Gas fees, scalability issues, and the complexity of blockchain interactions are just some of the hurdles developers must overcome. This is where modern frameworks and tools come into play.

Frameworks like Hardhat, Truffle, and Foundry have made smart contract development more accessible, while libraries like ethers.js and web3.js provide the necessary tools for frontend integration. The ecosystem is constantly evolving, with new tools and best practices emerging regularly.

As we look to the future, Web3 development will continue to grow in importance. The demand for skilled Web3 developers is already high and will only increase as more companies and projects embrace decentralized technologies.`,
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Sarah Johnson",
    date: "2 hours ago",
    readTime: "12 min read",
    likes: 234,
    comments: 45,
    category: "Web3"
  };

  const relatedArticles: RelatedArticle[] = [
    {
      id: 1,
      title: "Smart Contract Security Best Practices",
      excerpt: "Learn essential security practices for developing secure smart contracts on Ethereum and other blockchain platforms.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
      author: "Mike Chen",
      readTime: "8 min read",
      category: "Security",
      likes: 156
    },
    {
      id: 2,
      title: "DeFi Protocol Development Guide",
      excerpt: "Step-by-step guide to building decentralized finance protocols with modern development tools.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
      author: "Emma Davis",
      readTime: "15 min read",
      category: "DeFi",
      likes: 289
    },
    {
      id: 3,
      title: "NFT Marketplace Architecture",
      excerpt: "Understanding the architecture and development patterns for building NFT marketplaces.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=300&h=200&fit=crop",
      author: "Alex Thompson",
      readTime: "10 min read",
      category: "NFTs",
      likes: 198
    }
  ];

  return (
    <>
      <div className={`relative ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-purple-50 to-pink-50'} rounded-2xl p-8 mb-8 overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Featured Article</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h2 className={`text-3xl font-bold mb-4 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {featuredBlog.title}
              </h2>
              
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {featuredBlog.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <User className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{featuredBlog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{featuredBlog.readTime}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button className={`flex items-center space-x-2 transition-colors ${darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
                    <Heart className="w-5 h-5" />
                    <span>{featuredBlog.likes}</span>
                  </button>
                  <button className={`flex items-center space-x-2 transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'}`}>
                    <MessageCircle className="w-5 h-5" />
                    <span>{featuredBlog.comments}</span>
                  </button>
                  <button className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-500'}`}>
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-[#a855f7] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9333ea] transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredBlog.category}
                </div>
              </div>
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
                  {featuredBlog.category}
                </span>
                <span className="text-gray-500 text-sm">{featuredBlog.readTime}</span>
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
                {featuredBlog.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredBlog.author}</span>
                </div>
                <span>•</span>
                <span>{featuredBlog.date}</span>
                <span>•</span>
                <span>{featuredBlog.readTime}</span>
              </div>

              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
                <p className="text-lg leading-relaxed mb-6">
                  {featuredBlog.fullContent}
                </p>
              </div>

              {/* Article Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{featuredBlog.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{featuredBlog.comments}</span>
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

export default FeaturedBlog;