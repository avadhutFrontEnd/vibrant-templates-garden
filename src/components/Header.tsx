
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';
import UserDropdown from './UserDropdown';

const Header: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <header className="flex items-center justify-between w-full p-4 border-b border-gray-200">
      <Logo />
      
      <div className="text-center text-lg font-medium">
        Inpods AI Agent
      </div>
      
      <div className="flex items-center">
        {isAuthenticated ? (
          <UserDropdown user={user} />
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
