import React from 'react';
interface BookmarkIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  

}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ 
  className,
  ...props 
 
 }) => ( 
  <svg
    width="22"
    height="22"
    viewBox="0 0 134 202"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M100.75 16.5H33.25C28.7745 16.5 24.4822 18.5545 21.3176 22.2114C18.1529 25.8684 16.375 30.8283 16.375 36V185.5L67 133.5L117.625 185.5V36C117.625 30.8283 115.847 25.8684 112.682 22.2114C109.518 18.5545 105.226 16.5 100.75 16.5Z"
      stroke="black"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default BookmarkIcon;
