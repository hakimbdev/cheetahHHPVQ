import React, { useState } from 'react';
import { Gift, ChevronRight, CheckCircle, Lock, Heart, MessageCircle, Plus } from 'lucide-react';
import { myBlogsData } from '../data/myBlogsData';

const TABS = [
  { label: 'All', count: 100, key: 'all' },
  { label: 'Not Rewarded', count: 10, key: 'not-rewarded' },
  { label: 'Half Claimed', count: 20, key: 'half-claimed' },
  { label: 'Fully Claimed', count: 30, key: 'fully-claimed' },
];

// Simulate reward status for demo
const getRewardStatus = (blog: any) => {
  if (blog.likes >= 100 && blog.comments >= 100) return 'claimed';
  if (blog.likes >= 100) return 'claimable';
  return 'not-rewarded';
};

const Rewards: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [page, setPage] = useState(1);
  const blogsPerPage = 4;

  // Filter blogs by tab
  const filteredBlogs = myBlogsData.filter((blog) => {
    const status = getRewardStatus(blog);
    if (activeTab === 'all') return true;
    if (activeTab === 'not-rewarded') return status === 'not-rewarded';
    if (activeTab === 'half-claimed') return status === 'claimable';
    if (activeTab === 'fully-claimed') return status === 'claimed';
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181B2A] to-[#1B1740] px-4 py-8 text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Rewards</h1>
        <div className="flex flex-wrap gap-4 mb-8">
          {/* My Rewards Card */}
          <div className="flex-1 min-w-[260px] bg-[#23244A] rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <button className="px-4 py-1 rounded-full bg-[#23244A] border border-[#3B3C6C] text-xs font-semibold mb-2">My Rewards</button>
            </div>
            <div className="text-lg font-semibold mb-1">My Rewards</div>
            <div className="text-xs text-[#B0B3D6] mb-2">Claim free $HPVQ Token as rewards when your blog posts accumulate 100k and above engagements</div>
          </div>
          {/* Token Balance Card */}
          <div className="flex-1 min-w-[260px] bg-[#23244A] rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div className="text-lg font-semibold mb-2">Token Balance (HPVQ)</div>
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-6 h-6 text-[#B16FFF]" />
              <span className="text-3xl font-bold">129.000</span>
            </div>
            <a href="#" className="text-xs text-[#B16FFF] hover:underline">Check Reward Stat <ChevronRight className="inline w-3 h-3" /></a>
          </div>
          {/* Bulk Action Card */}
          <div className="flex-1 min-w-[260px] bg-[#23244A] rounded-2xl p-6 flex flex-col justify-between shadow-lg items-end">
            <div className="text-lg font-semibold mb-2">Bulk Action</div>
            <button className="px-6 py-2 rounded-lg bg-[#7B3FF2] hover:bg-[#B16FFF] text-white font-bold shadow mt-auto">Claim All</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setPage(1); }}
              className={`px-4 py-1 rounded-full text-sm font-semibold border transition-colors ${activeTab === tab.key ? 'bg-[#7B3FF2] border-[#7B3FF2] text-white' : 'bg-[#23244A] border-[#3B3C6C] text-[#B0B3D6] hover:bg-[#2C2D5A]'}`}
            >
              {tab.label}
              <span className="ml-2 text-xs">({tab.count})</span>
            </button>
          ))}
          <button className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7B3FF2] hover:bg-[#B16FFF] text-white font-bold shadow">
            <Plus className="w-4 h-4" /> Create Blog
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {paginatedBlogs.map((blog) => {
            const rewardStatus = getRewardStatus(blog);
            return (
              <div key={blog.id} className="bg-[#23244A] rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-[#B0B3D6] mb-1">{blog.category}</div>
                  <div className="text-lg font-bold mb-1 text-white line-clamp-2">{blog.title}</div>
                  <div className="text-sm text-[#B0B3D6] mb-2 line-clamp-2">{blog.description}</div>
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="author" className="w-6 h-6 rounded-full border-2 border-[#7B3FF2]" />
                    <span className="text-xs text-white font-semibold">Jacob Jones</span>
                    <span className="text-xs text-[#B0B3D6]">11 Jan 2022</span>
                  </div>
                  {/* Engagement Stats */}
                  <div className="bg-[#1B1740] rounded-xl p-4 mb-2 flex flex-col gap-2">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1 text-[#FF5A92]">
                        <Heart className="w-4 h-4" />
                        <span className="font-semibold">{blog.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#B16FFF]">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-semibold">{blog.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex-1 flex flex-col gap-1">
                        <span className="text-xs text-[#B0B3D6]">Likes:</span>
                        <span className="text-sm font-semibold text-white">{blog.likes}</span>
                      </div>
                      <div className="flex-1 flex flex-col gap-1">
                        <span className="text-xs text-[#B0B3D6]">Comments:</span>
                        <span className="text-sm font-semibold text-white">{blog.comments}</span>
                      </div>
                      <div className="flex-1 flex flex-col gap-1 items-end">
                        {rewardStatus === 'claimed' && (
                          <button className="px-4 py-1 rounded-lg bg-[#23244A] border border-[#3B3C6C] text-[#B0B3D6] font-semibold flex items-center gap-1" disabled>
                            <CheckCircle className="w-4 h-4 text-green-400" /> Claimed
                          </button>
                        )}
                        {rewardStatus === 'claimable' && (
                          <button className="px-4 py-1 rounded-lg bg-[#7B3FF2] hover:bg-[#B16FFF] text-white font-semibold flex items-center gap-1">
                            <Gift className="w-4 h-4" /> Claim
                          </button>
                        )}
                        {rewardStatus === 'not-rewarded' && (
                          <button className="px-4 py-1 rounded-lg bg-[#23244A] border border-[#3B3C6C] text-[#B0B3D6] font-semibold flex items-center gap-1" disabled>
                            <Lock className="w-4 h-4 text-gray-400" /> Not Rewarded
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded bg-[#23244A] text-[#B0B3D6] font-bold disabled:opacity-50"
          >
            {'<'}
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded font-bold ${page === i + 1 ? 'bg-[#7B3FF2] text-white' : 'bg-[#23244A] text-[#B0B3D6] hover:bg-[#2C2D5A]'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded bg-[#23244A] text-[#B0B3D6] font-bold disabled:opacity-50"
          >
            {'>'}
          </button>
        </div>

        {/* Related Content Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Earn More Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Write Trending Posts", description: "Create engaging content that gets high engagement", reward: "50 HPVQ", icon: "📈" },
              { title: "Comment on Posts", description: "Engage with the community to earn rewards", reward: "10 HPVQ", icon: "💬" },
              { title: "Share Content", description: "Share your posts on social media", reward: "25 HPVQ", icon: "📤" }
            ].map((item, index) => (
              <div key={index} className="bg-[#23244A] rounded-xl p-4 border border-[#3B3C6C] hover:border-[#7B3FF2] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                    <p className="text-[#B0B3D6] text-xs">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#B16FFF] font-semibold text-sm">{item.reward}</span>
                  <button className="bg-[#7B3FF2] hover:bg-[#B16FFF] text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors">
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards; 