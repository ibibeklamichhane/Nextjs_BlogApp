import React from 'react';

const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 11H1M1 11L4.5 8M1 11L4.5 14"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.002 6C8.014 3.825 8.111 2.647 8.879 1.879C9.758 1 11.172 1 14 1H15C17.829 1 19.243 1 20.122 1.879C21 2.757 21 4.172 21 7V15C21 17.828 21 19.243 20.122 20.121C19.353 20.89 18.175 20.986 16 20.998M8.002 16C8.014 18.175 8.111 19.353 8.879 20.121C9.52 20.763 10.447 20.936 12 20.983"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default LogoutIcon;
