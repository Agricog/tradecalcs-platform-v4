import { Sparkles } from 'lucide-react';

export default function VIPBanner() {
  const formUrl = 'https://app.smartsuite.com/form/sba974gi/Zx9ZVTVrwE';

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white py-3 px-4 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <a 
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 group"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="text-sm md:text-base font-semibold text-center">
            <span className="hidden md:inline">✨ </span>
            Get VIP Access to New Tools + We Build Bespoke Web Apps for Your Business Problems
            <span className="hidden md:inline"> ✨</span>
          </span>
          <Sparkles className="w-5 h-5 animate-pulse" />
          
          {/* Subtle hover indicator */}
          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2">
            Click here →
          </span>
        </a>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}
