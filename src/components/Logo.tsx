
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-1">
      <h1 className="text-2xl font-bold">
        <span className="text-inpods-blue">in</span>
        <span className="text-inpods-red">pods</span>
      </h1>
      <p className="text-xs text-gray-500 hidden sm:block">Learning Platform for Better Outcomes</p>
    </Link>
  );
};

export default Logo;
