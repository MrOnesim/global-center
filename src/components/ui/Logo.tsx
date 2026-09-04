import React from 'react';
import { cn } from '@/lib/utils';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Magnifying glass / Outer Ring */}
        <circle cx="45" cy="45" r="42" stroke="black" strokeWidth="6" fill="white" />
        <path
          d="M75 75L92 92"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
        />
        
        {/* Red Globe Background */}
        <circle cx="45" cy="45" r="36" fill="#E11D48" />
        
        {/* Globe Grid Lines (White) */}
        <mask id="globe-mask">
          <circle cx="45" cy="45" r="36" fill="white" />
        </mask>
        
        <g mask="url(#globe-mask)">
          {/* Meridians */}
          <ellipse cx="45" cy="45" rx="15" ry="36" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
          <ellipse cx="45" cy="45" rx="30" ry="36" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
          <line x1="45" y1="9" x2="45" y2="81" stroke="white" strokeWidth="1" opacity="0.6" />
          
          {/* Parallels */}
          <line x1="9" y1="45" x2="81" y2="45" stroke="white" strokeWidth="1" opacity="0.6" />
          <path d="M15 30C25 25 65 25 75 30" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M15 60C25 65 65 65 75 60" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
        </g>

        {/* Text GBC */}
        <text
          x="45"
          y="52"
          fill="white"
          fontSize="22"
          fontWeight="900"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          style={{ letterSpacing: '-1px' }}
        >
          GBC
        </text>
      </svg>
    </div>
  );
}
