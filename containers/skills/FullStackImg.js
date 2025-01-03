import React from 'react';

const MachineLearningEngineerSVG = ({ theme }) => {
  const primaryColor = theme.primary || '#4caf50';
  const secondaryColor = theme.secondary || '#2196f3';
  const accentColor = theme.accent || '#ff5722';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      fill="none"
      width="100%"
      height="100%"
    >
      {/* Background */}
      <rect width="800" height="600" fill={primaryColor} />

      {/* Neural Network */}
      <g>
        <circle cx="200" cy="150" r="20" fill={secondaryColor} />
        <circle cx="300" cy="250" r="20" fill={secondaryColor} />
        <circle cx="400" cy="150" r="20" fill={secondaryColor} />
        <line x1="200" y1="150" x2="300" y2="250" stroke={accentColor} strokeWidth="2" />
        <line x1="300" y1="250" x2="400" y2="150" stroke={accentColor} strokeWidth="2" />
        <line x1="200" y1="150" x2="400" y2="150" stroke={accentColor} strokeWidth="2" />
      </g>

      {/* Laptop */}
      <g>
        <rect x="500" y="350" width="180" height="100" rx="10" fill={secondaryColor} />
        <rect x="510" y="360" width="160" height="70" rx="5" fill="#fff" />
        <text x="520" y="390" fill={primaryColor} fontSize="14">
          ML Model Training...
        </text>
      </g>

      {/* Gears */}
      <g>
        <circle cx="100" cy="500" r="30" fill={accentColor} />
        <circle cx="100" cy="500" r="20" fill={secondaryColor} />
        <rect x="95" y="485" width="10" height="30" fill={primaryColor} transform="rotate(45 100 500)" />
        <rect x="95" y="485" width="10" height="30" fill={primaryColor} transform="rotate(-45 100 500)" />
      </g>

      {/* Dataset Icon */}
      <g>
        <rect x="600" y="100" width="120" height="80" fill={secondaryColor} />
        <circle cx="660" cy="140" r="20" fill={accentColor} />
        <circle cx="640" cy="120" r="10" fill={primaryColor} />
        <circle cx="680" cy="160" r="10" fill={primaryColor} />
      </g>

      {/* Title */}
      <text x="20" y="50" fill="#fff" fontSize="24" fontWeight="bold">
        Machine Learning Engineer
      </text>
    </svg>
  );
};

export default MachineLearningEngineerSVG;