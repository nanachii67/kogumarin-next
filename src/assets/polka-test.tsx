import React from 'react';

interface PolkaDotBackgroundProps {
  dotSize?: number;
  spacing?: number;
  dotColor?: string;

  className?: string;
  rotation?: number;
  svgPath?: string | null;
}

const PolkaDotBackground: React.FC<PolkaDotBackgroundProps> = ({ 
  dotSize = 12, 
  spacing = 60, 
  dotColor = '#e5e7eb',
  className = '',
  rotation = 45,
  svgPath = null // New prop for custom SVG path or URL
}) => {
  // Calculate the pattern size (spacing between dot centers)
  const patternSize = spacing;
  
  // Create SVG pattern for polka dots or custom SVG
  const patternId = `polka-dots-${Math.random().toString(36).substr(2, 9)}`;
  
  // Default to circle if no custom SVG is provided
  const backgroundImage = svgPath 
    ? `url("${svgPath}")`
    : `url("data:image/svg+xml,%3Csvg width='${patternSize}' height='${patternSize}' viewBox='0 0 ${patternSize} ${patternSize}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodeURIComponent(dotColor)}' fill-opacity='1'%3E%3Ccircle cx='${patternSize/2}' cy='${patternSize/2}' r='${dotSize/2}'/%3E%3C/g%3E%3C/svg%3E")`;
  
  return (
    <div 
      className={`${className}`}
      style={{ 
        backgroundImage,
        backgroundRepeat: 'repeat',
        backgroundSize: `${patternSize}px ${patternSize}px`,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
        // Make pattern infinite by scaling up the container significantly
        width: '200%', // Much larger to ensure full coverage
        height: '200%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-100%', // -50% of scaled height
        marginLeft: '-100%' // -50% of scaled width
      }}
    >
      {/* Content can be placed here */}
    </div>
  );
};

export default PolkaDotBackground;