
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <Link to="/" className="text-inpods-blue hover:underline">
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
