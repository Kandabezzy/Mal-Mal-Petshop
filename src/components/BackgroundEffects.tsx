
import React, { useEffect } from 'react';

const BackgroundEffects: React.FC = () => {
  useEffect(() => {
    const colors = [
      'from-blue-300/40', 
      'from-emerald-300/40', 
      'from-amber-300/40', 
      'from-cyan-300/40'
    ];
    let colorIndex = 0;
    
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      document.documentElement.style.setProperty('--dynamic-gradient', colors[colorIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-liquid-flow"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full mix-blend-multiply filter blur-xl animate-liquid-flow animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-amber-300/20 rounded-full mix-blend-multiply filter blur-xl animate-liquid-flow animation-delay-4000"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-200/25 to-cyan-300/15 rounded-full mix-blend-multiply filter blur-xl animate-liquid-flow animation-delay-6000"></div>
    </div>
  );
};

export default BackgroundEffects;
