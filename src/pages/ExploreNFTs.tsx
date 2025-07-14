import React from 'react';
import { Search, Filter, Heart, Eye, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface NFT {
  id: number;
  name: string;
  artist: string;
  price: number;
  originalPrice?: number;
  image: string;
  likes: number;
  views: number;
  category: string;
  isTrending?: boolean;
  isNew?: boolean;
  timeLeft?: string;
}

const mockNFTs: NFT[] = [
  {
    id: 1,
    name: "Cosmic Dreams #001",
    artist: "DigitalArtist",
    price: 2.5,
    originalPrice: 3.2,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop",
    likes: 1247,
    views: 8923,
    category: "Art",
    isTrending: true
  },
  {
    id: 2,
    name: "Cyberpunk Warriors",
    artist: "CryptoCreator",
    price: 1.8,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    likes: 892,
    views: 5678,
    category: "Gaming",
    isNew: true
  },
  {
    id: 3,
    name: "Abstract Reality",
    artist: "ArtMaster",
    price: 4.2,
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=400&h=400&fit=crop",
    likes: 2156,
    views: 12450,
    category: "Abstract",
    isTrending: true
  },
  {
    id: 4,
    name: "Neon City Lights",
    artist: "UrbanArtist",
    price: 3.1,
    originalPrice: 4.0,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop",
    likes: 1567,
    views: 9876,
    category: "Urban",
    timeLeft: "2h 15m"
  },
  {
    id: 5,
    name: "Mystic Forest",
    artist: "NatureLover",
    price: 2.8,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    likes: 2341,
    views: 15678,
    category: "Nature"
  },
  {
    id: 6,
    name: "Digital Revolution",
    artist: "TechArtist",
    price: 5.5,
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=400&h=400&fit=crop",
    likes: 3456,
    views: 23456,
    category: "Technology",
    isTrending: true
  }
];

const relatedNFTs: NFT[] = [
  {
    id: 7,
    name: "Space Explorer",
    artist: "CosmicArtist",
    price: 1.9,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=300&fit=crop",
    likes: 567,
    views: 3456,
    category: "Space"
  },
  {
    id: 8,
    name: "Ocean Depths",
    artist: "MarineArtist",
    price: 2.3,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
    likes: 789,
    views: 4567,
    category: "Ocean"
  },
  {
    id: 9,
    name: "Retro Gaming",
    artist: "RetroCreator",
    price: 1.5,
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=300&h=300&fit=crop",
    likes: 432,
    views: 2345,
    category: "Retro"
  }
];

interface ExploreNFTsProps {
  darkMode: boolean;
}

const ExploreNFTs: React.FC<ExploreNFTsProps> = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Explore NFTs</h1>
          <p className="text-lg mt-2 text-gray-300">Discover unique digital art and collectibles</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search NFTs..."
              className="bg-[#23214a] text-white pl-10 pr-4 py-2 rounded-lg border border-[#2d295e] focus:border-purple-500 focus:outline-none"
            />
          </div>
          <button className="bg-[#23214a] text-gray-300 px-4 py-2 rounded-lg border border-[#2d295e] hover:bg-[#181A2A] transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Art', 'Gaming', 'Abstract', 'Urban', 'Nature', 'Technology', 'Space'].map((category) => (
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

      {/* Trending Section */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="w-5 h-5 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Trending NFTs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNFTs.filter(nft => nft.isTrending).map((nft) => (
            <div key={nft.id} className="bg-[#23214a] rounded-xl p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-64 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                {nft.isTrending && (
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    Trending
                  </span>
                )}
                {nft.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                <button className="absolute top-2 right-2 bg-[#181A2A] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-white text-lg">{nft.name}</h3>
                  <p className="text-gray-400 text-sm">by {nft.artist}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-gray-300">{nft.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">{nft.views}</span>
                    </div>
                  </div>
                  <span className="text-gray-400">{nft.category}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-white font-bold text-lg">{nft.price} ETH</span>
                    {nft.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">{nft.originalPrice} ETH</span>
                    )}
                  </div>
                  {nft.timeLeft && (
                    <div className="flex items-center space-x-1 text-orange-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{nft.timeLeft}</span>
                    </div>
                  )}
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All NFTs Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">All NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNFTs.map((nft) => (
            <div key={nft.id} className="bg-[#23214a] rounded-xl p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                {nft.isTrending && (
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    Trending
                  </span>
                )}
                {nft.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                <button className="absolute top-2 right-2 bg-[#181A2A] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-white text-lg">{nft.name}</h3>
                <p className="text-gray-400 text-sm">by {nft.artist}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-3 h-3 text-red-400" />
                    <span className="text-gray-300">{nft.likes}</span>
                    <Eye className="w-3 h-3 text-blue-400 ml-2" />
                    <span className="text-gray-300">{nft.views}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{nft.category}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{nft.price} ETH</span>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Content Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Related NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedNFTs.map((nft) => (
            <div key={nft.id} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="font-semibold text-white text-sm mb-1">{nft.name}</h3>
              <p className="text-gray-400 text-xs mb-2">by {nft.artist}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3 text-red-400" />
                  <span className="text-white text-xs">{nft.likes}</span>
                </div>
                <span className="text-white font-semibold text-sm">{nft.price} ETH</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreNFTs; 