'use client';

import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export default function ExpandableText({ text, maxLength = 120, className = '' }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // If text is shorter than maxLength, no need for truncation
  if (text.length <= maxLength) {
    return <div className={className}>{text}</div>;
  }
  
  return (
    <div 
      className={`${className} cursor-pointer transition-all duration-300`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? (
        text
      ) : (
        <div className="relative">
          <div>{text.substring(0, maxLength)}</div>
          <div className="absolute bottom-0 right-0 left-0 h-6 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      )}
    </div>
  );
} 