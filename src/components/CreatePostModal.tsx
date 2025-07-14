import React, { useState } from 'react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (post: {
    title: string;
    description: string;
    category: string;
    image: string;
  }) => void;
}

const categories = [
  'React', 'Web3', 'CSS', 'Blockchain', 'Next.js', 'Testing', 'API', 'Other'
];

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError('Title and description are required.');
      return;
    }
    onCreate({ title, description, category, image });
    setTitle('');
    setDescription('');
    setCategory(categories[0]);
    setImage('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#23214a] rounded-xl shadow-lg p-8 w-full max-w-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-white mb-6">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#181A2A] text-white border border-[#2d295e] focus:border-purple-500 focus:outline-none"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Description</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-[#181A2A] text-white border border-[#2d295e] focus:border-purple-500 focus:outline-none"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={4}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Category</label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-[#181A2A] text-white border border-[#2d295e] focus:border-purple-500 focus:outline-none"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Image URL</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#181A2A] text-white border border-[#2d295e] focus:border-purple-500 focus:outline-none"
              value={image}
              onChange={e => setImage(e.target.value)}
              placeholder="https://..."
            />
          </div>
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-5 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-[#a855f7] text-white font-semibold hover:bg-[#9333ea] transition-all duration-300"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal; 