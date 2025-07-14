import React from 'react';
import { ShoppingBag, Star, Heart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium NFT Collection",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    category: "NFTs",
    isNew: true
  },
  {
    id: 2,
    name: "Digital Art Bundle",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "Art"
  },
  {
    id: 3,
    name: "Crypto Trading Course",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 256,
    category: "Education",
    isFeatured: true
  },
  {
    id: 4,
    name: "Blockchain Development Kit",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 167,
    category: "Development"
  },
  {
    id: 5,
    name: "Web3 Security Tools",
    price: 179.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 93,
    category: "Security"
  },
  {
    id: 6,
    name: "DeFi Analytics Platform",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1639762681057-408e52174e2b?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 201,
    category: "Analytics",
    isNew: true
  }
];

const relatedProducts: Product[] = [
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
    originalPrice: 349.99,
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

interface ShopProps {
  darkMode: boolean;
}

const Shop: React.FC<ShopProps> = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Shop</h1>
          <p className="text-lg mt-2 text-gray-300">Discover amazing digital products and services</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-[#23214a] text-gray-300 px-4 py-2 rounded-lg border border-[#2d295e] hover:bg-[#181A2A] transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
            <ShoppingBag className="w-4 h-4 inline mr-2" />
            Cart (3)
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {['All', 'NFTs', 'Art', 'Education', 'Development', 'Security', 'Analytics'].map((category) => (
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

      {/* Featured Products */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-[#23214a] rounded-xl p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                {product.isFeatured && (
                  <span className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <button className="absolute top-2 right-2 bg-[#181A2A] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-white text-lg">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.category}</p>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Content Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-[#23214a] rounded-lg p-4 border border-[#2d295e] hover:border-purple-500 transition-all duration-300 group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="font-semibold text-white text-sm mb-1">{product.name}</h3>
              <p className="text-gray-400 text-xs mb-2">{product.category}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs">{product.rating}</span>
                </div>
                <span className="text-white font-semibold text-sm">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop; 