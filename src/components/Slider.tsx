import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const sliderData = [
  {
    id: 0,
    title: 'Featured',
    subtitle: 'SHOWCASE',
    ctaText: 'Explore Now',
    ctaIcon: ArrowRight,
    smallText: 'Discover Amazing Content',
    bgImage: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752569666/Screenshot_2025-07-15_094756_xempzx.png',
    mainImage: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752569666/Screenshot_2025-07-15_094756_xempzx.png',
    gradient: 'from-[#1e3c72] via-[#2a5298] to-[#1e3c72]',
    accent: 'bg-blue-600',
  },
  {
    id: 1,
    title: 'Win Free',
    subtitle: '$HPVQ TOKEN',
    ctaText: 'Check Reward Stat',
    ctaIcon: ArrowRight,
    smallText: 'Create Blogs & Win Free Tokens',
    bgImage: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png',
    mainImage: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png',
    gradient: 'from-[#0f0c29] via-[#302b63] to-[#24243e]',
    accent: 'bg-purple-600',
  },
  {
    id: 2,
    title: 'Earn Rewards',
    subtitle: 'DAILY BONUS',
    ctaText: 'View Rewards',
    ctaIcon: ArrowRight,
    smallText: 'Post Daily & Earn Crypto Rewards',
    bgImage: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png',
    mainImage: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png',
    gradient: 'from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]',
    accent: 'bg-red-500',
  },
  {
    id: 3,
    title: 'Join Community',
    subtitle: 'CHEETAH DAO',
    ctaText: 'Learn More',
    ctaIcon: ArrowRight,
    smallText: 'Be Part of Our Growing Community',
    bgImage: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png',
    mainImage: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1752567813/Group_1000004361_mp5b2u.png',
    gradient: 'from-[#000428] to-[#004e92]',
    accent: 'bg-blue-500',
  },
];

const Slider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to navigate between slides
  const navigateSlide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });

      // Update current slide indicator
      const newSlide = direction === 'left'
        ? Math.max(0, currentSlide - 1)
        : Math.min(sliderData.length - 1, currentSlide + 1);
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className="w-full max-w-[1175px] mx-auto overflow-hidden rounded-3xl">
      <div className="relative w-full h-[344px]">
        {/* Slider Content */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide h-full"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {sliderData.map((item) => (
            <div
              key={item.id}
              className={`min-w-full flex-shrink-0 relative overflow-hidden ${item.id === 0 ? 'bg-[#0f1c3f]' : `bg-gradient-to-r ${item.gradient}`} h-full`}
              style={{ scrollSnapAlign: 'start' }}
            >
              {item.id !== 0 && (
                <>
                  {/* Background Pattern/Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

                  {/* Purple Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                </>
              )}

              {/* Content Container */}
              <div className={`relative z-10 flex items-center justify-between h-full ${item.id === 0 ? 'p-0' : 'px-12'}`}>
                {item.id === 0 ? (
                  // First slide: Show only the image, full width
                  <div className="w-full h-full">
                    <img
                      src={item.mainImage}
                      alt="featured content"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <>
                    {/* Left Content */}
                    <div className="flex items-center space-x-8">
                      {/* Icon Circle */}
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                        <img src={item.bgImage} alt="icon" className="w-8 h-8" />
                      </div>

                      {/* Text Content */}
                      <div className="text-white">
                        <div className="text-sm text-gray-300 mb-1">{item.smallText}</div>
                        <div className="text-4xl font-bold mb-2">{item.title}</div>
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4">
                          {item.subtitle}
                        </div>

                        {/* CTA Button */}
                        <button className="flex items-center space-x-2 text-white border-b-2 border-white pb-1 hover:border-purple-400 transition-colors group">
                          <span className="font-medium">{item.ctaText}</span>
                          <item.ctaIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>

                    {/* Right Content - Main Image/Graphic */}
                    <div className="relative">
                      <div className="w-64 h-64 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                        <img src={item.mainImage} alt="main graphic" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Large Background Text - only for non-first slides */}
              {item.id !== 0 && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-8xl font-black text-white/10 select-none pointer-events-none">
                  {item.subtitle.split(' ')[0]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-12 flex space-x-2">
          {sliderData.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => {
                setCurrentSlide(idx);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ left: idx * scrollRef.current.clientWidth, behavior: 'smooth' });
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider; 