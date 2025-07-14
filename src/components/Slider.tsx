import React, { useRef } from 'react';

const sliderData = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
    color: 'from-purple-500 to-pink-500',
    title: 'Web3 Hackathon',
    subtitle: 'Join the biggest event of the year',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/190/190406.png',
    color: 'from-blue-500 to-purple-500',
    title: 'React Summit',
    subtitle: 'Level up your React skills',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/190/190422.png',
    color: 'from-pink-500 to-yellow-400',
    title: 'Blockchain Expo',
    subtitle: 'Explore the future of blockchain',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/190/190423.png',
    color: 'from-green-400 to-blue-400',
    title: 'CSS Mastery',
    subtitle: 'Design like a pro',
  },
];

const Slider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative w-full">
        {/* Left Arrow (hide on mobile) */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#23214a] shadow-lg rounded-full p-2 transition hover:bg-purple-600 border border-[#2d295e] hidden md:block"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <svg width="28" height="28" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        {/* Slider Content */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-3 md:py-4 px-1 md:px-2 rounded-2xl bg-gradient-to-r from-[#1a1440] via-[#23214a] to-[#1a1a2e] shadow-lg min-h-[90px] md:min-h-[120px] items-center"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {sliderData.map((item, idx) => (
            <div
              key={idx}
              className={`min-w-[220px] max-w-xs md:min-w-[340px] md:max-w-sm flex-shrink-0 flex items-center bg-gradient-to-br ${item.color} rounded-xl shadow-md overflow-hidden px-4 py-3 md:px-8 md:py-6 cursor-pointer hover:shadow-xl transition-all border-0 relative`}
              style={{ scrollSnapAlign: 'start', height: '90px', minHeight: '90px', maxHeight: '120px' }}
            >
              {/* Colored vertical bar */}
              <div className={`absolute left-0 top-2 md:top-4 bottom-2 md:bottom-4 w-1 rounded-full bg-gradient-to-b ${item.color} opacity-60`}></div>
              {/* Icon in circle */}
              <div className={`flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#23214a] border-2 border-[#2d295e] mr-3 md:mr-7 z-10`}>
                <img src={item.icon} alt="icon" className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              {/* Text */}
              <div className="ml-2 md:ml-4">
                <div className="font-bold text-white text-sm md:text-lg mb-1 drop-shadow">{item.title}</div>
                <div className="text-xs md:text-sm text-gray-200 font-medium drop-shadow">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow (hide on mobile) */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#23214a] shadow-lg rounded-full p-2 transition hover:bg-purple-600 border border-[#2d295e] hidden md:block"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <svg width="28" height="28" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Slider; 