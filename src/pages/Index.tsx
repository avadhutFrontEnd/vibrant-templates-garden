
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-inpods-blue">in</span>
            <span className="text-inpods-red">pods</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The AI-powered learning platform for better outcomes
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/signup"
              className="px-6 py-3 bg-inpods-blue text-white rounded-md hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/signin"
              className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              Log In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
