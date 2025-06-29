import { useEffect, useState } from 'react';

const BackgroundEffects: React.FC = () => {
  const dynamicColorClasses = [
    'from-blue-200/30 to-blue-300/20',
    'from-emerald-200/30 to-emerald-300/20',
    'from-amber-200/30 to-amber-300/20',
    'from-cyan-200/25 to-cyan-300/15'
  ];

  const [currentColorClass, setCurrentColorClass] = useState(dynamicColorClasses[0]);

  useEffect(() => {
    let colorIndex = 0;
    
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % dynamicColorClasses.length;
      setCurrentColorClass(dynamicColorClasses[colorIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div 
        className={`absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br ${currentColorClass} rounded-full mix-blend-multiply filter blur-xl animate-liquid-flow transition-all ease-in-out duration-2000`}
      ></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full mix-blend-multiply filter blur-xl animate-liquid-flow animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-amber-300/20 rounded-full mix-blend-multiply filter blur-xl animate-liquid-flow animation-delay-4000"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-200/25 to-cyan-300/15 rounded-full mix-blend-multiply filter blur-xl animate-liquid-flow animation-delay-6000"></div>
    </div>
  );
};

export default BackgroundEffects;