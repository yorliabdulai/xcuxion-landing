import React from 'react'

interface CustomCalendarIconProps {
  size?: number
  className?: string
  color?: string
}

const CustomCalendarIcon: React.FC<CustomCalendarIconProps> = ({ 
  size = 24, 
  className = "", 
  color = "currentColor" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Calendar header lines */}
      <path d="M8 2v4"/>
      <path d="M16 2v4"/>
      {/* Calendar base */}
      <rect width="18" height="18" x="3" y="4" rx="2"/>
      {/* Calendar separator line */}
      <path d="M3 10h18"/>
      {/* Checkmark */}
      <path d="m9 16 2 2 4-4"/>
    </svg>
  )
}

export default CustomCalendarIcon
